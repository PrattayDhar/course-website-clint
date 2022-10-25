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
                element: <Home></Home>, 
                loader: () => fetch(`https://assignment10-server.vercel.app/course`)
            },
            {
                path: '/cetagory',
                element: <Cetagory></Cetagory>
            },
            {
                path:'/cetagory/:id',
                element: <Cetagory></Cetagory>, 
                loader: ({ params }) => fetch(`https://assignment10-server.vercel.app/cetagory/${params.id}`)
            }
        ]
    }
])