package com.database241.onlinetutorfinding.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
@Transactional
public class AddressService
{
//    private final AddressRepository addressRepository;
//    private final AddressMapper addressMapper;
//
//
//    public List<AddressGetAddressesDto> getAllAddresses(String phoneNumber)
//    {
//        List<Address> addressList = addressRepository.findAddressesByPhoneNumber(phoneNumber);
//
//        System.out.println(addressList.get(0).getId());
//
//        return addressList
//                .stream()
//                .map(addressMapper::toDto)
//                .collect(Collectors.toList());
//    }
}
