package com.database241.onlinetutorfinding.service;


import com.database241.onlinetutorfinding.repository.ClassRepositoryProcedure;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;


@Service
@RequiredArgsConstructor
public class ClassService
{
    private final ClassRepositoryProcedure classRepositoryProcedure;


    public void createClass()
    {
        /*
        insert basic information using the insert_class procedure
        assign different properties of the class using JPA
         */
        Long insertedClassId = classRepositoryProcedure
                .insertClass(100_000L, "Chua giao", 50L, "At JLPT N5", LocalDateTime.of(2024, 12, 24, 0, 0, 0), 500_000L, 2L, 2L, 1L, 13L);
        System.out.println(insertedClassId);
    }
}
