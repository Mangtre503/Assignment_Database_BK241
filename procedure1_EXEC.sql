-- exec1. Loc nhung lop hoc theo "Khoi lop: Lop 4".
EXEC FindClassByFilter
    @class_type_name = 'Lop 4';

-- exec2. Loc nhung lop hoc theo "Khu vuc: Quan Phu Nhuan".
EXEC FindClassByFilter
    @name = 'Tp. Thu Duc';
	
-- exec3. Loc nhung lop hoc theo "Kieu day: Truc tiep".
EXEC FindClassByFilter
    @ts_name = 'Truc tuyen';

-- exec4. Loc nhung lop hoc theo "Trang thai: Da giao".
EXEC FindClassByFilter
    @class_status = 'Chua giao';

-- exec5. Loc nhung lop hoc theo "Mon hoc: Tin hoc".
EXEC FindClassByFilter
    @subject_name = 'Tin hoc';

-- exec6. Sap xep lop hoc theo thu tu giam dan.
EXEC FindClassByFilter
    @sort_order = 'DESC';
	
-- exec7. Loc nhung lop hoc theo "SDT: 0905 123 456".
EXEC FindClassByFilter
    @phone_number = '0905123457';

-- exec8. Loc nhung lop hoc trong khoang thoi gian tu ngay "07-10-2022" den "07-10-2023".
EXEC FindClassByFilter
    @date_start_from = '2022-10-07',
    @date_start_to = '2023-10-07';

-- exec9. Loc nhung lop hoc co "Kieu day: Truc tiep" voi "Trang thai: Da giao" va co "Mon hoc: KHTN".
EXEC FindClassByFilter
    @ts_name = 'Truc tiep', 
    @class_status = 'Da giao',
    @subject_name = 'KHTN';

-- exec10. Loc nhung lop hoc theo "Khoi lop: Lop 1", "Kieu day: Truc tuyen", "Trang thai: Chua giao" va "Mon hoc: Tieng Anh".
EXEC FindClassByFilter
    @class_type_name = 'Lop 1',
    @ts_name = 'Truc tuyen', 
    @class_status = 'Chua giao',
    @subject_name = 'Tieng Anh';

-- exec11. Loc nhung lop hoc co cac gia tri sau: "Khoi lop: Lop 4", "Kieu day: Truc tiep", "Khu vuc: Quan Phu Nhuan", "Trang thai: Da giao", "Mon hoc: Toan", "SDT: 0905 123 456", trong khoang thoi gian tu ngay "2022-01-01" den "2024-01-01" va sap xep theo ma lop giam dan.
EXEC FindClassByFilter
    @class_type_name = 'Lop 4', 
    @ts_name = 'Truc tiep', 
    @name = 'Quan Phu Nhuan',
    @class_status = 'Da giao',
    @subject_name = 'Toan',
    @phone_number = '0905123457', 
    @date_start_from = '2022-01-01',
    @date_start_to = '2024-01-01',
    @sort_order = 'DESC';