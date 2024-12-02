import { useNavigate, useParams } from "react-router-dom";

function BillDetail(){
    const { idBill } = useParams("idBill");
    const navigate = useNavigate();
    return(
        <>
            BillDetail {idBill}
            Thông tin lớp học:
            <button onClick={() => navigate("/class/" + idBill)}>Xem thông tin lớp</button>
        </>
    );
}

export default BillDetail;