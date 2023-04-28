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
            <img
                    src={require("../assets/medalert-logo.png")}
                    alt=""
                    className="w-1/2 h-1/2 -m-4 "
                />

            <div className="flex flex-col items-center">
                <span>Enter the email address associated with your account.
                        We will email you link to reset your password!
                    </span>
                </div>
                <div className="flex flex-col  gap-2">
                    <input className="px-4 py-2 rounded-lg border-2 border-green-600" type="email" placeholder="Email" />
                </div>
                <div className="flex flex-col gap-2">
                    <button className="text-white bg-turquase rounded-lg py-2 " >Send</button>
                </div> 
                
            </div>
        </div>

       </div>
    );
};

export default Login;
