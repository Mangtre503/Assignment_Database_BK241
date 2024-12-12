package com.database241.onlinetutorfinding.service;


import com.database241.onlinetutorfinding.entity.address.Address;
import com.database241.onlinetutorfinding.repository.AddressRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
@Transactional
public class AddressService
{
    private final AddressRepository addressRepository;
    private final AddressMapper addressMapper;


    public List<AddressGetAllAddressesResponseDto> getAllAddresses(String phoneNumber)
    {
        List<Address> addressList = addressRepository.findAddressesByPhoneNumber(phoneNumber);

        return addressList
                .stream()
                .map(addressMapper::toDto)
                .collect(Collectors.toList());
    }
}
