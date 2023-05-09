import React from "react";

import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import MyAccount from "./MyAccount";


const Profiles = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.global);
    const navigate = useNavigate();
    
    function CreateProfile() {
        navigate("/createprofile");
    }
    function MyAccount() {
        navigate("/myaccount");
    }
    

    return (
        <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col w-1/2 border-2 border-gray-400 p-4 gap-2 rounded-lg">
                <div className="flex items-center justify-end">
                <Button icon="pi pi-user" rounded text raised severity="info" aria-label="User" onClick={() => MyAccount()} />
                </div>
                <div className="flex items-center justify-center">
                        <img
                            src={require("../assets/medalert-logo.png")}
                            alt=""
                            className="w-[300px] h-[300px] -m-4 "
                        />
                    </div>
                    
                    <span>Your Profiles:</span>
                    <div>
                    <button 
                    className="flex w-1/3 items-center p-2 border border-black rounded-2xl bg-cyan-300" 
                    onClick={() => {
                        navigate("/home");
                    }}>
                    <img src="/static/media/user-icon.9e4745a27351f6317a61.png" alt="john" class="mini-icon mx-2 my-1"></img>
                    <span>John</span>
                        
                    </button>
                    </div>
                    <div >
                    <button className="flex w-1/3 items-center p-2 border border-black rounded-2xl bg-cyan-300" 
                    onClick={() => {
                        navigate("/home");
                    }}>
                    <img src="/static/media/user-icon.9e4745a27351f6317a61.png" alt="john" class="mini-icon mx-2 my-1"></img>
                    <span>Yigit</span>
                        
                    </button>
                    
                        
                    </div>
                    <div >
                    <button className="flex w-1/3 items-center p-2 border border-black rounded-2xl bg-cyan-300" 
                    onClick={() => {
                        navigate("/home");
                    }}>
                    <img src="/static/media/user-icon.9e4745a27351f6317a61.png" alt="john" class="mini-icon mx-2 my-1"></img>
                    <span>Emre</span>
                    
                        
                    </button>
                    
                        
                    </div>
                    <div className="grid mt-5 mb-5">
                <div className="col-12 flex justify-center items-center">
                    <ButtonComponent label="New Profile" type="cyan-500" onClick={() => CreateProfile()}/>
                </div>
            </div>
                </div>
            </div>
    );
};
        
export default Profiles;