import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Cart from "../Pages/Cart/Cart";
import Cetagory from "../Pages/Cetagory/Cetagory";
import Courseview from "../Pages/Courseview/Courseview";
import Details from "../Pages/Details/Details";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/blog',
                element: <Blog></Blog>

            },
            {
                path: '/login',
                element: <Login></Login>

            },

            {
                path: '/cetagory/:id',
                element: <Cetagory></Cetagory>,
                loader: ({ params }) => fetch(`https://assignment10-server.vercel.app/cetagory/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://assignment10-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/cart/:id',
                element: <PrivateRoute> <Cart></Cart></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment10-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },

            {
                path: '/course',
                element: <Courseview></Courseview>,
                loader: () => fetch(`https://assignment10-server.vercel.app/course`)
            }
        ]
    }
])