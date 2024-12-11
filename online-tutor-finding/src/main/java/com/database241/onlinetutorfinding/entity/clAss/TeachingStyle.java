package com.database241.onlinetutorfinding.entity.clAss;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "teaching_style")
public class TeachingStyle
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ts_id", nullable = false)
    private Long id;

    @Column(name = "ts_name")
    private String tsName;
}