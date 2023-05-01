import React, { useEffect } from "react";

import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";

import Header from "../components/Header";

const Root = () => {
    const navigate = useNavigate();

    const { loading } = useSelector((state) => state.global);
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        // if (user.name.length > 0) {
        //     navigate("/home");
        // } else {
        //     navigate("/login");
        // }
    }, []);

    return (
        <div className="">
            {user.name.length > 0 && <Header />}
            <Outlet />
            {loading && <Loading />}
        </div>
    );
};

export default Root;
