package com.database241.onlinetutorfinding.controller;


import com.database241.onlinetutorfinding.dto.AddressGetAllAddressesResponseDto;
import com.database241.onlinetutorfinding.service.AddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("api/v1/addresses")
@RequiredArgsConstructor
public class AddressController
{
    private final AddressService addressService;


    @GetMapping("{phoneNumber}")
    public List<AddressGetAllAddressesResponseDto> getAddress(@PathVariable("phoneNumber") String phoneNumber)
    {
        return addressService.getAllAddresses(phoneNumber);
    }
}
