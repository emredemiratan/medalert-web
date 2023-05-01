import { createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";

import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import HomeScreen from "./pages/HomeScreen";
import AcceptScreen from "./pages/AcceptScreen";

import CustomComponents from "./pages/CustomComponents";

import Home from "./pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/forgotpassword",
                element: <ForgotPassword />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/components",
                element: <CustomComponents />,
            },
            // {
            //     path: "/homescreen",
            //     element: <HomeScreen />,
            // },
            {
                path: "/acceptscreen",
                element: <AcceptScreen />,
            },
        ],
    },
]);

export default router;
