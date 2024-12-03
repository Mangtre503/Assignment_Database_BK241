import { useNavigate } from "react-router-dom";
import "./ClassItem.css";

function ClassItem(props) {
  const { infoClass } = props;
  const navigate = useNavigate();
  return (
    <div className="container-card">
      <div className="title-card" onClick={() => navigate("/class/" + infoClass.classId)}>
        <h4>Mã đơn đăng ký gia sư: {infoClass.classId}</h4>
      </div>
      <div className="content-card">
        <div className="left-content">
          <p>Trạng thái: <span>{infoClass.status}</span></p>
          <p>Học viên: <span>{infoClass.studentName}</span></p>
          <p>Khối lớp: <span>{infoClass.grade}</span></p>
          <p>Địa chỉ: <span>{infoClass.address}</span></p>
          <p>Kiểu dạy: <span>{infoClass.teachingStyle}</span></p>
        </div>
        <div className="right-content">
          <p>Môn học: {infoClass.subject && infoClass.subject.map((item, index) => (
            <span key={index}>{index + 1 < infoClass.subject.length ? item + ", " : item}</span>
          ))}</p>
          <p>Gia sư: <span>{infoClass.tutorName}</span></p>
          <p>SĐT: <span>{String(infoClass.phoneNumber).substring(0, 4)} {String(infoClass.phoneNumber).substring(4, 7)} {String(infoClass.phoneNumber).substring(7, 10)}</span></p>
          <p>Yêu cầu: <span>{infoClass.requirements}</span></p>
        </div>
      </div>
    </div>
  );
}

export default ClassItem;
