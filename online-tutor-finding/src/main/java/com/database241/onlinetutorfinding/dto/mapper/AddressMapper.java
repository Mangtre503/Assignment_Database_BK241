package com.database241.onlinetutorfinding.dto.mapper;

import com.database241.onlinetutorfinding.dto.AddressGetAllAddressesResponseDto;
import com.database241.onlinetutorfinding.entity.address.Address;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface AddressMapper {
    @Mapping(source = "wardName", target = "ward.wardName")
    @Mapping(source = "districtCityName", target = "ward.districtCity.districtCityName")
    @Mapping(source = "provinceName", target = "ward.districtCity.province.provinceName")
    Address toEntity(AddressGetAllAddressesResponseDto addressGetAllAddressesResponseDto);

    @InheritInverseConfiguration(name = "toEntity")
    AddressGetAllAddressesResponseDto toDto(Address address);

    @InheritConfiguration(name = "toEntity")
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Address partialUpdate(AddressGetAllAddressesResponseDto addressGetAllAddressesResponseDto, @MappingTarget Address address);
}