import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import ButtonComponent from "../components/ButtonComponent";
import { toast } from "react-hot-toast";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading } = useSelector((state) => state.global);

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function Register() {
        console.log(email);
        console.log(username);
        console.log(password);

        const registerData = {
            email: email,
            // username,
            password: password,
        };

        axios
            .post("http://3.78.3.122:8000/account/register/", registerData)
            .then((res) => {
                console.log(res);
                toast.success("Register success!");
                navigate("/login");
            })
            .catch((err) => {
                console.log(err);
                toast.error(err.message);
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
            <div className="flex flex-col md:w-1/2 w-full h-full items-center justify-center overflow-auto">
                <div className="flex flex-col border-2 custom-card p-4 gap-3 rounded-lg overflow-y">
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
                            placeholder="Please Enter Your Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Username</span>
                        <input
                            className="px-4 py-2 rounded-lg border-2 border-green-600"
                            type="text"
                            placeholder="Please Enter Your Username"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Password</span>
                        <input
                            className="px-4 py-2 rounded-lg border-2 border-green-600"
                            type="password"
                            placeholder="Please Enter Your Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <ButtonComponent
                            label="Register"
                            type="lightblue"
                            onClick={() => Register()}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
