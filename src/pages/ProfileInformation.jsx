import React, { useState } from "react";

import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Calendar } from "primereact/calendar";

const ProfileInformation = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.global);
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.user);

    return (
        <div className="8px">
            <div className="flex h-full  w-full items-center justify-center blue-bg ">
                <div className="flex flex-col items-center custom-card mt-5 mb-5 border-2 gray-bg border-gray-400 p-4 gap-4 rounded-lg">
                    <div className="flex w-full justify-start items-center">
                        <button onClick={() => navigate("/myAccount")}>
                            <i className="pi pi-arrow-left mr-3" />
                            <span>My Account</span>
                        </button>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-6/12 sm:w-4/12 px-4">
                            <img
                                src={require("../assets/medalert-logo.png")}
                                alt="..."
                                className="shadow rounded-full max-w-full h-auto align-middle border-none"
                            />
                        </div>
                    </div>
                    <div className="mx-auto sm:w-1/2 ">
                        <div className="flex flex-row items-end">
                            <span>Name</span>
                        </div>
                        <div className="flex flex-row mx-auto border-2 border-gray-400 p-4 gap-2 rounded-lg bg-teal-100">
                            <span>{user.name}</span>
                        </div>
                        <div className="flex flex-row items-end">
                            <span>Surname</span>
                        </div>
                        <div className="flex flex-row mx-auto  border-2 border-gray-400 p-4 gap-2 rounded-lg bg-teal-100">
                            <span>{user.surname}</span>
                        </div>
                        <div className="flex flex-row items-end">
                            <span>Phone Number</span>
                        </div>
                        <div className="flex flex-row mx-auto  border-2 border-gray-400 p-4 gap-2 rounded-lg bg-teal-100">
                            <span>{user.phone_number}</span>
                        </div>
                        <div className="flex flex-row items-end">
                            <span>Email</span>
                        </div>
                        <div className="flex flex-row mx-auto  border-2 border-gray-400 p-4 gap-2 rounded-lg bg-teal-100">
                            <span>{user.email}</span>
                        </div>
                        <div className="flex flex-row items-end">
                            <span>Date of Birth</span>
                        </div>
                        <div className="flex flex-row mx-auto  border-2 border-gray-400 p-4 gap-2 rounded-lg bg-teal-100">
                            <span>{user.birthdate}</span>
                        </div>
                        <div className="flex flex-row items-end">
                            <span>Gender</span>
                        </div>
                        <div className="flex flex-row mx-auto  border-2 border-gray-400 p-4 gap-2 rounded-lg bg-teal-100">
                            {user.gender === "M" ? <span>Male</span> : <span>Female</span>}
                        </div>
                        <div className="flex flex-row items-end">
                            <span>Extra Diseases</span>
                        </div>
                        <div className="flex flex-row mx-auto  border-2 border-gray-400 p-4 gap-2 rounded-lg bg-teal-100">
                            <span> - </span>
                        </div>
                        <div className="flex flex-row items-end">
                            <span>Regulary Used Medications</span>
                        </div>
                        <div className="flex flex-row mx-auto  border-2 border-gray-400 p-4 gap-2 rounded-lg bg-teal-100">
                            <span> - </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInformation;
