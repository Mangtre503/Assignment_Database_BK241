import React from "react";
import "./InformationStudent.css";
import UserInfoIcon from "../../assets/icons/UserInfoIcon.svg";
import { Grid } from "@mui/material";

function InformationStudent() {
  const title = [
    "Họ và tên",
    "Giới tính",
    "Khối lớp",
    "Trường",
    "Địa chỉ",
    "Số điện thoại",
    "Email",
    "Mạng xã hội",
  ];
  const studentInfo = {
    name: "Trần Thanh",
    gender: "Nam",
    grade: "4",
    school: "Trường Tiểu học Quốc tế Á Châu",
    address:
      "190, đường Lê Thánh Tôn, phường Bến Thành, quận 1, TP. Hồ Chí Minh",
    phoneNumber: "0905123456",
    email: "thanhtran123@gmail.com",
    socialMedia: "https://facebook.com/thanhtran123",
  };

  return (
    <div className="container-information-account">
      <img src={UserInfoIcon} alt="UserInfoIcon" />
      <Grid
        className="container-grid"
        container
        sx={{ borderCollapse: "collapse", border: "1px solid #957DAD" }}
      >
        {Object.entries(studentInfo).map((item, index) => (
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
  );
}

export default InformationStudent;
