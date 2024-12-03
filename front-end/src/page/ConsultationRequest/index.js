import { useState } from "react";
import CalendarIcon from "../../assets/icons/CalendarIcon.svg";
import "./ConsultationRequest.css";

function ConsultationRequest() {
  const requests = [
    {
      id: 1,
      status: "Đã xử lý",
      student: "Trần Thanh",
      subjects: ["Ngữ Văn", "KHXH", "Toán"],
      address: "190, đường Lê Thánh Tôn, phường Bến Thành, quận 1, TP. Hồ Chí Minh",
      teachingStyle: "Trực tiếp",
      grade: 4,
      phone: "0905 123 456"
    },
    {
      id: 2,
      status: "Đã xử lý",
      student: "Nguyễn Hoàng Anh",
      subjects: ["Toán", "Toán", "KHTN"],
      address: "215, đường Nguyễn Văn Trỗi, phường 11, quận Phú Nhuận, TP. Hồ Chí Minh",
      teachingStyle: "Trực tiếp",
      grade: 8,
      phone: "0937 456 789"
    },
    // Additional request entries...
  ];

  const [selectedDateFrom, setSelectedDateFrom] = useState();
  const [selectedDateTo, setSelectedDateTo] = useState();

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
    <div className="container-requests">
      <h1>Danh sách đơn yêu cầu tư vấn</h1>
      <div className="container-filter-request">
        <div className="box-filter filter-from">
          <h3>Lọc từ ngày: </h3>
          <div className="box-inp">
            <label htmlFor="from-date" id="from-date" onClick={handleFocus}>
              <p>{selectedDateFrom || "nhập ngày bắt đầu..."}</p>
              <img src={CalendarIcon} alt="CalendarIcon" />
            </label>
            <input id="from-date-inp" onChange={handleChangeDate} type="date" />
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
      <div className="filter-options">
        <div className="filter-option">Khối lớp</div>
        <div className="filter-option">Kiểu dạy</div>
        <div className="filter-option">Trạng thái</div>
        <div className="filter-option">Môn học</div>
        <div className="filter-option">SDT học viên</div>
      </div>
      {requests.map((req) => (
        <div key={req.id} className="request-card">
          <h3>Mã đơn yêu cầu tư vấn: {req.id}</h3>
          <p><strong>Trạng thái:</strong> {req.status}</p>
          <p><strong>Học viên:</strong> {req.student}</p>
          <p><strong>Môn học:</strong> {req.subjects.join(", ")}</p>
          <p><strong>Địa chỉ:</strong> {req.address}</p>
          <p><strong>Kiểu dạy:</strong> {req.teachingStyle}</p>
          <p><strong>Khối lớp:</strong> {req.grade}</p>
          <p><strong>SDT:</strong> {req.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default ConsultationRequest;
