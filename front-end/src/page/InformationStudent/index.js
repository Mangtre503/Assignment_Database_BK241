import React from "react";
import "./InformationStudent.css";

function InformationStudent() {
  // Thông tin học sinh
  const studentInfo = {
    name: "Trần Thanh",
    gender: "Nam",
    grade: "4",
    school: "Trường Tiểu học Quốc tế Á Châu",
    address: "190, đường Lê Thánh Tôn, phường Bến Thành, quận 1, TP. Hồ Chí Minh",
    phoneNumber: "0905 123 456",
    email: "thanhtran123@gmail.com",
    socialMedia: "https://facebook.com/thanhtran123",
    avatar: process.env.PUBLIC_URL + "/trend-avatar-1.jpg"  // Sử dụng đường dẫn từ thư mục public
  };

  return (
    <div className="container-student-info">
      {/* Main */}
      <main className="main-student-info">
        <div className="avatar-container">
          <img src={studentInfo.avatar} alt="Avatar" className="avatar-img" />
        </div>
        <table className="info-table">
          <tbody>
            <tr>
              <td>Họ và tên</td>
              <td>{studentInfo.name}</td>
            </tr>
            <tr>
              <td>Giới tính</td>
              <td>{studentInfo.gender}</td>
            </tr>
            <tr>
              <td>Khối lớp</td>
              <td>{studentInfo.grade}</td>
            </tr>
            <tr>
              <td>Trường</td>
              <td>{studentInfo.school}</td>
            </tr>
            <tr>
              <td>Địa chỉ</td>
              <td>{studentInfo.address}</td>
            </tr>
            <tr>
              <td>Số điện thoại</td>
              <td>{studentInfo.phoneNumber}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{studentInfo.email}</td>
            </tr>
            <tr>
              <td>Mạng xã hội</td>
              <td>
                <a
                  href={studentInfo.socialMedia}
                  target="_blank"
                  rel="noreferrer"
                >
                  {studentInfo.socialMedia}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default InformationStudent;
