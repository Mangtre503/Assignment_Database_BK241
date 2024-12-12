package com.database241.onlinetutorfinding.service;


import com.database241.onlinetutorfinding.entity.clAss.Class;
import com.database241.onlinetutorfinding.exception.ResourceNotFoundException;
import com.database241.onlinetutorfinding.mapper.ClassMapper;
import com.database241.onlinetutorfinding.repository.ClassDao;
import com.database241.onlinetutorfinding.repository.ClassRepository;
import com.database241.onlinetutorfinding.repository.ClassRepositoryJPA;
import com.database241.onlinetutorfinding.repository.SystemUserRepository;
import com.database241.onlinetutorfinding.request.ClassCreateClassRequestDto;
import com.database241.onlinetutorfinding.request.ClassUpdateClassRequestDto;
import com.database241.onlinetutorfinding.response.ClassGetClassResponseDto;
import com.microsoft.sqlserver.jdbc.SQLServerException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.SQLException;


@Service
@RequiredArgsConstructor
@Transactional
public class ClassService
{
    private final ClassRepository classRepository;
    private final ClassDao classDao;
    private final ClassRepositoryJPA classRepositoryJPA;
    private final ClassMapper classMapper;
    private final SystemUserRepository systemUserRepository;


    public void createClass(ClassCreateClassRequestDto classCreateClassRequestDto)
            throws SQLServerException
    {
        String studentPhoneNumber = classCreateClassRequestDto.studentPhoneNumber();
        String tutorPhoneNumber = classCreateClassRequestDto.tutorPhoneNumber();

        Long studentId = systemUserRepository
                .findByPhoneNumber(studentPhoneNumber)
                .orElseThrow(() -> new ResourceNotFoundException("Student not found: " + studentPhoneNumber)).getId();

        Long tutorId = systemUserRepository
                .findByPhoneNumber(tutorPhoneNumber)
                .orElseThrow(() -> new ResourceNotFoundException("Tutor not found: " + tutorPhoneNumber)).getId();


        Long insertedClassId = classRepository.insertTableClass
                (
                        classCreateClassRequestDto.classDeposit(),
                        classCreateClassRequestDto.classStatus(),
                        classCreateClassRequestDto.commissionFee(),
                        classCreateClassRequestDto.requirements(),
                        classCreateClassRequestDto.dateStart(),
                        classCreateClassRequestDto.salary(),
                        classCreateClassRequestDto.addrId(),
                        studentId,
                        classCreateClassRequestDto.tsId(),
                        tutorId
                );

        classDao.insertHasSubject(insertedClassId, classCreateClassRequestDto.subjectIds());
        classDao.insertHasClassType(insertedClassId, classCreateClassRequestDto.classTypeIds());
        classDao.insertTime(insertedClassId, classCreateClassRequestDto.dateAndTimeDtoList());
    }


    public void updateClass(ClassUpdateClassRequestDto classUpdateClassRequestDto)
            throws SQLServerException
    {
        classDao.updateClass(classUpdateClassRequestDto);
        if (classUpdateClassRequestDto.subjectIds() != null)
            /*
            The procedure will create a new joined values
             */
            classDao.insertHasSubject(classUpdateClassRequestDto.classId(), classUpdateClassRequestDto.subjectIds());

        if (classUpdateClassRequestDto.classTypeIds() != null)
            classDao.insertHasClassType(classUpdateClassRequestDto.classId(), classUpdateClassRequestDto.classTypeIds());

        if (classUpdateClassRequestDto.dateAndTimeDtoList() != null)
            classDao.insertTime(classUpdateClassRequestDto.classId(), classUpdateClassRequestDto.dateAndTimeDtoList());
    }


    public void deleteClass(Long id) throws SQLServerException
    {
        classDao.deleteClass(id);
    }


    public ClassGetClassResponseDto getClass(Long classId)
    {
        Class aClass = classRepositoryJPA.findById(classId).orElseThrow(() -> new ResourceNotFoundException("Class not found: " + classId));

        return classMapper.toDto1(aClass);
    }
}
