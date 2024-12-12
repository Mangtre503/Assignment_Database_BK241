package com.database241.onlinetutorfinding.repository;

import com.database241.onlinetutorfinding.request.ClassUpdateClassRequestDto;
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
public class ClassDao {
    private final JdbcTemplate jdbcTemplate;


    public void insertHasSubject(Long classId, List<Long> subjectIds) throws SQLServerException {
        SQLServerDataTable table = createSubjectIdTable(subjectIds);
        SimpleJdbcCall simpleJdbcCall =
                new SimpleJdbcCall(jdbcTemplate)
                        .withSchemaName("dbo")
                        .withProcedureName("insert_has_subject");

        Map<String, Object> inputParams = new HashMap<>();
        inputParams.put("class_id", classId);
        inputParams.put("subject_id_list", table);

        simpleJdbcCall.execute(inputParams);
    }


    public void insertHasClassType(Long classId, List<Long> classTypeIds) throws SQLServerException {
        SQLServerDataTable table = createClassTypeIdTable(classTypeIds);
        SimpleJdbcCall simpleJdbcCall =
                new SimpleJdbcCall(jdbcTemplate)
                        .withSchemaName("dbo")
                        .withProcedureName("insert_has_class_type");

        Map<String, Object> inputParams = new HashMap<>();
        inputParams.put("class_id", classId);
        inputParams.put("class_type_id_list", table);

        simpleJdbcCall.execute(inputParams);
    }


    public void insertTime(Long classId, List<DateAndTimeDto> dateAndTimeDtoList)
            throws SQLServerException {
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


    public int updateClass(ClassUpdateClassRequestDto classUpdateClassRequestDto)
            throws SQLServerException
    {
        String sql = "{CALL update_class(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)}";

        return jdbcTemplate.update
                (
                        sql,
                        classUpdateClassRequestDto.classId(),
                        classUpdateClassRequestDto.classDeposit(),
                        classUpdateClassRequestDto.classStatus(),
                        classUpdateClassRequestDto.commissionFee(),
                        classUpdateClassRequestDto.requirements(),
                        classUpdateClassRequestDto.dateStart(),
                        classUpdateClassRequestDto.salary(),
                        classUpdateClassRequestDto.addrId(),
                        classUpdateClassRequestDto.studentId(),
                        classUpdateClassRequestDto.tsId(),
                        classUpdateClassRequestDto.tutorId()
                );
    }


    public void deleteClass(Long classId) throws SQLServerException
    {
        SimpleJdbcCall simpleJdbcCall =
                new SimpleJdbcCall(jdbcTemplate)
                .withSchemaName("dbo")
                .withProcedureName("delete_class");

        Map<String, Object> inParams = new HashMap<>();
        inParams.put("class_id", classId);

        simpleJdbcCall.execute(inParams);
    }


    private SQLServerDataTable createSubjectIdTable(List<Long> subjectIds) throws SQLServerException
    {
        SQLServerDataTable table = new SQLServerDataTable();
        table.addColumnMetadata("subject_id", java.sql.Types.BIGINT);

        for (Long subjectId : subjectIds)
            table.addRow(subjectId);

        return table;
    }


    private SQLServerDataTable createClassTypeIdTable(List<Long> classTypeIds) throws SQLServerException {
        SQLServerDataTable table = new SQLServerDataTable();
        table.addColumnMetadata("class_type_id", java.sql.Types.BIGINT);

        for (Long classTypeId : classTypeIds)
            table.addRow(classTypeId);

        return table;
    }


    private SQLServerDataTable createTimeListDataTable(List<DateAndTimeDto> dateAndTimeDtoList)
            throws SQLServerException
    {
        SQLServerDataTable table = new SQLServerDataTable();

        table.addColumnMetadata("week_id", java.sql.Types.BIGINT);
        table.addColumnMetadata("slot_id", java.sql.Types.BIGINT);

        for (DateAndTimeDto dateAndTimeDto : dateAndTimeDtoList)
        {
            table.addRow(dateAndTimeDto.weekId(), dateAndTimeDto.slotId());
        }
        return table;
    }
}
