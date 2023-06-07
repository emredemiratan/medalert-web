import React, { useEffect, useState } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileInformation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { profile } = useSelector((state) => state.user);

    const [sickness, setSickness] = useState([]);
    const [drugs, setDrugs] = useState([]);

    useEffect(() => {
        axios
            .get(`http://3.78.3.122:8000/profile/sickness/${profile.id}`)
            .then((res) => {
                console.log(res);
                setSickness(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                //
            });
        axios
            .get(`http://3.78.3.122:8000/profile/drugs/${profile.id}`)
            .then((res) => {
                console.log(res);
                setDrugs(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                //
            });
    }, []);

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
                            <span>{profile.name}</span>
                        </div>
                        <div className="flex flex-row items-end">
                            <span>Phone Number</span>
                        </div>
                        <div className="flex flex-row mx-auto  border-2 border-gray-400 p-4 gap-2 rounded-lg bg-teal-100">
                            <span>{profile.phone_number}</span>
                        </div>
                        {/* <div className="flex flex-row items-end">
                            <span>Email</span>
                        </div>
                        <div className="flex flex-row mx-auto  border-2 border-gray-400 p-4 gap-2 rounded-lg bg-teal-100">
                            <span>{profile.email}</span>
                        </div> */}
                        <div className="flex flex-row items-end">
                            <span>Date of Birth</span>
                        </div>
                        <div className="flex flex-row mx-auto  border-2 border-gray-400 p-4 gap-2 rounded-lg bg-teal-100">
                            <span>{profile.birthdate}</span>
                        </div>
                        <div className="flex flex-row items-end">
                            <span>Gender</span>
                        </div>
                        <div className="flex flex-row mx-auto  border-2 border-gray-400 p-4 gap-2 rounded-lg bg-teal-100">
                            {profile.gender === "M" ? <span>Male</span> : <span>Female</span>}
                            {profile.gender === "A" && <span>Apache Attack Helicopter</span>}
                        </div>
                        <div className="flex flex-row items-end">
                            <span>Extra Diseases</span>
                        </div>
                        <div className="flex flex-row mx-auto border-2 border-gray-400 p-4 gap-2 rounded-lg bg-teal-100">
                            <span>
                                {" "}
                                {sickness.map((sick) => {
                                    return <span className="mx-1">{sick.sickness}</span>;
                                })}{" "}
                            </span>
                        </div>
                        <div className="flex flex-row items-end">
                            <span>Regulary Used Medications</span>
                        </div>
                        <div className="flex flex-row mx-auto  border-2 border-gray-400 p-4 gap-2 rounded-lg bg-teal-100">
                            <span>
                                {" "}
                                {drugs.map((drug) => {
                                    return <span className="mx-1">{drug.drug}</span>;
                                })}{" "}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInformation;
