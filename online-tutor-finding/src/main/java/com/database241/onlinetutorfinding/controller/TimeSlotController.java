package com.database241.onlinetutorfinding.controller;


import com.database241.onlinetutorfinding.entity.clAss.TimeSlot;
import com.database241.onlinetutorfinding.repository.TimeSlotRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("api/v1/times")
@RequiredArgsConstructor
public class TimeSlotController
{
    private final TimeSlotRepository timeSlotRepository;


    @GetMapping
    ResponseEntity<List<TimeSlot>> getTimeSlots()
    {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(timeSlotRepository.findAll());
    }
}
