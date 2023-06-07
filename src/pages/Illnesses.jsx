import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import moment from "moment";
import { Dialog } from "primereact/dialog";

const Illnesses = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [illnesses, setIllnesses] = useState([]);
    const [selectedIllness, setSelectedIllness] = useState({});
    const [showDetails, setShowDetails] = useState(false);

    const { profile } = useSelector((state) => state.user);

    useEffect(() => {
        axios
            .get(`http://3.78.3.122:8000/ai/assessment/profile/${profile.id}`)
            .then((res) => {
                console.log(res.data);
                setIllnesses(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="flex h-full w-full items-center justify-center blue-bg">
            <div className="flex flex-col items-center custom-card border-2 gray-bg border-gray-400 p-4 gap-4 rounded-lg">
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
                <div className="mx-auto w-5/6 flex flex-col p-2">
                    <div className="flex flex-row items-end">
                        <span>Assesment History</span>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        {illnesses.map((illness) => {
                            switch (illness.symptom_details.color) {
                                case "Green":
                                    return (
                                        <button
                                            onClick={() => {
                                                setSelectedIllness(illness);
                                                setShowDetails(true);
                                            }}
                                            className="w-full"
                                        >
                                            <div
                                                key={illness.id}
                                                className="grid flex-col leading-none border-2 border-gray-400 px-5 py-3 rounded-lg bg-teal-100"
                                            >
                                                <div className="col-12 flex items-center justify-between">
                                                    <span className="text-lg">
                                                        <i className="pi pi-info-circle mr-3" />
                                                        {illness.symptom_details.prediction}
                                                    </span>
                                                    <span className="text-sm">
                                                        {moment(illness.time_created).format(
                                                            "DD-MM-YYYY hh:mm A"
                                                        )}
                                                    </span>
                                                </div>
                                                {/* <div className="col-12 text-left">
                                                <span className="text-sm">
                                                    {illness.symptom_details.description}
                                                </span>
                                            </div> */}
                                            </div>
                                        </button>
                                    );
                                case "Red":
                                    return (
                                        <div
                                            key={illness.id}
                                            className="flex flex-col border-2 border-gray-400 px-5 py-3 rounded-lg bg-red-200"
                                        >
                                            <span> {illness.symptom_details.prediction} </span>
                                        </div>
                                    );
                                default:
                                    return <></>;
                            }
                        })}
                    </div>
                </div>
            </div>
            <Dialog
                header="Details"
                visible={showDetails}
                onHide={() => setShowDetails(false)}
                draggable={false}
            >
                <div className="grid">
                    <div className="col-12">
                        <span className="text-xl font-medium border-b-2 border-slate-500">
                            Prediction:
                        </span>
                    </div>
                    <div className="col-12 mb-3">
                        <span>{selectedIllness.symptom_details?.description}</span>
                    </div>
                </div>
                <div className="grid">
                    <div className="col-12">
                        <span className="text-xl font-medium border-b-2 border-slate-500">
                            Treatment:
                        </span>
                    </div>
                    <div className="col-12 mb-3">
                        <span>{selectedIllness.symptom_details?.treatment}</span>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default Illnesses;
