import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../component/Layout";
import BillDetail from "../page/BillDetail";
import ClassDetail from "../page/ClassDetail";
import Classes from "../page/Classes";
import ConsultationRequest from "../page/ConsultationRequest";
import CreateBill from "../page/CreateBill";
import CreateClass from "../page/CreateClass";
import InformationAccount from "../page/InformationAccount";
import InformationStudent from "../page/InformationStudent";
import InformationTutor from "../page/InformationTutor";
import Login from "../page/Login";
import NotFound from "../page/NotFound";
import TeachingApplication from "../page/TeachingApplication";
import TutorRegistration from "../page/TutorRegistration";

const Routers = () => {
    // const userData = useSelector(state => state.accountAction);
    const userData = true;
    const routes = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true, // index route khi path là "/"
                    element: userData? <Navigate to="/information" replace /> : <Navigate to={"/login"}/>
                },
                {
                    path: 'login',
                    element: <Login/>
                },
                {
                    path: 'information',
                    element: <InformationAccount/>
                },
                {
                    path: 'information-student/:idStudent',
                    element: <InformationStudent/>
                },
                {
                    path: 'information-tutor/:idTutor',
                    element: <InformationTutor/>
                },
                {
                    path: 'class',
                    element: <Classes/>
                },
                {
                    path: 'class/:idClass',
                    element: <ClassDetail/>
                },
                {
                    path: 'create-class',
                    element: <CreateClass/>
                },
                {
                    path: 'create-class/:idTa',
                    element: <CreateClass/>
                },
                {
                    path: 'teaching-application/:idTa',
                    element: <TeachingApplication/>
                },
                {
                    path: 'create-bill',
                    element: <CreateBill/>
                },
                {
                    path: 'bill/:idBill',
                    element: <BillDetail/>
                },
                {
                    path: 'tutor-registration',
                    element: <TutorRegistration/>
                },
                {
                    path: 'consultation-request',
                    element: <ConsultationRequest/>
                },
                {
                    path: '*',
                    element: <NotFound/>
                }
            ]
        },
    ])
    return routes;
}

export default Routers;