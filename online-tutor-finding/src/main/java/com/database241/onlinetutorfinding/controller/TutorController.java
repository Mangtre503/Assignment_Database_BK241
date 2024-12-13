package com.database241.onlinetutorfinding.controller;


import com.database241.onlinetutorfinding.response.TutorSummaryResponseDto;
import com.database241.onlinetutorfinding.service.TutorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("api/v1/tutors/summary")
@RequiredArgsConstructor
public class TutorController
{
    private final TutorService tutorService;


    @GetMapping
    ResponseEntity<List<TutorSummaryResponseDto>> getTutorSummary
            (
                    @RequestParam(required = false) Integer minClassNum,
                    @RequestParam(required = false) Long minClassMoney,
                    @RequestParam(defaultValue = "1") Integer pageNumber,
                    @RequestParam(defaultValue = "10") Integer pageSize
            )
    {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(tutorService.getTutorSummary(minClassNum, minClassMoney, pageNumber, pageSize));
    }
}
