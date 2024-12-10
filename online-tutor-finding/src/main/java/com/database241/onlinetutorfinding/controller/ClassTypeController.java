package com.database241.onlinetutorfinding.controller;

import com.database241.onlinetutorfinding.entity.user.SystemUser;
import com.database241.onlinetutorfinding.repository.SystemUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/types")
@RequiredArgsConstructor
public class ClassTypeController
{
    private final ClassTypeRepository classTypeRepository;
    private final SystemUserRepository systemUserRepository;


     @GetMapping
    /*
    Skip service layer because of simplicity
     */
    ResponseEntity<List<ClassType>> getAllClassTypes()
    {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(classTypeRepository.findAll());
    }
   
}
