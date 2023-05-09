import React from "react";

import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.global);
    const navigate = useNavigate();

    
    function ProfileInfo() {
        navigate("/profileinfo");
    }
    function MyAddresses() {
        navigate("/myadresses");
    }
    function Illnesses() {
        navigate("/illnesses");
    }

    return (
        <div className="flex flex-col items-center ">
        <div className="flex flex-col items-center w-1/2 border-2 border-gray-400 p-4 gap-4 rounded-lg">
        <div className="flex flex-wrap justify-center">
        <div className="w-6/12 sm:w-4/12 px-4">
            <img src={require("../assets/medalert-logo.png")} alt="..." 
            className="shadow rounded-full max-w-full h-auto align-middle border-none" />
        </div>
        </div>
            <button 
            className="flex flex-row justify-center w-1/2 border-2 border-gray-400 p-4 gap-2 rounded-lg bg-cyan-300 " 
            onClick={() => {
                navigate("/profileinfo");
            }}>
                <span>My Profile</span>         
            </button>
            <button 
            className="flex flex-row justify-center w-1/2 border-2 border-gray-400 p-4 gap-2 rounded-lg bg-cyan-300 " 
            onClick={() => {
                navigate("/myadresses");
            }}>
                <span>My Addresses</span>         
            </button>
            <button 
            className="flex flex-row justify-center w-1/2 border-2 border-gray-400 p-4 gap-2 rounded-lg bg-cyan-300 " 
            onClick={() => {
                navigate("/illnesses");
            }}>
                <span>Illnesses</span>         
            </button>
            <button 
            className="flex flex-row justify-center w-1/2 border-2 border-gray-400 p-4 gap-2 rounded-lg bg-cyan-300 " 
            onClick={() => {
                navigate("/home");
            }}>
                <span>Settings</span>         
            </button>
        </div>
        </div>
        );
    };
            
    export default MyAccount;