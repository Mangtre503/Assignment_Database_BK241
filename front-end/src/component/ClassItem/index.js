import { useNavigate } from "react-router-dom";
import "./ClassItem.css";
import dayjs from "dayjs";

const formatDay = (str) => {
  return dayjs(str).format("DD/MM/YYYY");
}

function ClassItem(props){
  const { infoClass } = props;
  const navigate = useNavigate();
  return (
    <>
      <div className="container-card">
        <div className="title-card" onClick={() => navigate("/class/" + infoClass.classId)}>
          Mã lớp học: <h4>{infoClass.classId}</h4>
        </div>
        <h5>
          Ngày bắt đầu: <p>{formatDay(infoClass.dateStart)}</p>
        </h5>
        <div className="content-card">
          <div className="left-content">
            <p>
              Trạng thái: <span className={"status " + (infoClass.classStatus === "Da giao"? "assigned" : "not-yet-assigned")}>{infoClass.classStatus}</span>
            </p>
            <p>
              Kiểu dạy: <span>{infoClass.teachingStyle}</span>
            </p>
            <p>
              Khối lớp: <span>{infoClass.classTypeNames}</span>
            </p>
          </div>
          <div className="right-content">
            <p>
              Khu vực: <span>{infoClass.districtName}</span>
            </p>
            <p>
              Môn học:{" "}
                <span>
                  {infoClass.subjectNames}
                </span>
            </p>
            <p>
              SĐT:{" "}
              <span>
                {String(infoClass.phoneNumber).substring(0, 4)}{" "}
                {String(infoClass.phoneNumber).substring(4, 7)}{" "}
                {String(infoClass.phoneNumber).substring(7, 10)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClassItem;