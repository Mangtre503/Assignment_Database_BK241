package com.database241.onlinetutorfinding.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.database241.onlinetutorfinding.request.ClassCreateClassRequestDto;
import com.database241.onlinetutorfinding.request.ClassUpdateClassRequestDto;
import com.database241.onlinetutorfinding.response.ClassGetClassResponseDto;
import com.database241.onlinetutorfinding.service.ClassService;
import com.microsoft.sqlserver.jdbc.SQLServerException;

import lombok.RequiredArgsConstructor;


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


    @GetMapping("{classId}")
    public ResponseEntity<ClassGetClassResponseDto> getClass(@PathVariable Long classId)
    {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body
                        (
                                classService.getClass(classId)
                        );
    }


    @PutMapping
    public void updateClass(@RequestBody ClassUpdateClassRequestDto classUpdateClassRequestDto) throws SQLServerException
    {
        classService.updateClass(classUpdateClassRequestDto);
    }


    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteClass(@PathVariable Long id) throws SQLServerException
    {
        classService.deleteClass(id);
    }
}

