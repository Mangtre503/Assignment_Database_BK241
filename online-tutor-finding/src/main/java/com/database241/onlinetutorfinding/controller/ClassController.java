package com.database241.onlinetutorfinding.controller;

import com.database241.onlinetutorfinding.request.ClassCreateClassRequestDto;
import com.database241.onlinetutorfinding.service.ClassService;
import com.microsoft.sqlserver.jdbc.SQLServerException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1/classes")
@RequiredArgsConstructor
public class ClassController
{
    private final ClassService classService;

    @PostMapping
    public void createClass(@RequestBody ClassCreateClassRequestDto classCreateClassRequestDto)
            throws SQLServerException
    {
        classService.createClass(classCreateClassRequestDto);
    }
}

