package com.database241.onlinetutorfinding.entity.clAss;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "class_type")
public class ClassType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "class_type_id", nullable = false)
    private Long id;

    @Column(name = "class_type_name")
    private String classTypeName;
}