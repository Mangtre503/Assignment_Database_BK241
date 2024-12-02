import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import EditIcon from "../../assets/icons/EditIcon.svg";
import "./ClassDetail.css";

function ClassDetail() {
  const { idClass } = useParams();
  const [data, setData] = useState({
    status: "Đã giao",
    startDate: "07/10/2022",
    salary: "2.000.000",
    deposit: "200.000",
    commission: "",
    form: "Trực tiếp",
    student: "Trần Thanh",
    tutor: "Nguyễn Việt Anh",
    subjects: "Ngữ Văn,Toán,KH-XH",
    grade: "4",
    day: "Thứ 4",
    time: "11:00 - 13:00",
    address: "215, đường Nguyễn Văn Trỗi, phường 11, quận Phú Nhuận, TP. Hồ Chí Minh",
    requirements: "",
    invoiceCode: "2 (Đã hoàn)",
    teachingApplicationCode: "",
  });

  const listTitleTop = [
    {
      title1: "Trạng thái",
      title2: "Ngày bắt đầu",
      data1: data.status,
      data2: data.startDate,
    },
    {
      title1: "Mức lương",
      title2: "Tiền đặt cọc",
      data1: data.salary,
      data2: data.deposit,
    },
    {
      title1: "Tiền hoa hồng",
      title2: "Hình thức",
      data1: data.commission,
      data2: data.form,
    },
    {
      title1: "Học viên",
      title2: "Gia sư",
      data1: data.student,
      data2: data.tutor,
    },
    {
      title1: "Môn học",
      title2: "Khối lớp",
      data1: data.subjects,
      data2: data.grade,
    },
    {
      title1: "Buổi dạy",
      title2: "Giờ dạy",
      data1: data.day,
      data2: data.time,
    },
  ];

  const listTitleBottom = ["Địa chỉ", "Yêu cầu", "Mã hóa đơn", "Mã đơn đăng ký dạy"];

  return (
    <div className="container-ta">
      <h1>
        Mã lớp học: <p>{idClass}</p>
      </h1>
      <img src={EditIcon} alt="EditIcon" />
      <div className="form-ta">
        {listTitleTop.map((item) => (
          <Grid container className="grid-container-top" key={item.title1}>
            <Grid item xs={6}>
              <Grid container className="grid-item-top top1">
                <Grid item className="title item" xs={6}>
                  {item.title1}
                </Grid>
                <Grid item xs={6} className="item">
                  {item.data1}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container className="grid-item-top">
                <Grid item className="title item" xs={6}>
                  {item.title2}
                </Grid>
                <Grid item xs={6} className="item">
                  {item.data2}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
        {listTitleBottom.map((item) => (
          <Grid container className="grid-container-top top1" key={item}>
            <Grid item xs={3} className="title item">
              {item}
            </Grid>
            <Grid item xs={9} className="item">
              {item === "Địa chỉ"
                ? data.address
                : item === "Yêu cầu"
                ? data.requirements
                : item === "Mã hóa đơn"
                ? data.invoiceCode
                : data.teachingApplicationCode}
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
}

export default ClassDetail;
