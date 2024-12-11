package com.database241.onlinetutorfinding.controller;


import com.database241.onlinetutorfinding.service.ClassService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/v1/classes")
@RequiredArgsConstructor
public class ClassController
{
    private final ClassService classService;

    @PostMapping
    ResponseEntity<Void> createClass()
    {
        classService.createClass();
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .build();
    }
}
