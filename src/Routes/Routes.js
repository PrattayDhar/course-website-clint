import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Cetagory from "../Pages/Cetagory/Cetagory";
import Home from "../Pages/Home/Home";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/cetagory',
                element:<Cetagory></Cetagory>
            }
        ]
    }
])