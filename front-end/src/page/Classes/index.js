import { useNavigate } from "react-router-dom";
import ClassItem from "../../component/ClassItem";

function Classes(){
    const listClass = Array(20).fill();
    const navigate = useNavigate();
    return (
        <>
            Classes
            <div>
            {listClass.map((_, index) => <>
                <ClassItem idClass={index}/>
                <button onClick={() => navigate("/class/" + index)}>Class {index}</button>
            </>)}
            </div>
        </>
    );
}

export default Classes;