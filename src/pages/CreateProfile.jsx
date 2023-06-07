import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import ButtonComponent from "../components/ButtonComponent";
import axios from "axios";

import { switchLoadingStatus } from "../store/slices/globalSlice";
import { toast } from "react-hot-toast";
import moment from "moment";
import { setProfile } from "../store/slices/userSlice";

const CreateProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [selectedGender, setSelectedGender] = useState(null);
    const [date, setDate] = useState();
    const [phone, setPhone] = useState("");

    // const { profile } = useSelector((state) => state.user);

    const genders = [
        { name: "Male", code: "M" },
        { name: "Female", code: "F" },
    ];

    const handleCreateProfile = () => {
        dispatch(switchLoadingStatus(true));
        const toSend = {
            name: name + " " + surname,
            gender: selectedGender,
            birthdate: moment(date).format("YYYY-MM-DD"),
            phone_number: phone,
            user: localStorage.getItem("id"),
        };
        console.log(toSend);
        axios
            .post("http://3.78.3.122:8000/profile/", toSend)
            .then((res) => {
                console.log(res);
                dispatch(setProfile(res.data));
                navigate("/profileIllnessess");
            })
            .catch((err) => {
                console.log(err);
                toast.error(err.message);
            })
            .finally(() => {
                dispatch(switchLoadingStatus(false));
            });
    };

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
                <div className="flex flex-col custom-card gray-bg border-2 border-gray-400 p-4 gap-1 rounded-lg max-h-[650px] overflow-scroll">
                    <div className="flex justify-start">
                        <button onClick={() => navigate("/profiles")}>
                            <i className="pi pi-arrow-left mr-3" />
                            <span>My Profile(s)</span>
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src={require("../assets/medalert-logo.png")}
                            alt=""
                            className="w-[200px] h-[200px] -m-4"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Name</span>
                        <input
                            className="px-4 py-2 rounded-lg border-2 border-green-600"
                            type="name"
                            placeholder="Please Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Surname</span>
                        <input
                            className="px-4 py-2 rounded-lg border-2 border-green-600"
                            type="surname"
                            placeholder="Please Enter Your Surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Phone Number</span>
                        <input
                            className="px-4 py-2 rounded-lg border-2 border-green-600"
                            type="phone"
                            placeholder="Please Enter Your Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Date Of Birth</span>
                        <Calendar
                            value={date}
                            onChange={(e) => setDate(e.value)}
                            showIcon
                            placeholder="Date Of Birth"
                        />
                    </div>
                    <span>Gender</span>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-row w-full gap-2 items-center">
                            <Dropdown
                                value={selectedGender}
                                onChange={(e) => setSelectedGender(e.value)}
                                options={genders}
                                optionLabel="name"
                                placeholder="Gender"
                                optionValue="code"
                                className="w-full md:w-14rem"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-5">
                        <ButtonComponent
                            label="Create Profile"
                            type="lightblue"
                            onClick={() => handleCreateProfile()}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProfile;
