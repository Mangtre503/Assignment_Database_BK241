import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "../../assets/icons/AddIcon.svg";
import CalendarIcon from "../../assets/icons/CalendarIcon.svg";
import ChevronsDownIcon from "../../assets/icons/ChevronsDown.svg";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
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
      phoneNumber: "0912987654",
    },
    {
      requestId: "2",
      status: "Đã xử lý",
      studentName: "Nguyễn Hoàng Anh",
      subjects: ["Toán", "Tiếng Anh"],
      address: "215, đường Nguyễn Văn Trỗi, phường 11, quận Phú Nhuận, TP. Hồ Chí Minh",
      teachingMethod: "Trực tiếp",
      classLevel: 8,
      phoneNumber: "0937456789",
    },
    {
      requestId: "3",
      status: "Chưa xử lý",
      studentName: "Lê Khánh Linh",
      subjects: ["Tiếng Anh", "Ngữ văn", "KHTN"],
      address: "66, đường Cô Bắc, phường Cầu Ông Lãnh, quận 1, TP. Hồ Chí Minh",
      teachingMethod: "Trực tiếp",
      classLevel: 11,
      phoneNumber: "0987654321",
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
        <h1>Danh sách đơn yêu cầu tư vấn</h1>
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
          {listRequests.map((item) => (
            <RequestItem infoRequest={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ConsultationRequest;
