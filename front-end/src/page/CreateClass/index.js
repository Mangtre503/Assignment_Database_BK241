import { Grid } from "@mui/material";
import { useState } from "react";
import "./CreateClass.css";
import { useParams } from "react-router-dom";

function CreateClass(){

    const { idTa } = useParams("idTa");

    const [formCreateClass, setFormCreateClass] = useState({
        status: 'Đã giao',
        startDay: '09/05/2022',
        salary: '2000000',
        deposit: '200000',
        commission: '',
        styleTeaching: 'Trực tiếp',
        student: 'Nguyễn Phong',
        tutor: 'Trần Khánh',
        subject: ["KH Xã Hội","Toán"],
        grade: '10',
        session: 'Thứ 6',
        timeTeaching: '07:00-09:00',
        address: '278, đường Phan Anh, phường Hiệp Tân, quận Tân Phú, TP. Hồ Chí Minh',
        requirement: '',
    });

    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <>
            <div className="container-create-class">
                <h1>Thêm lớp học</h1>
                <form onSubmit={handleSubmit}>
                    <div className="top-inp">
                        <div className="left-inp">
                            <Grid container>
                                <Grid item className="title-inp" xs={2.5}>
                                    Trạng thái:
                                </Grid>
                                <Grid item className="item-inp" xs={3.5}>
                                    <div className="status">{formCreateClass.status}</div>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="right-inp">
                            <Grid container>
                                <Grid item className="title-inp" xs={2.5}>
                                    Ngày bắt đầu:
                                </Grid>
                                <Grid item className="item-inp" xs={3.5}>
                                    <div className="status">{formCreateClass.startDay}</div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className="bottom-inp">

                    </div>
                </form>
            </div>
        </>
    );
}

export default CreateClass;