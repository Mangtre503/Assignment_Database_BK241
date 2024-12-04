import React from "react";
import "./RequestItem.css";

function RequestItem({ infoRequest }) {
  return (
    <div className="container-card">
      <div className="title-card">Mã yêu cầu: {infoRequest.requestId}</div>
      <div className="content-card">
        <div className="left-content">
          <p>Trạng thái: {infoRequest.status}</p>
          <p>Học viên: {infoRequest.studentName}</p>
          <p>Môn học: {infoRequest.subjects.join(", ")}</p>
          <p>Địa chỉ: {infoRequest.address}</p>
        </div>
        <div className="right-content">
          <p>Kiểu dạy: {infoRequest.teachingMethod}</p>
          <p>Khối lớp: {infoRequest.classLevel}</p>
          <p>SĐT: {infoRequest.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
}

export default RequestItem;
