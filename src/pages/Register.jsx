import React, { useState } from "react";

import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import ButtonComponent from "../components/ButtonComponent";

const Register = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.global);
    const navigate = useNavigate();
    const [date, setDate] = useState();
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: "Male", code: "m" },
        { name: "Female", code: "fm" },
    ];

    function Register() {
        navigate("/login");
    }

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
            <div className="flex flex-col md:w-1/2 w-full h-full items-center justify-center overflow-auto">
                <div className="flex flex-col w-1/2 border-2 border-gray-400 p-4 gap-3 rounded-lg overflow-y">
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
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Password</span>
                        <input
                            className="px-4 py-2 rounded-lg border-2 border-green-600"
                            type="password"
                            placeholder="Please Enter Your Password"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                    <ButtonComponent label="Register" type="turquoise" onClick={() => Register()}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
