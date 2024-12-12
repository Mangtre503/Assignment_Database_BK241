package com.database241.onlinetutorfinding.mapper;

import com.database241.onlinetutorfinding.response.ClassGetAllClassesResponseDto;
import com.database241.onlinetutorfinding.entity.clAss.Class;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface ClassMapper
{
    Class toEntity(ClassGetAllClassesResponseDto classGetAllClassesResponseDto);

    ClassGetAllClassesResponseDto toDto(Class aClass);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Class partialUpdate(ClassGetAllClassesResponseDto classGetAllClassesResponseDto, @MappingTarget Class aClass);
}