import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { TaskManagerHome } from "../components/Taskmanager";
import { UserLogin } from "../components/login";
import { UserDashboard } from "../components/userdashboard";
const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<TaskManagerHome/>
            },
            {
                path:'login',
                element:<UserLogin width="w-25 mx-auto mt-5" />

            }
        ]
    },
    {
        path:'dashboard',
        element:<UserDashboard/>
    }
])
export default router
