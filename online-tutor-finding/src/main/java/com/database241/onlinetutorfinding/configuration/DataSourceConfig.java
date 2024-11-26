package com.database241.onlinetutorfinding.configuration;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;


/*
    Use with database's procedures
 */
@Configuration
public class DataSourceConfig
{
    @Bean
    JdbcTemplate getJdbcTemplate(DataSource dataSource)
    {
        return new JdbcTemplate(dataSource);
    }
}
