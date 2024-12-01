package com.database241.onlinetutorfinding.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "student")
@PrimaryKeyJoinColumn(name = "student_id")
public class Student extends SystemUser
{
    @Column(name = "stu_grade")
    private Integer stuGrade;

    @Column(name = "stu_school")
    private String stuSchool;
}