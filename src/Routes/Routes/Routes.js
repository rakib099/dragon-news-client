import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News/News";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch(`https://dragon-news-server-gules.vercel.app/news`)
            },
            {
                path: "/category/:id",
                element: <Category />,
                loader: ({params}) => {
                    return fetch(`https://dragon-news-server-gules.vercel.app/category/${params.id}`);
                }
            },
            {
                path: "/news/:id",
                element: <PrivateRoute> <News /> </PrivateRoute>,
                loader: ({params}) => fetch(`https://dragon-news-server-gules.vercel.app/news/${params.id}`)
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "t&c",
                element: <TermsAndConditions />
            }
        ]
    }
]);