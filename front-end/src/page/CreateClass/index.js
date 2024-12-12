import { Grid } from "@mui/material";
import { useState } from "react";
import "./CreateClass.css";
import { useParams } from "react-router-dom";

function CreateClass() {
  const { idTa } = useParams("idTa");

  const [formCreateClass, setFormCreateClass] = useState({
    status: "Đã giao",
    startDay: "09/05/2022",
    salary: "2000000",
    deposit: "200000",
    commission: "",
    styleTeaching: "Trực tiếp",
    student: "Nguyễn Phong",
    tutor: "Trần Khánh",
    subject: ["KH Xã Hội", "Toán"],
    grade: "10",
    session: "Thứ 6",
    timeTeaching: "07:00-09:00",
    address:
      "278, đường Phan Anh, phường Hiệp Tân, quận Tân Phú, TP. Hồ Chí Minh",
    requirement: "",
  });

  const listTitle = [
    {
      title1: "Trạng thái",
      title2: "Ngày bắt đầu",
      item1: formCreateClass.status,
      item2: formCreateClass.startDay,
    },
    {
      title1: "Mức lương",
      title2: "Tiền đặt cọc",
      item1: formCreateClass.salary,
      item2: formCreateClass.deposit,
    },
    {
      title1: "Tiền hoa hồng",
      title2: "Kiểu dạy",
      item1: formCreateClass.commission,
      item2: formCreateClass.styleTeaching,
    },
    {
      title1: "Học viên",
      title2: "Gia sư",
      item1: formCreateClass.student,
      item2: formCreateClass.tutor,
    },
    {
      title1: "Môn học",
      title2: "Khối lớp",
      item1: formCreateClass.subject,
      item2: formCreateClass.grade,
    },
    {
      title1: "Buổi dạy",
      title2: "Giờ dạy",
      item1: formCreateClass.session,
      item2: formCreateClass.timeTeaching,
    },
  ];

  const titleBottom = [
    {
        title: "Địa chỉ",
        item: formCreateClass.address,
    }, 
    {
        title: "Yêu cầu",
        item: formCreateClass.requirement,
    }];

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="container-create-class">
        <h1>Thêm lớp học</h1>
        <form onSubmit={handleSubmit}>
            {listTitle.map(item => 
          <Grid className="top-grid" container>
            <Grid item className="title-inp" xs={2.5}>
              {item.title1}:
            </Grid>
            <Grid item className="item-inp" xs={3.5}>
              <input className="status" defaultValue={item.item1}/>
            </Grid>
            <Grid item className="title-inp" xs={2.5}>
              {item.title2}:
            </Grid>
            <Grid item className="item-inp" xs={3.5}>
            <input className="status" defaultValue={item.item2}/>
            </Grid>
          </Grid>
          )}
          <div className="bottom-grid">
            {titleBottom.map(item => 
            <Grid container>
              <Grid item className="title-inp" xs={2.5}>
                {item.title}:
              </Grid>
              <Grid item className="item-inp" xs={9.5}>
              <input className="status" defaultValue={item.item}/>
              </Grid>
            </Grid>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateClass;
