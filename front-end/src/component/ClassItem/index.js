import { useNavigate } from "react-router-dom";
import "./ClassItem.css";

function ClassItem(props){
    // const {idClass} = useParams("idClass");
  const { infoClass } = props;
  const navigate = useNavigate();
  return (
    <>
      <div className="container-card">
        <div className="title-card" onClick={() => navigate("/class/" + infoClass.classId)}>
          Mã lớp học: <h4>{infoClass.classId}</h4>
        </div>
        <h5>
          Ngày bắt đầu: <p>{infoClass.startDate}</p>
        </h5>
        <div className="content-card">
          <div className="left-content">
            <p>
              Trạng thái: <span className={"status " + (infoClass.status === "Đã giao"? "assigned" : "not-yet-assigned")}>{infoClass.status}</span>
            </p>
            <p>
              Kiểu dạy: <span>{infoClass.teachingStyle}</span>
            </p>
            <p>
              Khối lớp: <span>{infoClass.grade}</span>
            </p>
          </div>
          <div className="right-content">
            <p>
              Khu vực: <span>{infoClass.area}</span>
            </p>
            <p>
              Môn học:{" "}
              {Array.from(infoClass.subject).map((item, index) => (
                <span>
                  {index + 1 < Array.from(infoClass.subject).length
                    ? (item + ", ")
                    : item}
                </span>
              ))}
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