import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PenToolPink from "../../assets/icons/Pen tool-Pink.svg";
import { loginSuccess } from "../../redux/action";
import { useState } from "react";
import api from "../../api";
import "./Login.css";

function Login() {

  // --------------------Hook-------------------
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formLogin, setFormLogin] = useState({
    phoneNumber: "",
    password: "",
  });

  // ------------------Function------------------
  function handleSubmit() {
    try{
        // const response = api.post("", formLogin);
        // dispatch(loginSuccess(response.data));
        navigate("/information");
    }catch(e){
        console.error(e);
    }
  }

  function handleChange(e){
    const { name, value } = e.target;
    setFormLogin((prev) => ({
        ...prev,
        [name]: value,  
    }))
  }

  return (
    <>
      <div className="container-login">
        <h1>
          <img src={PenToolPink} alt="PenToolPink" />
          Hệ thống Gia sư Dạy kèm tại nhà
        </h1>
        <form onSubmit={handleSubmit} className="login-form">
          <h2>ĐĂNG NHẬP TÀI KHOẢN</h2>
          <div className="box-input">
            <label htmlFor="phoneNumber">Tên đăng nhập: </label>
            <input
              id="phoneNumber"
              placeholder="Nhập username hoặc số điện thoại..."
              name="phoneNumber"
              onChange={handleChange}
            />
          </div>
          <div className="box-input">
            <label htmlFor="password">Mật khẩu: </label>
            <input
              id="password"
              placeholder="Nhập mật khẩu..."
              name="password"
              onChange={handleChange}
            />
          </div>
          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    </>
  );
}

export default Login;
