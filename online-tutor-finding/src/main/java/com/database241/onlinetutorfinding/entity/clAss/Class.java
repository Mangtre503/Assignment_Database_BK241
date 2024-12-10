package com.database241.onlinetutorfinding.entity.clAss;

import java.time.LocalDateTime;
import java.util.LinkedHashSet;
import java.util.Set;

import com.database241.onlinetutorfinding.entity.address.Address;
import com.database241.onlinetutorfinding.entity.user.Student;
import com.database241.onlinetutorfinding.entity.user.Tutor;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "class")
public class Class {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "class_id", nullable = false)
    private Long id;

    @Column(name = "class_deposit")
    private Long classDeposit;

    @Column(name = "class_status")
    private String classStatus;

    @Column(name = "commission_fee")
    private Long commissionFee;

    @Column(name = "requirements")
    private String requirements;

    @Column(name = "date_start")
    private LocalDateTime dateStart;

    @Column(name = "salary")
    private Long salary;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "addr_id", nullable = false)
    private Address address;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "ts_id", nullable = false)
    private TeachingStyle teachingStyle;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tutor_id")
    private Tutor tutor;

    @ManyToMany
    @JoinTable(name = "has_class_type",
            joinColumns = @JoinColumn(name = "class_id"),
            inverseJoinColumns = @JoinColumn(name = "class_type_id"))
    private Set<ClassType> classTypes = new LinkedHashSet<>();

    @ManyToMany
    @JoinTable(name = "has_subject",
            joinColumns = @JoinColumn(name = "class_id"),
            inverseJoinColumns = @JoinColumn(name = "subject_id"))
    private Set<Subject> subjects = new LinkedHashSet<>();

    @OneToMany(mappedBy = "aClass", cascade = {CascadeType.PERSIST, CascadeType.REMOVE}, orphanRemoval = true)
    private Set<DatesAndTimes> datesAndTimes = new LinkedHashSet<>();
}