import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserHoverIcon from "../../assets/icons/Avatar-White.svg";
import UserIcon from "../../assets/icons/Avatar.svg";
import PenToolIcon from "../../assets/icons/Pen tool.svg";
import { logoutSuccess } from "../../redux/action";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(false);

  function handleLogout() {
    dispatch(logoutSuccess());
    navigate("/login");
  }
  return (
    <>
      <div className="container-header">
        <div className="left-header">
          <img src={PenToolIcon} alt="SystemIcon" />
          <h3>Hệ thống Gia sư Dạy kèm tại nhà</h3>
        </div>
        <div className="right-header">
          <h4 onClick={() => navigate("/class")}>Danh sách lớp học</h4>
          <img
            onClick={() => navigate("/information")}
            onMouseEnter={() => setUser(true)}
            onMouseLeave={() => setUser(false)}
            src={user ? UserHoverIcon : UserIcon}
            alt="UserIconZ"
          />
          <h4 onClick={handleLogout}>Đăng xuất</h4>
        </div>
      </div>
    </>
  );
}

export default Header;
