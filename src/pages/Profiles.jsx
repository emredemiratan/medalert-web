import React from "react";

import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profiles = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.global);
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col w-1/2 border-2 border-gray-400 p-4 gap-4 rounded-lg">
                    <img
                        src={require("../assets/medalert-logo.png")}
                        alt=""
                        className="w-1/2 h-1/2 "
                    />
                    <div className="flex flex-col w-1/2 border-2 border-gray-400 p-4 gap-4 rounded-lg">
                        
                    </div>
                    <div className="flex flex-col gap-2">
                        <button
                            className="text-white bg-turquase rounded-lg py-2 "
                            onClick={() => {
                                navigate("/home");
                            }}
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
    );
};
        
export default Profiles;