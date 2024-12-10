import MenuItem from "@mui/material/MenuItem";
import AddCircleIcon from "../../assets/icons/add_circle.svg";
import Select from "@mui/material/Select";
import { FiChevronsDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./RegistrationItem.css";

function RegistrationItem(props) {
  const { infoRegistration } = props;
  const navigate = useNavigate();
  return (
    <>
      <div className="container-card">
        <div
          className="title-card"
          style={{cursor: "default"}}
        >
          Mã đơn đăng ký gia sư: <h4>{infoRegistration.taId}</h4>
          <img onClick={() => navigate("/create-class/" + infoRegistration.taId)} src={AddCircleIcon} alt="AddCircleIcon"/>
        </div>
        <div className="content-card">
          <div className="left-content">
            <p>
              Trạng thái:{" "}
              <span
                className={
                  "status drop " +
                  (infoRegistration.status === "Đã mở lớp"
                    ? "open"
                    : infoRegistration.status === "Đã hủy bỏ"
                    ? "cancel"
                    : infoRegistration.status === "Chưa xử lý"
                    ? "not-yet-process"
                    : "process")
                }
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={infoRegistration.status}
                  // onChange={handleChange}
                  sx={{
                    "& .MuiSelect-icon": {
                      color:
                        infoRegistration.status === "Đã mở lớp"
                          ? "#D291BC"
                          : infoRegistration.status === "Đã hủy bỏ"
                          ? "#FFDFD3"
                          : infoRegistration.status === "Đang xử lý"
                          ? "#D291BC"
                          : "#D291BC", // Màu mặc định
                      fontSize: 24,
                      marginRight: "10px",
                    },
                    fontFamily: 'Itim',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal',
                  }}
                  IconComponent={FiChevronsDown}
                >
                  <MenuItem
                    value={"Đã mở lớp"}
                    sx={{ background: "#E0BBE4 !important" }}
                  >
                    Đã mở lớp
                  </MenuItem>
                  <MenuItem
                    value={"Đã hủy bỏ"}
                    sx={{ background: "#D291BC !important" }}
                  >
                    Đã hủy bỏ
                  </MenuItem>
                  <MenuItem
                    value={"Đang xử lý"}
                    sx={{ background: "#FFDFD3 !important" }}
                  >
                    Đang xử lý
                  </MenuItem>
                  <MenuItem
                    value={"Chưa xử lý"}
                    sx={{ background: "#FEC8D8 !important" }}
                  >
                    Chưa xử lý
                  </MenuItem>
                </Select>
              </span>
            </p>
            <p onClick={() => navigate("/information-student/" + 1)} style={{cursor: "pointer"}}>
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
            <p onClick={() => navigate("/information-tutor/" + 1)} style={{cursor: "pointer"}}>
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
