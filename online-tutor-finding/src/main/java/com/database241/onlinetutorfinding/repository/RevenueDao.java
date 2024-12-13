package com.database241.onlinetutorfinding.repository;


import com.database241.onlinetutorfinding.response.RevenueResultFunctionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;


@Repository
@RequiredArgsConstructor
public class RevenueDao
{
    private final JdbcTemplate jdbcTemplate;


    public RevenueResultFunctionResponse calculateRevenue(String types, String inputValues)
    {
        String sql = "SELECT " +
                "Current_Revenue, " +
                "Expected_Revenue, " +
                "Discount_Revenue, " +
                "Error_Message " +
                "FROM " +
                "dbo.Calculate_Revenue (?, ?)";
        List<RevenueResultFunctionResponse> result = jdbcTemplate
                .query
                        (
                                sql,
                                new RowMapper<RevenueResultFunctionResponse>()
                                {
                                    @Override
                                    public RevenueResultFunctionResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
                                        return new RevenueResultFunctionResponse
                                                (
                                                        rs.getDouble("Current_Revenue"),
                                                        rs.getDouble("Expected_Revenue"),
                                                        rs.getDouble("Discount_Revenue"),
                                                        rs.getString("Error_Message")
                                                );
                                    }
                                },
                                types,
                                inputValues
                        );

        return result.isEmpty() ? null : result.get(0);
    }
}
