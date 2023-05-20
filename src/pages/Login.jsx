import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading } = useSelector((state) => state.global);

    function Login() {
        navigate("/profiles");
    }

    return (
        <div className="flex md:flex-row flex-col w-screen h-screen">
            <div className="h-full md:w-1/2 w-full blue-bg relative md:block hidden">
                <div className="flex flex-col h-full w-full absolute items-center justify-center">
                    <img
                        src={require("../assets/medalert-logo.png")}
                        alt=""
                        className="w-[200px] h-[200px]"
                    />
                </div>
            </div>
            <div className="flex flex-col md:w-1/2 md:blue-bg w-full h-full items-center justify-center">
                <div className="flex flex-col custom-card border-2 border-gray-400 p-4 gap-4 rounded-lg">
                    <div className="flex items-center justify-center">
                        <img
                            src={require("../assets/medalert-logo.png")}
                            alt=""
                            className="w-[200px] h-[200px] -m-4 "
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Email</span>
                        <input
                            className="px-4 py-2 rounded-lg border-2 border-green-600"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Password</span>
                        <input
                            className="px-4 py-2 rounded-lg border-2 border-green-600"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex flex-col items-end">
                        <span
                            className="hover:cursor-pointer hover:text-blue-800"
                            onClick={() => {
                                navigate("/forgotpassword");
                            }}
                        >
                            Forgot Password?
                        </span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <ButtonComponent label="Login" type="turquoise" onClick={() => Login()} />
                    </div>
                    <div className="flex flex-col items-center">
                        <span>Not a Member? </span>
                        <span
                            className="hover:cursor-pointer hover:text-blue-800"
                            onClick={() => {
                                navigate("/register");
                            }}
                        >
                            Register Now
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
