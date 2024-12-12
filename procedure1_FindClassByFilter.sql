CREATE OR ALTER PROCEDURE FindClassByFilter
	@class_type_name VARCHAR(255) = NULL,
	@ts_name VARCHAR(255) = NULL,
	@name VARCHAR(255) = NULL,
	@class_status VARCHAR(255) = NULL,
	@subject_name VARCHAR(255) = NULL,
	@phone_number VARCHAR(255) = NULL,
	@date_start_from DATETIME2(7) = NULL, -- Ngay bat dau tim kiem.
	@date_start_to DATETIME2(7) = NULL, -- Ngay ket thuc tim kiem.
	-- Sap xep tang/ giam dan ('ASC' hoac 'DESC') theo ma lop hoc.
	@sort_order NVARCHAR(4) = 'ASC'
AS
BEGIN
	-- 1. Truy van kiem tra su ton tai cua du lieu.
	IF NOT EXISTS (
		SELECT 1
		FROM 
			-- Bang @class.
			class c 

			-- "Khu vuc": Bang @address va Bang @district_city.
			INNER JOIN
				address a ON c.addr_id = a.addr_id
			INNER JOIN
				district_city d ON a.dist_city_id = d.dist_city_id

			-- "Kieu day": Bang @teaching_style.
			INNER JOIN
				teaching_style ts ON c.ts_id = ts.ts_id

			-- "Mon hoc": Bang @has_subject va Bang @subject.
			INNER JOIN
				has_subject hs ON c.class_id = hs.class_id
			INNER JOIN
				subject s ON hs.subject_id = s.subject_id

			-- "Khoi lop": Bang @has_class_type va Bang @class_type.
			INNER JOIN
				has_class_type hct ON c.class_id= hct.class_id
			INNER JOIN
				class_type ct ON hct.class_type_id = ct.class_type_id

			-- "SDT (Hoc vien)": Bang @student va Bang @user.
			INNER JOIN 
				student st ON c.student_id = st.student_id
			INNER JOIN
				[user] u ON st.student_id = u.user_id

		WHERE
			-- Loc "Khoi lop" theo class_type_name tu Bang @class_type.
			(@class_type_name IS NULL OR ct.class_type_name = @class_type_name) AND 
			-- Loc "Kieu day" theo ts_name tu Bang @teaching_style.
			(@ts_name IS NULL OR ts.ts_name = @ts_name) AND 
			-- Loc "Khu vuc" theo name tu Bang @distric_city.
			(@name IS NULL OR d.name = @name) AND 
			-- Loc "Trang thai" theo class_status tu Bang @class.
			(@class_status IS NULL OR c.class_status = @class_status) AND 
			-- Loc "Mon hoc" theo subject_name tu Bang @subject.
			(@subject_name IS NULL OR s.subject_name = @subject_name) AND 
			-- Tim "SDT (Hoc vien)" theo phone_number tu Bang @user.
			(@phone_number IS NULL OR u.phone_number = @phone_number) AND 
			-- Loc "Ngay bat dau" trong mot khoang thoi gian theo date_start tu Bang @class.
			(@date_start_from IS NULL OR c.date_start >= @date_start_from) AND
			(@date_start_to	IS NULL OR c.date_start <= @date_start_to)
	)
	BEGIN
		-- Thong bao loi neu khong tim thay du lieu phu hop.
		RAISERROR('Khong tim thay du lieu phu hop yeu cau.', 16, 1);
		RETURN;
	END;

	-- 2. Truy van thong tin khi du lieu ton tai.
	DECLARE @sql_query NVARCHAR(MAX);
	SET @sql_query = N'
	SELECT
		-- Tu Bang @class: ma lop hoc, ngay bat dau, trang thai.
		c.class_id,
		c.date_start,
		c.class_status,
		d.name, -- Ten QUAN/ THANH PHO tu Bang @district_city.
		ts.ts_name, -- Ten KIEU DAY tu Bang @teaching_style.
		s.subject_name, -- Ten MON HOC tu Bang @subject.
		ct.class_type_name, -- Ten KHOI LOP tu Bang @class_type.
		u.phone_number -- SDT (Hoc vien) tu Bang @user.
	FROM 
		-- Bang @class.
		class c

		-- "Khu vuc": Bang @address va Bang @district_city.
		INNER JOIN
			address a ON c.addr_id = a.addr_id
		INNER JOIN
			district_city d ON a.dist_city_id = d.dist_city_id

		-- "Kieu day": Bang @teaching_style.
		INNER JOIN
			teaching_style ts ON c.ts_id = ts.ts_id

		-- "Mon hoc": Bang @has_subject va Bang @subject.
		INNER JOIN
			has_subject hs ON c.class_id = hs.class_id
		INNER JOIN
			subject s ON hs.subject_id = s.subject_id

		-- "Khoi lop": Bang @has_class_type va Bang @class_type.
		INNER JOIN
			has_class_type hct ON c.class_id= hct.class_id
		INNER JOIN
			class_type ct ON hct.class_type_id = ct.class_type_id

		-- "SDT (Hoc vien)": Bang @student va Bang @user.
		INNER JOIN 
			student st ON c.student_id = st.student_id
		INNER JOIN
			[user] u ON st.student_id = u.user_id

	WHERE
		-- Loc "Khoi lop" theo class_type_name tu Bang @class_type.
		(@class_type_name IS NULL OR ct.class_type_name = @class_type_name) AND 
		-- Loc "Kieu day" theo ts_name tu Bang @teaching_style.
		(@ts_name IS NULL OR ts.ts_name = @ts_name) AND 
		-- Loc "Khu vuc" theo name tu Bang @distric_city.
		(@name IS NULL OR d.name = @name) AND 
		-- Loc "Trang thai" theo class_status tu Bang @class.
		(@class_status IS NULL OR c.class_status = @class_status) AND 
		-- Loc "Mon hoc" theo subject_name tu Bang @subject.
		(@subject_name IS NULL OR s.subject_name = @subject_name) AND 
		-- Tim "SDT (Hoc vien)" theo phone_number tu Bang @user.
		(@phone_number IS NULL OR u.phone_number = @phone_number) AND 
		-- Loc "Ngay bat dau" trong mot khoang thoi gian theo date_start tu Bang @class.
		(@date_start_from IS NULL OR c.date_start >= @date_start_from) AND
		(@date_start_to	IS NULL OR c.date_start <= @date_start_to)
	
	ORDER BY
		-- Sap xep thu tu tang/ giam dan (ASC/ DESC) theo ma lop hoc.
		c.class_id ' + @sort_order + ';';
		
	-- Thuc thi truy van
	EXEC sp_executesql @sql_query,
		N'@class_type_name VARCHAR(255), @ts_name VARCHAR(255), @name VARCHAR(255), @class_status VARCHAR(255), @subject_name VARCHAR(255), @phone_number VARCHAR(255), @date_start_from DATETIME2(7), @date_start_to DATETIME2(7)', 
		@class_type_name, @ts_name, @name, @class_status, @subject_name, @phone_number, @date_start_from, @date_start_to;
END;