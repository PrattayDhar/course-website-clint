import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Cetagory from "../Pages/Cetagory/Cetagory";
import Courseview from "../Pages/Courseview/Courseview";
import Home from "../Pages/Home/Home";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
                
            },
           
            {
                path:'/cetagory/:id',
                element: <Cetagory></Cetagory>, 
                loader: ({ params }) => fetch(`https://assignment10-server.vercel.app/cetagory/${params.id}`)
            },
            {
                path: '/course',
                element: <Courseview></Courseview>,
                loader: () => fetch(`https://assignment10-server.vercel.app/course`)
            }
        ]
    }
])