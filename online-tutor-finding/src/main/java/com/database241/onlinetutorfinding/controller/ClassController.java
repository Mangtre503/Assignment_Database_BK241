package com.database241.onlinetutorfinding.controller;

import com.database241.onlinetutorfinding.request.ClassCreateClassRequestDto;
import com.database241.onlinetutorfinding.request.ClassUpdateClassRequestDto;
import com.database241.onlinetutorfinding.response.ClassGetClassResponseDto;
import com.database241.onlinetutorfinding.response.ClassGetClassesResponseDto;
import com.database241.onlinetutorfinding.service.ClassService;
import com.microsoft.sqlserver.jdbc.SQLServerException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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


    @GetMapping
    public Page<ClassGetClassesResponseDto> getPaginatedClasses(
            Pageable pageable,
            @RequestParam(required = false) String classTypeName,
            @RequestParam(required = false) String tsName,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String classStatus,
            @RequestParam(required = false) String subjectName,
            @RequestParam(required = false) String phoneNumber,
            @RequestParam(required = false) String dateStartFrom,
            @RequestParam(required = false) String dateStartTo,
            @RequestParam(defaultValue = "ASC") String sortOrder
    ) {
        return classService.getPaginatedClasses(
                pageable,
                classTypeName,
                tsName,
                name,
                classStatus,
                subjectName,
                phoneNumber,
                dateStartFrom,
                dateStartTo,
                sortOrder
        );
    }
}

