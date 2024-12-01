import { useParams } from "react-router-dom";

function InformationTutor(){
    const { idTutor } = useParams("idTutor");
    return(
        <>
            InformationTutor {idTutor}
        </>
    );
}

export default InformationTutor;