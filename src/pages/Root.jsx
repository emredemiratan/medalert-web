import React, { useEffect, useState } from "react";

import Layout from "../layouts/Layout";

import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
            <Layout />
            {loading && <Loading />}
        </div>
    );
};

export default Root;
