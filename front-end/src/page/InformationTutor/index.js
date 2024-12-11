import React from "react";
import { useParams } from "react-router-dom";
import "./InformationTutor.css";
import { Box, Grid, Rating } from "@mui/material";
import UserInfoIcon from "../../assets/icons/UserInfoIcon.svg";

function InformationTutor() {
  const { idTutor } = useParams();

  const title = [
    "Họ và tên",
    "Giới tính",
    "Ngày sinh",
    "Quê quán",
    "CCCD/ CMND",
    "Số điện thoại",
    "Email",
    "Mạng xã hội",
    "Địa chỉ",
    "Ngày tham gia",
    "Mã giới thiệu",
    "Số lần giới thiệu",
    "Mã được giới thiệu",
    "Tiểu sử",
  ];

  // Thông tin gia sư
  const tutorInfo = {
    name: "Nguyệt Việt Anh",
    gender: "Nam",
    birthDate: "29/07/1999",
    hometown: "Lâm Đồng",
    idCard: "079618930726",
    phoneNumber: "0981234567",
    email: "vietanh7777@gmail.com",
    socialMedia: "https://facebook.com/vietanh7777",
    address: "25, đường Lê Duẩn, phường Bến Nghé, quận 1, TP. Hồ Chí Minh",
    dateJoined: "02/04/2022",
    referralCode: "A3B2C1",
    numberOfReferrals: 1,
    referredByCode: "",
    biography:
      "Gia sư với 5 năm kinh nghiệm, giúp học sinh phát huy tối đa khả năng học tập và đạt kết quả xuất sắc.",
  };

  return (
    <div className="container-information-account">
      <div>
        
      <Box display="flex" alignItems="center">
      <Rating
        name="half-rating"
        value={2.4}
        precision={0.1} // Cho phép hiển thị nửa sao hoặc số lẻ
        readOnly
        sx={{color: '#D291BC'}}
        />
      </Box>
      <img src={UserInfoIcon} alt="UserInfoIcon" />
        </div>
      <Grid
        className="container-grid"
        container
        sx={{ borderCollapse: "collapse", border: "1px solid #957DAD" }}
      >
        {Object.entries(tutorInfo).map((item, index) => (
          <>
            <Grid
              item
              xs={
                title[index] === "Số lần giới thiệu" ||
                title[index] === "Mã được giới thiệu"
                  ? 2
                  : 3
              }
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
              xs={
                title[index] === "Mã giới thiệu" ||
                title[index] === "Mã được giới thiệu"
                  ? 2
                  : title[index] === "Số lần giới thiệu"
                  ? 1
                  : 9
              }
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

export default InformationTutor;
