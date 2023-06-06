import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import { Toast } from "bootstrap";
import axios from "axios";
import { switchLoadingStatus } from "../store/slices/globalSlice";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading } = useSelector((state) => state.global);
    const [email, emailupdate] = useState("");
    const [password, passwordupdate] = useState("");

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("proceed");
        }
    };
    const validate = () => {
        let result = true;
        if (email === "" || email === null) {
            result = false;
            Toast.warning("Please Enter Email");
        }
        if (password === "" || password === null) {
            result = false;
            Toast.warning("Please Enter Password");
        }
        return result;
    };
    async function Login() {
        dispatch(switchLoadingStatus(true));
        let toSend = {
            email: "claush",
            password: "1",
        };

        axios
            .post("http://3.78.3.122:8000/auth/login/", toSend)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem("_token", res.data.token.access);
                navigate("/profiles");
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                dispatch(switchLoadingStatus(false));
            });
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
                    <form onSubmit={ProceedLogin} className="container">
                        <div className="flex flex-col gap-2">
                            <label>
                                Email<span className="errmsg"></span>
                            </label>
                            <input
                                value={email}
                                onChange={(e) => emailupdate(e.target.value)}
                                className="px-4 py-2 rounded-lg border-2 border-green-600"
                                type="email"
                                placeholder="Email"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <span>Password</span>
                            <input
                                value={password}
                                onChange={(e) => passwordupdate(e.target.value)}
                                className="px-4 py-2 rounded-lg border-2 border-green-600"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                    </form>
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
                        <ButtonComponent label="Login" type="lightblue" onClick={() => Login()} />
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
