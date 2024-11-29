import { useParams } from "react-router-dom";

function InformationStudent(){
    const { idStudent } = useParams("idStudent");
    return(
        <>
            InformationStudent {idStudent}
        </>
    );
}

export default InformationStudent;