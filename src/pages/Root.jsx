import React, { useEffect, useState } from "react";

import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import Header from "../components/Header";

const Root = () => {
    const navigate = useNavigate();

    const { loading } = useSelector((state) => state.global);
    const { user } = useSelector((state) => state.user);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        //
    }, []);

    useEffect(() => {
        checkToken();
    }, [isLoggedIn, localStorage.getItem("_token")]);

    function checkToken() {
        if (!localStorage.getItem("_token")) {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }

    return (
        <div className="h-[100vh] w-[100vw]">
            {isLoggedIn && <Header />}
            <Outlet />
            {loading && <Loading />}
        </div>
    );
};

export default Root;
