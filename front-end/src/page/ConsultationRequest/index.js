import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "../../assets/icons/AddIcon.svg";
import CalendarIcon from "../../assets/icons/CalendarIcon.svg";
import ChevronsDownIcon from "../../assets/icons/ChevronsDown.svg";
import TrashIcon from "../../assets/icons/TrashIcon.svg";
import RequestItem from "../../component/RequestItem";
import "./ConsultationRequest.css";

function ConsultationRequest() {
  // Variable + Hook
  const listRequests = [
    {
      requestId: "1",
      status: "Đã xử lý",
      studentName: "Trần Thanh",
      subjects: ["Ngữ văn", "KHXH", "Toán"],
      address: "190, đường Lê Thánh Tôn, phường Bến Thành, quận 1, TP. Hồ Chí Minh",
      teachingMethod: "Trực tiếp",
      classLevel: 4,
      phoneNumber: "0912 987 654",
    },
    {
      requestId: "2",
      status: "Đã xử lý",
      studentName: "Nguyễn Hoàng Anh",
      subjects: ["Toán", "Tiếng Anh"],
      address: "215, đường Nguyễn Văn Trỗi, phường 11, quận Phú Nhuận, TP. Hồ Chí Minh",
      teachingMethod: "Trực tiếp",
      classLevel: 8,
      phoneNumber: "0937 456 789",
    },
    {
      requestId: "3",
      status: "Đã xử lý",
      studentName: "Lê Khánh Linh",
      subjects: ["Tiếng Anh", "Ngữ văn", "KHTN"],
      address: "66, đường Cô Bắc, phường Cầu Ông Lãnh, quận 1, TP. Hồ Chí Minh",
      teachingMethod: "Trực tiếp",
      classLevel: 11,
      phoneNumber: "0987 654 321",
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
      <div className="container-requests">
        <h1>Danh sách yêu cầu tư vấn</h1>
        <div className="container-filter-request">
          <div className="box-filter filter-from">
            <h3>Lọc từ ngày:</h3>
            <div className="box-inp">
              <label htmlFor="from-date" id="from-date" onClick={handleFocus}>
                <p>{selectedDateFrom || "Nhập ngày bắt đầu..."}</p>
                <img src={CalendarIcon} alt="CalendarIcon" />
              </label>
              <input
                id="from-date-inp"
                onChange={handleChangeDate}
                type="date"
              />
            </div>
          </div>
          <h3>đến ngày:</h3>
          <div className="filter-to box-filter">
            <div className="box-inp">
              <label htmlFor="to-date" id="to-date" onClick={handleFocus}>
                <p>{selectedDateTo || "Nhập ngày kết thúc..."}</p>
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
          {sortList.map((item) => (
            <div className="sort-item" key={item}>
              <h4>{item}</h4>
              <img src={ChevronsDownIcon} alt="ChevronsDownIcon" />
            </div>
          ))}
        </div>
        <div className="container-card-list">
          {listRequests.map((item) => (
            <RequestItem key={item.requestId} infoRequest={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ConsultationRequest;
