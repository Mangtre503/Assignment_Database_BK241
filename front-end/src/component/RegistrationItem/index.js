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
          Mã đơn đăng ký gia sư: <h4>{infoRegistration.id}</h4>
          <img onClick={() => navigate("/create-class/" + infoRegistration.id)} src={AddCircleIcon} alt="AddCircleIcon"/>
        </div>
        <div className="content-card">
          <div className="left-content">
            <p>
              Trạng thái:{" "}
              <span
                className={
                  "status drop " +
                  (infoRegistration.status === "da mo lop"
                    ? "open"
                    : infoRegistration.status === "da huy bo"
                    ? "cancel"
                    : infoRegistration.status === "chua xu ly"
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
                        infoRegistration.status === "da mo lop"
                          ? "#D291BC"
                          : infoRegistration.status === "da huy bo"
                          ? "#FFDFD3"
                          : infoRegistration.status === "dang xu ly"
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
                    value={"da mo lop"}
                    sx={{ background: "#E0BBE4 !important" }}
                  >
                    Đã mở lớp
                  </MenuItem>
                  <MenuItem
                    value={"da huy bo"}
                    sx={{ background: "#D291BC !important" }}
                  >
                    Đã hủy bỏ
                  </MenuItem>
                  <MenuItem
                    value={"dang xu ly"}
                    sx={{ background: "#FFDFD3 !important" }}
                  >
                    Đang xử lý
                  </MenuItem>
                  <MenuItem
                    value={"chua xu ly"}
                    sx={{ background: "#FEC8D8 !important" }}
                  >
                    Chưa xử lý
                  </MenuItem>
                </Select>
              </span>
            </p>
            <p onClick={() => navigate("/information-student/" + 1)} style={{cursor: "pointer"}}>
              Học viên: <span>{infoRegistration.nameStudent}</span>
            </p>
            <p>
              Khối lớp: <span>{infoRegistration.grade}</span>
            </p>
            <p>
              Địa chỉ: <span>{infoRegistration.address}</span>
            </p>
            <p>
              Kiểu dạy: <span>{infoRegistration.styleTeaching}</span>
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
              Gia sư: <span>{infoRegistration.nameTutor}</span>
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
              Yêu cầu: <span>{infoRegistration.requirement}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationItem;
