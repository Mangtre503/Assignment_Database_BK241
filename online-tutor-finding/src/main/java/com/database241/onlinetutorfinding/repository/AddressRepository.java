package com.database241.onlinetutorfinding.repository;


import com.database241.onlinetutorfinding.entity.address.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface AddressRepository extends JpaRepository<Address, Long>
{
    @Query("SELECT a " +
            "FROM Address a " +
            "JOIN a.systemUser u " +
            "WHERE u.phoneNumber = :phoneNumber")
    List<Address> findAddressesByPhoneNumber(@Param("phoneNumber") String phoneNumber);
}
