package com.database241.onlinetutorfinding.service;


import com.database241.onlinetutorfinding.entity.clAss.Class;
import com.database241.onlinetutorfinding.exception.ResourceNotFoundException;
import com.database241.onlinetutorfinding.mapper.ClassMapper;
import com.database241.onlinetutorfinding.repository.ClassDao;
import com.database241.onlinetutorfinding.repository.ClassRepository;
import com.database241.onlinetutorfinding.repository.ClassRepositoryJPA;
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


    public void createClass(ClassCreateClassRequestDto classCreateClassRequestDto)
            throws SQLServerException
    {
        Long insertedClassId = classRepository.insertTableClass
                (
                        classCreateClassRequestDto.classDeposit(),
                        classCreateClassRequestDto.classStatus(),
                        classCreateClassRequestDto.commissionFee(),
                        classCreateClassRequestDto.requirements(),
                        classCreateClassRequestDto.dateStart(),
                        classCreateClassRequestDto.salary(),
                        classCreateClassRequestDto.addrId(),
                        classCreateClassRequestDto.studentId(),
                        classCreateClassRequestDto.tsId(),
                        classCreateClassRequestDto.tutorId()
                );
        classDao.insertHasSubject(insertedClassId, classCreateClassRequestDto.subjectIds());
        classDao.insertHasClassType(insertedClassId, classCreateClassRequestDto.classTypeIds());
        classDao.insertTime(insertedClassId, classCreateClassRequestDto.dateAndTimeDtoList());
    }


    public void updateClass(ClassUpdateClassRequestDto classUpdateClassRequestDto)
            throws SQLServerException
    {
        if ( classDao.updateClass(classUpdateClassRequestDto) == 0 )
        {
            throw new RuntimeException("Class has been altered or deleted");
        }
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
