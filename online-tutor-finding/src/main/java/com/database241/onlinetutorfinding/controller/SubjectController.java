package com.database241.onlinetutorfinding.controller;


import com.database241.onlinetutorfinding.entity.clAss.Subject;
import com.database241.onlinetutorfinding.repository.SubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/subjects")
@RequiredArgsConstructor
public class SubjectController
{
    private final SubjectRepository subjectRepository;

    @GetMapping
    /*
    Skip service layer because of simplicity
     */
    ResponseEntity<List<Subject>> getAllSubjects()
    {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(subjectRepository.findAll());
    }
}
