import React from "react";
import "./InformationAccount.css";
import UserInfoIcon from "../../assets/icons/UserInfoIcon.svg";
import Grid from "@mui/material/Grid";

function InformationAccount() {
  // Thông tin người dùng
  const title = [
    "Họ và tên",
    "Giới tính",
    "Ngày sinh",
    "Quê quán",
    "CCCD/ CMND",
    "Số điện thoại",
    "Email",
    "Mạng xã hội",
  ];
  const userInfo = {
    name: "Vũ Quỳnh Anh",
    gender: "Nữ",
    birthDate: "20/05/1988",
    hometown: "TP. Hồ Chí Minh",
    idCard: "079221762419",
    phoneNumber: "0978234567",
    email: "quynhanh9876@gmail.com",
    socialMedia: "https://facebook.com/quynhanh9876",
    // avatar: process.env.PUBLIC_URL + "/trend-avatar-1.jpg"
  };

  return (
    <>
      <div className="container-information-account">
        <img src={UserInfoIcon} alt="UserInfoIcon" />
        <Grid
          className="container-grid"
          container
          sx={{ borderCollapse: "collapse", border: "1px solid #957DAD" }}
        >
          {Object.entries(userInfo).map((item, index) => (
            <>
              <Grid
                item
                xs={3}
                className="item title"
                sx={{
                  border: "1px solid #957DAD",
                  backgroundColor: "#FEC8D8",
                  color: "#957DAD",
                }}
              >
                {title[index]}
              </Grid>
              <Grid
                item
                xs={9}
                className="item"
                sx={{ border: "1px solid #957DAD" }}
              >
                {title[index] === "Mạng xã hội" ? (
                  <a style={{ color: "#000" }} href={item[1]}>
                    {item[1]}
                  </a>
                ) : title[index] === "Số điện thoại" ? (
                  String(item[1]).substring(0, 4) +
                  " " +
                  String(item[1]).substring(4, 7) +
                  " " +
                  String(item[1]).substring(7, 10)
                ) : (
                  item[1]
                )}
              </Grid>
            </>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default InformationAccount;
