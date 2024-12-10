package com.database241.onlinetutorfinding.repository;


import com.database241.onlinetutorfinding.entity.clAss.Class;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ClassRepository extends JpaRepository<Class, Long> {
}
