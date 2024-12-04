import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../component/Layout";
import BillDetail from "../page/BillDetail";
import ClassDetail from "../page/ClassDetail";
import Classes from "../page/Classes";
import CreateBill from "../page/CreateBill";
import InformationAccount from "../page/InformationAccount";
import InformationStudent from "../page/InformationStudent";
import InformationTutor from "../page/InformationTutor";
import Login from "../page/Login";
import NotFound from "../page/NotFound";
import TeachingApplication from "../page/TeachingApplication";
// import TutorRegistration from "../page/TutorRegistration";
// import ConsultationRequest from "../page/ConsultationRequest";

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
                // {
                //     path: 'tutorRegistration',
                //     element: <TutorRegistration/>
                // },
                // {
                //     path: 'consultationRequest',
                //     element: <ConsultationRequest/>
                // },
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