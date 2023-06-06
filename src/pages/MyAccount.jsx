import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProfile } from "../store/slices/userSlice";
import ButtonComponent from "../components/ButtonComponent";

const MyAccount = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("_token");
        dispatch(setProfile({ name: "", surname: "" }));
        navigate("/login");
    };

    return (
        <div className="flex flex-row justify-center items-center h-full w-full blue-bg">
            <div className="flex flex-col items-center custom-card gray-bg border-2 p-5 gap-4 rounded-lg">
                <div className="flex w-full justify-between items-center">
                    <button onClick={() => navigate("/home")}>
                        <i className="pi pi-arrow-left mr-3" />
                        <span>Home</span>
                    </button>
                    <ButtonComponent
                        label="Logout"
                        type="red"
                        icon="pi-times"
                        onClick={() => handleLogout()}
                    />
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
                <button
                    className="flex flex-row justify-center w-1/2 border-2 border-gray-400 p-4 gap-2 rounded-lg bg-cyan-300 "
                    onClick={() => {
                        navigate("/profileinfo");
                    }}
                >
                    <span>My Profile</span>
                </button>
                {/* <button
                    className="flex flex-row justify-center w-1/2 border-2 border-gray-400 p-4 gap-2 rounded-lg bg-cyan-300 "
                    onClick={() => {
                        navigate("/myadresses");
                    }}
                >
                    <span>My Addresses</span>
                </button> */}
                <button
                    className="flex flex-row justify-center w-1/2 border-2 border-gray-400 p-4 gap-2 rounded-lg bg-cyan-300 "
                    onClick={() => {
                        navigate("/illnesses");
                    }}
                >
                    <span>Illnesses</span>
                </button>
                {/* <button
                    className="flex flex-row justify-center w-1/2 border-2 border-gray-400 p-4 gap-2 rounded-lg bg-cyan-300 "
                    onClick={() => {
                        navigate("/home");
                    }}
                >
                    <span>Settings</span>
                </button> */}
            </div>
        </div>
    );
};

export default MyAccount;
