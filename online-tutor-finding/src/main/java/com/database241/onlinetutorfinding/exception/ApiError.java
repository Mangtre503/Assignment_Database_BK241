package com.database241.onlinetutorfinding.exception;


import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Builder
public class ApiError
{
    private int status;
    private String error;
    private String message;
    private LocalDateTime timestamp;
}
