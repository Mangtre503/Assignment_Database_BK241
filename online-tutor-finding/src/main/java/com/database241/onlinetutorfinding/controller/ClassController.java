// // package com.database241.onlinetutorfinding.controller;


// // import org.springframework.web.bind.annotation.RequestMapping;
// // import org.springframework.web.bind.annotation.RestController;

// // @RestController
// // @RequestMapping("api/v1/classes")
// // public class ClassController
// // {
// // }

// package com.database241.onlinetutorfinding.controller;


// import com.database241.onlinetutorfinding.entity.clAss.Class;
// import com.database241.onlinetutorfinding.repository.ClassRepository;
// import lombok.RequiredArgsConstructor;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import java.util.List;

// @RestController
// @RequestMapping("/classes")
// public class ClassController {
//     private final ClassRepository classRepository;

//     @Autowired
//     public ClassController(ClassRepository classRepository) {
//         this.classRepository = classRepository;
//     }

   
//     @GetMapping
//     public List<Class> getAllClasses() {
//         return classRepository.findAll();
//     }
// }

