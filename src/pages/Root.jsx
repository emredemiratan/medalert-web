import React, { useEffect, useState } from "react";

import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";
import axios from "axios";

const Root = () => {
    const navigate = useNavigate();

    const { loading } = useSelector((state) => state.global);
    const { user } = useSelector((state) => state.user);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (checkToken()) {
            setIsLoggedIn(true);
            navigate("/profiles");
        } else {
            setIsLoggedIn(false);
            navigate("/login");
        }
    }, []);

    useEffect(() => {
        checkToken();
    }, [isLoggedIn, localStorage.getItem("_token")]);

    function checkToken() {
        if (localStorage.getItem("_token")) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="max-w-[100vw] h-[100vh] w-full overflow-x-hidden">
            {user.name.length > 0 && <Header />}
            <Outlet />
            {loading && <Loading />}
            <Toaster />
        </div>
    );
};

export default Root;
