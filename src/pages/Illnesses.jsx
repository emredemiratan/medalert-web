import React, { useState } from "react";

import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Calendar } from "primereact/calendar";

const Illnesses = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.global);
    const navigate = useNavigate();
    const [date, setDate] = useState();


    return (
        <div className="flex flex-col items-center ">
        <div className="flex flex-col items-center w-1/2 border-2 border-gray-400 p-4 gap-4 rounded-lg">
        <div className="flex flex-wrap justify-center">
        <div className="w-6/12 sm:w-4/12 px-4">
            <img src={require("../assets/medalert-logo.png")} alt="..." 
            className="shadow rounded-full max-w-full h-auto align-middle border-none" />
        </div>
        </div>
            <div className="mx-auto w-1/2">
            <div className="flex flex-row items-end">
            <span>Illnesses</span>
        </div>
        <div className="flex flex-row mx-auto border-2 border-gray-400 p-4 gap-2 rounded-lg bg-teal-100">
                        <span>Illnesses 1</span>
        </div>
            </div>
        </div>
        </div>
        
        );
    };
            
    export default Illnesses;