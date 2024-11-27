package com.database241.onlinetutorfinding.repository;

import com.database241.onlinetutorfinding.entity.Student;
import com.database241.onlinetutorfinding.entity.SystemUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<SystemUser, Long>
{
    SystemUser findSystemUserByPhoneNumber(String phoneNumber);

    SystemUser findSystemUserById(Long id);
}
