import React from "react";

import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.global);

    return (
        <div className="container-fluid">
            <div className="row">
                {/* left side of the login page */}
                <div className="col login-left">
                    <img
                        src={require("../assets/medalert-logo.png")}
                        alt=""
                        className="login-logo"
                    />
                </div>
                {/* right side of the login page (form) */}
                <div className="col login-right">
                    <div className="card p-3">
                        <div className="row">
                            <div className="col">
                                <Button
                                    label="Login"
                                    icon="pi pi-check"
                                    iconPos="right"
                                    loading={loading}
                                    rounded
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
