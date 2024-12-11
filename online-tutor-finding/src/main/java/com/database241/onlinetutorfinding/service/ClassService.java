package com.database241.onlinetutorfinding.service;


import com.database241.onlinetutorfinding.repository.ClassDao;
import com.database241.onlinetutorfinding.repository.ClassRepository;
import com.database241.onlinetutorfinding.request.ClassCreateClassRequestDto;
import com.microsoft.sqlserver.jdbc.SQLServerException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class ClassService
{
    private final ClassRepository classRepository;
    private final ClassDao classDao;

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
}
