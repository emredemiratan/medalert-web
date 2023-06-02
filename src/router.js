import { createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";

import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import AcceptScreen from "./pages/AcceptScreen";
import SymptomSelection from "./pages/SymptomSelection";

import CustomComponents from "./pages/CustomComponents";
import CreateProfile from "./pages/CreateProfile";
import Profiles from "./pages/Profiles";
import Home from "./pages/Home/Home";
import Summary from "./pages/Summary";
import MyAccount from "./pages/MyAccount";
import ProfileInformation from "./pages/ProfileInformation";
import MyAdresses from "./pages/MyAdresses";
import Illnesses from "./pages/Illnesses";
import Questions from "./pages/Questions";

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
            {
                path: "/acceptscreen",
                element: <AcceptScreen />,
            },

            {
                path: "/symptoms",
                element: <SymptomSelection />,
            },

            {
                path: "/createprofile",
                element: <CreateProfile />,
            },
            {
                path: "/profiles",
                element: <Profiles />,
            },
            {
                path: "/summary",
                element: <Summary />,
            },
            {
                path: "/myaccount",
                element: <MyAccount />,
            },
            {
                path: "/profileinfo",
                element: <ProfileInformation />,
            },
            {
                path: "/myadresses",
                element: <MyAdresses />,
            },
            {
                path: "/illnesses",
                element: <Illnesses />,
            },
            {
                path: "/questions",
                element: <Questions />,
            },
        ],
    },
]);

export default router;
