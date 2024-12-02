import React from "react";
import "./InformationAccount.css";

function InformationAccount() {
    // Thông tin người dùng
    const userInfo = {
      name: "Vũ Quỳnh Anh",
      gender: "Nữ",
      birthDate: "20/05/1988",
      hometown: "TP. Hồ Chí Minh",
      idCard: "079221762419",
      phoneNumber: "0978 234 567",
      email: "quynhanh9876@gmail.com",
      socialMedia: "https://facebook.com/quynhanh9876",
      avatar: process.env.PUBLIC_URL + "/trend-avatar-1.jpg"
    };
  
    return (
      <div className="container-account-info">
        <main className="main-account-info">
        <div className="avatar-container"> 
            <img src={userInfo.avatar} alt="Avatar" className="avatar-img" /> 
        </div>
          <table className="info-table">
            <tbody>
              <tr>
                <td>Họ và tên</td>
                <td>{userInfo.name}</td>
              </tr>
              <tr>
                <td>Giới tính</td>
                <td>{userInfo.gender}</td>
              </tr>
              <tr>
                <td>Ngày sinh</td>
                <td>{userInfo.birthDate}</td>
              </tr>
              <tr>
                <td>Quê quán</td>
                <td>{userInfo.hometown}</td>
              </tr>
              <tr>
                <td>CCCD/CMND</td>
                <td>{userInfo.idCard}</td>
              </tr>
              <tr>
                <td>Số điện thoại</td>
                <td>{userInfo.phoneNumber}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{userInfo.email}</td>
              </tr>
              <tr>
                <td>Mạng xã hội</td>
                <td>
                  <a
                    href={userInfo.socialMedia}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {userInfo.socialMedia}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    );
  }
  
  export default InformationAccount;
  