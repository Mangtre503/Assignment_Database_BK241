import { useParams } from "react-router-dom";

function TeachingApplication(){
    const { idTa } = useParams("idTa");
    return(
        <>
            TeachingApplication {idTa}
        </>
    );
}

export default TeachingApplication;