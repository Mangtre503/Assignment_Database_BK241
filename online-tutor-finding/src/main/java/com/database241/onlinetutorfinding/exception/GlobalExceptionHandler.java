package com.database241.onlinetutorfinding.exception;


import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;


@RestControllerAdvice
public class GlobalExceptionHandler
{
    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ApiError handleResourceNotFoundException(ResourceNotFoundException resourceNotFoundException)
    {
       return ApiError
               .builder()
               .status(HttpStatus.NOT_FOUND.value())
               .error("RESOURCE_NOT_FOUND")
               .message(resourceNotFoundException.getMessage())
               .timestamp(LocalDateTime.now())
               .build();
    }


    @ExceptionHandler(DataAccessException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiError handleDataAccessException(DataAccessException dataAccessException)
    {
        String errorMessage = dataAccessException.getRootCause().getMessage();
        return ApiError
                .builder()
                .status(HttpStatus.BAD_REQUEST.value())
                .error("BAD_REQUEST")
                .message(errorMessage)
                .timestamp(LocalDateTime.now())
                .build();
    }


    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ApiError handleException(Exception exception)
    {
        return ApiError
                .builder()
                .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                .error("INTERNAL_SERVER_ERROR")
                .message(exception.getMessage())
                .timestamp(LocalDateTime.now())
                .build();
    }
}
