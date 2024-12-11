package com.database241.onlinetutorfinding.repository;

import com.database241.onlinetutorfinding.request.DateAndTimeDto;
import com.microsoft.sqlserver.jdbc.SQLServerDataTable;
import com.microsoft.sqlserver.jdbc.SQLServerException;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
@RequiredArgsConstructor
public class ClassDao
{
    private JdbcTemplate jdbcTemplate;


    public void insertHasSubject(Long classId, List<Long> subjectIds)
    {
        SimpleJdbcCall simpleJdbcCall =
                new SimpleJdbcCall(jdbcTemplate)
                .withSchemaName("dbo")
                .withProcedureName("insert_has_subject");

        Map<String, Object> inputParams = new HashMap<>();
        inputParams.put("class_id", classId);
        inputParams.put("subject_id_list", createTVP(subjectIds));

        simpleJdbcCall.execute(inputParams);
    }


    public void insertHasClassType(Long classId, List<Long> classTypeIds)
    {
        SimpleJdbcCall simpleJdbcCall =
                new SimpleJdbcCall(jdbcTemplate)
                .withSchemaName("dbo")
                .withProcedureName("insert_has_class_type");

        Map<String, Object> inputParams = new HashMap<>();
        inputParams.put("class_id", classId);
        inputParams.put("class_type_id_list", createTVP(classTypeIds));

        simpleJdbcCall.execute(inputParams);
    }


    public void insertTime(Long classId, List<DateAndTimeDto> dateAndTimeDtoList)
            throws SQLServerException
    {
        SQLServerDataTable timeListDataTable = createTimeListDataTable(dateAndTimeDtoList);
        SimpleJdbcCall simpleJdbcCall =
                new SimpleJdbcCall(jdbcTemplate)
                .withSchemaName("dbo")
                .withProcedureName("insert_is_held_on");

        Map<String, Object> inParams = new HashMap<>();
        inParams.put("class_id", classId);
        inParams.put("time_list", timeListDataTable);

        simpleJdbcCall.execute(inParams);
    }


    private Map<String, Object> createTVP(List<Long> subjectIds)
    {
        Map<String, Object> tvp = new HashMap<>();
        tvp.put("subject_id", subjectIds);
        return tvp;
    }


    private Map<String, Object> createTVP(Long classId, List<Long> classTypeIds)
    {
        Map<String, Object> tvp = new HashMap<>();
        tvp.put("class_type_id", classTypeIds);
        return tvp;
    }


    private SQLServerDataTable createTimeListDataTable(List<DateAndTimeDto> dateAndTimeDtoList)
            throws SQLServerException
    {
        SQLServerDataTable table = new SQLServerDataTable();

        table.addColumnMetadata("week_id", java.sql.Types.BIGINT);
        table.addColumnMetadata("slot_id", java.sql.Types.BIGINT);

        for (DateAndTimeDto dateAndTimeDto : dateAndTimeDtoList)
            table.addRow(dateAndTimeDto.weeKId(), dateAndTimeDto.slotId());
        return table;
    }
}
