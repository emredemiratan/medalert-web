import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import axios from "axios";
import { setProfile } from "../store/slices/userSlice";
import { switchLoadingStatus } from "../store/slices/globalSlice";

const Profiles = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        dispatch(switchLoadingStatus(true));
        axios
            .get("http://3.78.3.122:8000/profile/")
            .then((res) => {
                console.log(res.data);
                setProfiles(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                dispatch(switchLoadingStatus(false));
            });
    }, []);

    function CreateProfile() {
        navigate("/createprofile");
    }
    function MyAccount() {
        navigate("/myaccount");
    }

    const handleProfileSelection = async (profile) => {
        console.log(profile);
        await dispatch(setProfile(profile));
        navigate("/home");
    };

    return (
        <div className="flex flex-row h-full w-full items-start justify-center blue-bg">
            <div className="grid mt-5 border-2 border-gray-400 p-4 gap-2 rounded-lg gray-bg custom-card">
                <div className="col-12 flex justify-center items-center">
                    <img
                        style={{
                            borderColor: "gray",
                            borderWidth: 2,
                            borderRadius: 360,
                            height: 200,
                            width: 200,
                        }}
                        src={require("../assets/medalert-logo.png")}
                        alt=""
                        className="w-1/2 h-1/2 "
                    />
                </div>
                <span className="ml-5">Your Profiles:</span>
                <div className="col-12 max-h-[300px] overflow-scroll p-3">
                    <div className="grid md:grid-cols-3 grid-col-6 flex-col flex-wrap">
                        {profiles.map((profile) => {
                            return (
                                <div
                                    className="col flex justify-center items-center mb-3"
                                    key={profile.phone_number}
                                >
                                    <button
                                        className="flex w-11/12 items-center p-2 border border-black bg-white text-blue-600 rounded-2xl justify-center"
                                        onClick={() => {
                                            handleProfileSelection(profile);
                                        }}
                                    >
                                        <i className="pi pi-user mr-2 text-xl text-blue-600"></i>
                                        <span>{profile.name}</span>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="grid mt-5 mb-5">
                    <div className="col-12 flex justify-center items-center">
                        <ButtonComponent
                            label="New Profile"
                            type="lightblue"
                            onClick={() => CreateProfile()}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profiles;
