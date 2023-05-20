import React, { useEffect } from "react";

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

    useEffect(() => {
        //
    }, []);
    function Login() {
        navigate("/login");
    }

    return (
        <div className="h-[100vh] w-[100vw]">
            {/* <div className="flex flex-col gap-2">
                <ButtonComponent label="Login" type="turquoise" onClick={() => Login()} />
            </div> */}
            {user.name.length > 0 && <Header />}
            <Outlet />
            {loading && <Loading />}
        </div>
    );
};

export default Root;
