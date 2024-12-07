import React from "react";
import "./RequestItem.css";
import { useNavigate } from "react-router-dom";

function RequestItem({ infoRequest }) {

  const navigate = useNavigate();

  return (
    <div className="container-card">
    <div className="title-card" onClick={() => navigate("/class/" + infoRequest.requestId)}>
      Mã yêu cầu: <h4>{infoRequest.requestId}</h4>
    </div>
    <div className="content-card">
      <div className="left-content">
        <p>
          Trạng thái: <span className={"status " + (infoRequest.status === "Đã xử lý"? "processed" : "not-yet-processed")}>{infoRequest.status}</span>
        </p>
        <p>
          Học viên: <span>{infoRequest.studentName}</span>
        </p>
        <p>
          Môn học: <span>{infoRequest.subjects.join(", ")}</span>
        </p>
        <p>
          Địa chỉ: <span>{infoRequest.address}</span>
        </p>
      </div>
      <div className="right-content">
        <p>
          Kiểu dạy: <span>{infoRequest.teachingMethod}</span>
        </p>
        <p>
          Khối lớp: <span>{infoRequest.classLevel}</span>
        </p>
        <p>
          SĐT:{" "}
          <span>
            {String(infoRequest.phoneNumber).substring(0, 4)}{" "}
            {String(infoRequest.phoneNumber).substring(4, 7)}{" "}
            {String(infoRequest.phoneNumber).substring(7, 10)}
          </span>
        </p>
      </div>
    </div>
  </div>
  );
}

export default RequestItem;
