import React from "react";

import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.global);
    const navigate = useNavigate();

    return (
        <div className="flex md:flex-row flex-col w-screen h-screen">
            <div className="h-full md:w-1/2 w-full bg-blue-400 relative">
                <img src={require("../assets/bg.png")} alt="" className="h-full w-full absolute" />
                <div className="flex flex-col h-full w-full absolute items-center justify-center">
                    <img
                        src={require("../assets/medalert-logo.png")}
                        alt=""
                        className="w-[200px] h-[200px]"
                    />
                </div>
            </div>
            <div className="flex flex-col md:w-1/2 w-full h-full items-center justify-center">
                <div className="flex flex-col w-1/2 border-2 border-gray-400 p-4 gap-4 rounded-lg">
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
                    <div className="flex flex-col gap-2">
                        <button
                            className="text-white bg-turquase rounded-lg py-2 "
                            onClick={() => {
                                navigate("/home");
                            }}
                        >
                            Login
                        </button>
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
