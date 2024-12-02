import React from "react";
import { useParams } from "react-router-dom";
import "./InformationTutor.css";

function InformationTutor() {
  const { idTutor } = useParams();

  // Thông tin gia sư
  const tutorInfo = {
    name: "Nguyệt Việt Anh",
    gender: "Nam",
    birthDate: "29/07/1999",
    hometown: "Lâm Đồng",
    idCard: "079618930726",
    phoneNumber: "0981 234 567",
    email: "vietanh7777@gmail.com",
    socialMedia: "https://facebook.com/vietanh7777",
    address: "25, đường Lê Duẩn, phường Bến Nghé, quận 1, TP. Hồ Chí Minh",
    dateJoined: "02/04/2022",
    referralCode: "A3B2C1",
    numberOfReferrals: 1,
    referredByCode: "",
    biography: "Gia sư với 5 năm kinh nghiệm, giúp học sinh phát huy tối đa khả năng học tập và đạt kết quả xuất sắc."
  };

  return (
    <div className="container-tutor-info">
      {/* Main */}
      <main className="main-tutor-info">
        <div className="avatar-container">
          <img src={process.env.PUBLIC_URL + "/trend-avatar-1.jpg"} alt="Avatar" className="avatar-img" />
        </div>
        <table className="info-table">
          <tbody>
            <tr>
              <td>Họ và tên</td>
              <td>{tutorInfo.name}</td>
            </tr>
            <tr>
              <td>Giới tính</td>
              <td>{tutorInfo.gender}</td>
            </tr>
            <tr>
              <td>Ngày sinh</td>
              <td>{tutorInfo.birthDate}</td>
            </tr>
            <tr>
              <td>Quê quán</td>
              <td>{tutorInfo.hometown}</td>
            </tr>
            <tr>
              <td>CCCD/CMND</td>
              <td>{tutorInfo.idCard}</td>
            </tr>
            <tr>
              <td>Số điện thoại</td>
              <td>{tutorInfo.phoneNumber}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{tutorInfo.email}</td>
            </tr>
            <tr>
              <td>Mạng xã hội</td>
              <td>
                <a
                  href={tutorInfo.socialMedia}
                  target="_blank"
                  rel="noreferrer"
                >
                  {tutorInfo.socialMedia}
                </a>
              </td>
            </tr>
            <tr>
              <td>Địa chỉ</td>
              <td>{tutorInfo.address}</td>
            </tr>
            <tr>
              <td>Ngày tham gia</td>
              <td>{tutorInfo.dateJoined}</td>
            </tr>
            <tr>
              <td>Mã được giới thiệu</td>
              <td>{tutorInfo.referralCode}</td>
            </tr>
            <tr>
              <td>Số lần giới thiệu</td>
              <td>{tutorInfo.numberOfReferrals}</td>
            </tr>
            <tr>
              <td>Tiểu sử</td>
              <td>{tutorInfo.biography}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default InformationTutor;
