import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useParams } from "react-router-dom";
import EditIcon from "../../assets/icons/EditIcon.svg";
import "./TeachingApplication.css";

function TeachingApplication(){
    const { idTa } = useParams("idTa");
    const [data, setData] = useState({
        status: 'Chấp nhận',
        dateCreate: '15/06/2022',
        classId: '3',
        tutor: 'Trần Khánh',
        type: 'Đóng tiền cọc',
        deposit: '200.000',
        voucherId: '3',
        admin: 'Trần Kim Ngân',
    });
    const listTitleTop = [
        {
            title1: "Trạng thái",
            title2: "Ngày tạo",
            data1: data.status,
            data2: data.dateCreate,
        },
        {
            title1: "Mã lớp học",
            title2: "Gia sư",
            data1: data.classId,
            data2: data.tutor,
        },
        {
            title1: "Trạng thái",
            title2: "Loại hóa đơn",
            data1: data.status,
            data2: data.type,
        },
        {
            title1: "Tiền đặt cọc",
            title2: "Mã voucher",
            data1: data.deposit,
            data2: data.voucherId,
        }
    ];
    const listTitleBottom = ["Admin", "Ảnh minh chứng"];
    return(
        <>
            <div className="container-ta">
                <h1>Mã đơn đăng ký dạy: <p>{idTa}</p></h1>
                <img src={EditIcon} alt="EditIcon"/>
                <div className="form-ta">
                    {listTitleTop.map((item) => 
                    <Grid container className="grid-container-top">
                        <Grid item xs={6}>
                            <Grid container className="grid-item-top top1">
                                <Grid item className="title item" xs={6}>{item.title1}</Grid>
                                <Grid item xs={6} className="item">{item.data1}</Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container className="grid-item-top">
                                <Grid item className="title item" xs={6}>{item.title2}</Grid>
                                <Grid item xs={6} className="item">{item.data2}</Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    )}
                    {listTitleBottom.map((item) => 
                    <Grid container className="grid-container-top top1">
                        <Grid item xs={3} className="title item">{item}</Grid>
                        <Grid item xs={9} className="item">{item === "Admin"? data.admin : "..."}</Grid>
                    </Grid>
                    )}
                </div>
            </div>
        </>
    );
}

export default TeachingApplication;