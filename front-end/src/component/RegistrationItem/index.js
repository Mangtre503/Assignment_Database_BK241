import { useNavigate } from "react-router-dom";
import "./RegistrationItem.css";

function RegistrationItem(props) {
  const { infoRegistration } = props;
  const navigate = useNavigate();
  return (
    <div className="container-card">
      <div className="title-card">
        <h4>Mã đơn đăng ký gia sư: {infoRegistration.classId}</h4>
      </div>
      <div className="content-card">
        <div className="left-content">
          <p>Trạng thái: <span>{infoRegistration.status}</span></p>
          <p>Học viên: <span>{infoRegistration.studentName}</span></p>
          <p>Khối lớp: <span>{infoRegistration.grade}</span></p>
          <p>Địa chỉ: <span>{infoRegistration.address}</span></p>
          <p>Kiểu dạy: <span>{infoRegistration.teachingStyle}</span></p>
        </div>
        <div className="right-content">
          <p>Môn học: {infoRegistration.subject && infoRegistration.subject.map((item, index) => (
            <span key={index}>{index + 1 < infoRegistration.subject.length ? item + ", " : item}</span>
          ))}</p>
          <p>Gia sư: <span>{infoRegistration.tutorName}</span></p>
          <p>SĐT: <span>{String(infoRegistration.phoneNumber).substring(0, 4)} {String(infoRegistration.phoneNumber).substring(4, 7)} {String(infoRegistration.phoneNumber).substring(7, 10)}</span></p>
          <p>Yêu cầu: <span>{infoRegistration.requirements}</span></p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationItem;
