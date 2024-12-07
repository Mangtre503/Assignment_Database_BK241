import { useNavigate } from "react-router-dom";
import IconCancel from "../../assets/icons/Chevrons down cancel.svg";
import IconNotYetProcess from "../../assets/icons/Chevrons down notyetprocess.svg";
import IconOpen from "../../assets/icons/Chevrons down open.svg";
import IconProcess from "../../assets/icons/Chevrons down process.svg";
import "./RegistrationItem.css";

function RegistrationItem(props) {
  const { infoRegistration } = props;
  const navigate = useNavigate();
  return (
    <>
      <div className="container-card">
        <div
          className="title-card"
          onClick={() => navigate("/class/" + infoRegistration.taId)}
        >
          Mã đơn đăng ký gia sư: <h4>{infoRegistration.taId}</h4>
        </div>
        <div className="content-card">
          <div className="left-content">
            <p>
              Trạng thái:{" "}
              <span
                className={
                  "status " +
                  (infoRegistration.status === "Đã mở lớp"
                    ? "open"
                    : infoRegistration.status === "Đã hủy bỏ"
                    ? "cancel"
                    : infoRegistration.status === "Chưa xử lý"
                    ? "not-yet-process"
                    : "process")
                }
              >
                {infoRegistration.status}
                <img src={(infoRegistration.status === "Đã mở lớp"
                    ? IconOpen
                    : infoRegistration.status === "Đã hủy bỏ"
                    ? IconCancel
                    : infoRegistration.status === "Chưa xử lý"
                    ? IconNotYetProcess
                    : IconProcess)} alt="Icon"/>
              </span>
            </p>
            <p>
              Học viên: <span>{infoRegistration.studentName}</span>
            </p>
            <p>
              Khối lớp: <span>{infoRegistration.grade}</span>
            </p>
            <p>
              Địa chỉ: <span>{infoRegistration.address}</span>
            </p>
            <p>
              Kiểu dạy: <span>{infoRegistration.teachingStyle}</span>
            </p>
          </div>
          <div className="right-content">
            <p>
              Môn học:{" "}
              {Array.from(infoRegistration.subjects).map((item, index) => (
                <span>
                  {index + 1 < Array.from(infoRegistration.subjects).length
                    ? item + ", "
                    : item}
                </span>
              ))}
            </p>
            <p>
              Gia sư: <span>{infoRegistration.tutorName}</span>
            </p>
            <p>
              SĐT:{" "}
              <span>
                {String(infoRegistration.phoneNumber).substring(0, 4)}{" "}
                {String(infoRegistration.phoneNumber).substring(4, 7)}{" "}
                {String(infoRegistration.phoneNumber).substring(7, 10)}
              </span>
            </p>
            <p>
              Yêu cầu: <span>{infoRegistration.requirements}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationItem;
