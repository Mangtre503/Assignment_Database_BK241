import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "../../assets/icons/AddIcon.svg";
import CalendarIcon from "../../assets/icons/CalendarIcon.svg";
import ChevronsDownIcon from "../../assets/icons/ChevronsDown.svg";
import TrashIcon from "../../assets/icons/TrashIcon.svg";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import RegistrationItem from "../../component/RegistrationItem";
import "./TutorRegistration.css";

function TutorRegistration() {
  // Variable + Hook
  const listRegistration = [
    {
      taId: "1",
      studentName: "Trần Thanh",
      subjects: ["Ngữ văn", "KHXH", "Toán"],
      grade: 4,
      address: "190, đường Lê Thánh Tôn, phường Bến Thành, quận 1, TP. Hồ Chí Minh",
      teachingStyle: "Trực tiếp",
      tutorName: "Nguyễn Việt Anh",
      phoneNumber: "0912 987 654",
      status: "Đã mở lớp",
      requirements: "Tốt nghiệp đại học chuyên ngành liên quan.",
    },
    {
      taId: "2",
      studentName: "Nguyễn Hoàng Anh",
      subjects: ["Toán", "Tiếng Anh"],
      grade: 8,
      address: "215, đường Nguyễn Văn Trỗi, phường 11, quận Phú Nhuận, TP. Hồ Chí Minh",
      teachingStyle: "Trực tiếp",
      tutorName: "Phạm Linh Nguyên",
      phoneNumber: "0937 456 789",
      status: "Đã hủy bỏ",
      requirements: "Ít nhất 1-2 năm kinh nghiệm dạy kèm hoặc giảng dạy.",
    },
    {
      taId: "3",
      studentName: "Lê Khánh Linh",
      subjects: ["Tiếng Anh", "Ngữ văn", "KHTN"],
      grade: 11,
      address: "66, đường Cô Bắc, phường Cầu Ông Lãnh, quận 1, TP. Hồ Chí Minh",
      teachingStyle: "Trực tiếp",
      tutorName: "Nguyễn Duy",
      phoneNumber: "0987 654 321",
      status: "Đang xử lý",
      requirements: "Lịch trình linh hoạt, có thể làm việc vào cuối tuần hoặc buổi tối.",
    },
    {
      taId: "4",
      studentName: "Đặng Bảo Trâm",
      subjects: ["KHXH", "Toán", "Ngữ văn"],
      grade: 2,
      address: "8, đường Hòa Bình, phường Hiệp Tân, quận Tân Phú, TP. Hồ Chí Minh",
      teachingStyle: "Trực tiếp",
      tutorName: "Trần Tuấn Anh",
      phoneNumber: "0923 123 789",
      status: "Chưa xử lý",
      requirements: "Thành thạo các công cụ và nền tảng dạy học trực tuyến.",
    },
  ];

  const sortList = [
    "Khối lớp",
    "Kiểu dạy",
    "Trạng thái",
    "Môn học",
    "SĐT học viên",
  ];

  const [selectedDateFrom, setSelectedDateFrom] = useState();
  const [selectedDateTo, setSelectedDateTo] = useState();
  const navigate = useNavigate();

  function handleFocus(e) {
    if (e.target.tagName !== "LABEL") {
      e.preventDefault();
      e.currentTarget.click();
    } else {
      const dateInput = document.getElementById(e.target.id + "-inp");
      dateInput.showPicker();
    }
  }

  function handleChangeDate(e) {
    if (e.target.id === "from-date-inp") {
      setSelectedDateFrom(e.target.value);
    } else {
      setSelectedDateTo(e.target.value);
    }
  }

  return (
    <>
      <div className="container-classes">
        <h1>Danh sách đơn đăng ký gia sư</h1>
        <div className="container-filter-class">
          <div className="box-filter filter-from">
            <h3>Lọc từ ngày: </h3>
            <div className="box-inp">
              <label htmlFor="from-date" id="from-date" onClick={handleFocus}>
                <p>{selectedDateFrom || "nhập ngày bắt đầu..."}</p>
                <img src={CalendarIcon} alt="CalendarIcon" />
              </label>
              <input
                id="from-date-inp"
                onChange={handleChangeDate}
                type="date"
              />
            </div>
          </div>
          <h3>đến ngày: </h3>
          <div className="filter-to box-filter">
            <div className="box-inp">
              <label htmlFor="to-date" id="to-date" onClick={handleFocus}>
                <p>{selectedDateTo || "nhập ngày kết thúc..."}</p>
                <img src={CalendarIcon} alt="CalendarIcon" />
              </label>
              <input id="to-date-inp" onChange={handleChangeDate} type="date" />
            </div>
          </div>
        </div>
        <div className="sort-list">
        {sortList.map((item, index) => {
            return (
              <>
                <div className="sort-item">
                <h4>{item}</h4>
              {index === sortList.length - 1? 
                <img src={SearchIcon} alt="SearchIcon" /> : <img src={ChevronsDownIcon} alt="ChevronsDownIcon" />
              }
              </div>
              </>
            );
          })}
        </div>
        <div className="container-card-list">
          {listRegistration.map((item) => (
            <RegistrationItem infoRegistration={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TutorRegistration;
