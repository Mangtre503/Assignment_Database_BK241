package com.database241.onlinetutorfinding.dto;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

/**
 * DTO for {@link com.database241.onlinetutorfinding.entity.clAss.Class}
 */
public record ClassCreateClassRequestDto
        (Long classDeposit,
         String classStatus,
         Long commissionFee,
         String requirements,
         LocalDateTime dateStart,
         Long salary,
         Long addrId,
         Long studentId,
         Long tutorId,
         List<Long> subjectIds,
         List<Long> classTypeIds,
         List<Long> )
        implements Serializable
{
}