import { useParams } from "react-router-dom";

function UpdateClass(){
    const { idClass } = useParams("idClass");
    return(
        <>
            UpdateClass
        </>
    );
}

export default UpdateClass;