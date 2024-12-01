import { useNavigate, useParams } from "react-router-dom";

function ClassDetail() {
  const {idClass} = useParams("idClass");
  const navigate = useNavigate();
  return (
    <>
      ClassDetail {idClass}
        <div>
        <button onClick={() => navigate("/information-student/1")}>Xem thông tin học viên</button>
        <button onClick={() => navigate("/information-tutor/1")}>Xem thông tin gia sư</button>
        <button onClick={() => navigate("/bill/" + idClass)}>Xem thông tin hóa đơn</button>
        <button onClick={() => navigate("/teaching-application/" + idClass)}>Xem đơn đăng ký dạy</button>
        <button onClick={() => navigate("/create-bill")}>Tạo hóa đơn</button>
        </div>
    </>
  );
}

export default ClassDetail;
