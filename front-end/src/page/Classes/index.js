import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "../../assets/icons/AddIcon.svg";
import CalendarIcon from "../../assets/icons/CalendarIcon.svg";
import ChevronsDownIcon from "../../assets/icons/ChevronsDown.svg";
import TrashIcon from "../../assets/icons/TrashIcon.svg";
import ClassItem from "../../component/ClassItem";
import "./Classes.css";

function Classes() {
  // Variable + Hook
  const listClass = Array(20).fill({
    classId: "1",
    startDate: "07/10/2022",
    status: "Đã giao",
    area: "quận Phú Nhuận",
    teachingStyle: "Trực tiếp",
    subject: ["Ngữ văn", "Toán", "KHXH"],
    grade: 4,
    phoneNumber: "0905123456",
  });
  const sortList = [
    "Khối lớp",
    "Kiểu dạy",
    "Khu vực",
    "Trạng thái",
    "Môn học",
    "Mã lớp học",
    "SĐT học viên",
  ];
  const [selectedDateFrom, setSelectedDateFrom] = useState();
  const [selectedDateTo, setSelectedDateTo] = useState();
  const navigate = useNavigate();

  // Function
  function handleFocus(e) {
    if (e.target.tagName !== "LABEL") {
      e.preventDefault();
      e.currentTarget.click();
    } else {
      const dateInput = document.getElementById(e.target.id + "-inp");
      console.log(dateInput);
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
        <h1>Danh sách lớp học</h1>
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
          <div className="option-btn">
            <img src={AddIcon} alt="AddIcon" />
            <img src={TrashIcon} alt="TrashIcon" />
          </div>
        </div>
        <div className="sort-list">
          {sortList.map((item) => {
            return (
              <>
                <div className="sort-item">
                  <h4>{item}</h4>
                  <img src={ChevronsDownIcon} alt="ChevronsDownIcon" />
                </div>
              </>
            );
          })}
        </div>
        <div className="container-card-list">
          {listClass.map((item) => (
            <ClassItem infoClass={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Classes;