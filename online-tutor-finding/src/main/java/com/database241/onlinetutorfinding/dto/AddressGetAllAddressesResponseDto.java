package com.database241.onlinetutorfinding.dto;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.database241.onlinetutorfinding.entity.address.Address}
 */
@Value
public class AddressGetAllAddressesResponseDto implements Serializable {
    Long id;
    Integer houseNumber;
    String streetName;
    String provinceName;
    String districtCityName;
    String wardName;
}