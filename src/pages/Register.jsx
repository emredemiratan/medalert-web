import React from "react";

import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Calendar } from 'primereact/calendar';

const Register = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.global);
    const navigate = useNavigate();

    return (
       <div className="flex md:flex-row flex-col w-screen h-screen">
            <div className="h-full md:w-1/2 w-full bg-blue-400 relative" > 
                <img
                    src={require("../assets/bg.png")}
                    alt=""
                    className="h-full w-full absolute"
                />
                <div className="flex flex-col h-full w-full absolute items-center justify-center">
                <img
                    src={require("../assets/medalert-logo.png")}
                    alt=""
                    className="w-1/4 h-1/4  "
                />

                </div>
                      
            </div>
        <div className="flex flex-col md:w-1/2 w-full h-full items-center justify-center">
            <div className="flex flex-col w-1/2 border-2 border-gray-400 p-4 gap-4 rounded-lg">
                <div className="flex flex-col gap-2">
                    <span>Name</span>
                    <input className="px-4 py-2 rounded-lg border-2 border-green-600" type="name" placeholder="Please Enter Your Name" />
                </div>
                <div className="flex flex-col gap-2">
                    <span>Surname</span>
                    <input className="px-4 py-2 rounded-lg border-2 border-green-600" type="surname" placeholder="Please Enter Your Surname" />
                </div>
                <div className="flex flex-col gap-2">
                    <span>Phone Number</span>
                    <input className="px-4 py-2 rounded-lg border-2 border-green-600" type="phone" placeholder="Please Enter Your Phone Number" />
                </div>
                <div className="flex flex-col gap-2">
                    <span>Email</span>
                    <input className="px-4 py-2 rounded-lg border-2 border-green-600" type="email" placeholder="Please Enter Your Email" />
                </div>
                <div className="flex flex-col gap-2">
                    <span>Date Of Birth</span>
                    
                </div>
                <div className="flex flex-col gap-2">
                    <span>Address</span>
                    <input className="px-4 py-2 rounded-lg border-2 border-green-600" type="address" placeholder="Please Enter Your Address" />
                </div>
                <div className="flex flex-col gap-2">
                    <span>Gender</span>
                    <button className="text-white bg-blue-400 rounded-lg py-2 " onClick>Man</button>
                    <button className="text-white bg-pink-400 rounded-lg py-2 " onClick>Woman</button>
                </div>
                <div className="flex flex-col gap-2">
                    <button className="text-white bg-blue-500 rounded-lg py-2 " onClick={()=>{navigate("/homescreen")}}>Register</button>
                </div> 
            </div>
        </div>

       </div>
    );
};

export default Register;
