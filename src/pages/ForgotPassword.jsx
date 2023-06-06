import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function ForgotPassword() {
        navigate("/login");
    }

    return (
        <div className="flex md:flex-row flex-col w-screen h-screen">
            <div className="h-full md:w-1/2 w-full blue-bg md:block hidden relative">
                <div className="flex flex-col h-full w-full absolute items-center justify-center">
                    <img
                        src={require("../assets/medalert-logo.png")}
                        alt=""
                        className="w-[200px] h-[200px]"
                    />
                </div>
            </div>
            <div className="flex flex-col md:w-1/2 w-full h-full items-center justify-center">
                <div className="flex flex-col custom-card border-2 border-gray-400 p-4 gap-4 rounded-lg justify-center items-center">
                    <img
                        src={require("../assets/medalert-logo.png")}
                        alt=""
                        className="w-1/2 h-1/2 -m-4 "
                    />
                    <div className="flex flex-col items-center">
                        <span>
                            Enter the email address associated with your account. We will email you
                            link to reset your password!
                        </span>
                    </div>
                    <div className="flex flex-col  gap-2">
                        <input
                            className="px-4 py-2 rounded-lg border-2 border-green-600"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <ButtonComponent
                            label="Send"
                            type="lightblue"
                            onClick={() => ForgotPassword()}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
