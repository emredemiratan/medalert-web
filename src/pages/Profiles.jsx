import React from "react";

import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";

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

    const profiles = [
        {
            id: "1",
            name: "John",
            surname: "Doe",
        },
        {
            id: "2",
            name: "John",
            surname: "Doe",
        },
        {
            id: "3",
            name: "John",
            surname: "Doe",
        },
        {
            id: "4",
            name: "John",
            surname: "Doe",
        },
    ];

    return (
        <div className="flex flex-row h-full w-full items-start justify-center blue-bg">
            <div className="grid mt-5 border-2 border-gray-400 p-4 gap-2 rounded-lg bg-gray custom-card">
                {/* <div className="col-12 flex items-center justify-end">
                    <Button
                        icon="pi pi-user"
                        rounded
                        text
                        raised
                        severity="info"
                        aria-label="User"
                        onClick={() => MyAccount()}
                    />
                </div> */}
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
                <span>Your Profiles :</span>
                <div className="col-12">
                    <div className="grid w-full">
                        {profiles.map((profile) => {
                            return (
                                <div className="col-6 mb-3" key={profile.id}>
                                    <button
                                        className="flex w-1/3 items-center p-2 border border-black rounded-2xl justify-center"
                                        onClick={() => {
                                            navigate("/home");
                                        }}
                                    >
                                        <img
                                            src="/static/media/user-icon.9e4745a27351f6317a61.png"
                                            alt={profile.name}
                                            className="mini-icon mx-2 my-1"
                                        ></img>
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
                            type="cyan-500"
                            onClick={() => CreateProfile()}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profiles;
