import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import "./noauth.css";

import Header from "../components/Header";

const Layout = () => {
    const { user } = useSelector((state) => state.user);

    return (
        <>
            {user.name.length > 0 && <Header />}
            <Outlet />
        </>
    );
};

export default Layout;
