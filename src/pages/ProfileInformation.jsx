import React, { useState } from "react";

import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Calendar } from "primereact/calendar";

const ProfileInformation = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.global);
    const navigate = useNavigate();
    const [date, setDate] = useState();

    return (
        <div className="flex flex-col items-center ">
        <div className="flex flex-col items-center w-1/2 border-2 border-gray-400 p-4 gap-4 rounded-lg">
        <div className="flex flex-wrap justify-center">
        <div className="w-6/12 sm:w-4/12 px-4">
            <img src={require("../assets/guys.jpg")} alt="..." 
            className="shadow rounded-full max-w-full h-auto align-middle border-none" />
        </div>
        </div>
        <div className="flex flex-row items-end">
            <span>Name</span>
        </div>
        <div>
            <input
                className="px-4 py-2 rounded-lg border-2 border-green-600"
                type="name"
                placeholder="name"
            />
        </div>
        <div className="flex flex-col gap-2">
            <span classname="flex flex-col gap-2">Surname </span>
        </div>
        <div>
            <input
                className="px-4 py-2 rounded-lg border-2 border-green-600"
                type="surname"
                placeholder="Surname"
            />
        </div>
        <div className="flex flex-col gap-2">
                        <span>Date Of Birth</span>
                        <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
                    </div>
        </div>
        </div>
        
        );
    };
            
    export default ProfileInformation;