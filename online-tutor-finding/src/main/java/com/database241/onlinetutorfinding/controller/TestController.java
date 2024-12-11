// package com.database241.onlinetutorfinding.controller;


// import com.database241.onlinetutorfinding.entity.user.SystemUser;
// import com.database241.onlinetutorfinding.repository.UserRepository;
// import lombok.RequiredArgsConstructor;
// import org.springframework.web.bind.annotation.*;


// @RestController
// @RequiredArgsConstructor
// @RequestMapping("api/v1/test/student/")
// public class TestController
// {
//     private final UserRepository userRepository;

//     @GetMapping("/{id}")
//     public SystemUser getSystemUser(@PathVariable Long id)
//     {
//         return userRepository.findById(id).get();
//     }
// }
