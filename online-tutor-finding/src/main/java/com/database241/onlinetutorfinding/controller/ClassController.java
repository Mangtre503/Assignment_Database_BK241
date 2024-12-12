package com.database241.onlinetutorfinding.controller;

import com.database241.onlinetutorfinding.request.ClassCreateClassRequestDto;
import com.database241.onlinetutorfinding.request.ClassUpdateClassRequestDto;
import com.database241.onlinetutorfinding.response.ClassGetClassResponseDto;
import com.database241.onlinetutorfinding.service.ClassService;
import com.microsoft.sqlserver.jdbc.SQLServerException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;


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

