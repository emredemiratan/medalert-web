import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { InputText } from "primereact/inputtext";
import ButtonComponent from "../components/ButtonComponent";
import axios from "axios";
import { switchLoadingStatus } from "../store/slices/globalSlice";
import { toast } from "react-hot-toast";

const ProfileIllnesses = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [illness, setIllness] = useState("");
    const [medicine, setMedicine] = useState("");

    const [pastIllnesses, setPastIllnesses] = useState([]);
    const [pastMedicines, setPastMedicines] = useState([]);

    const { profile } = useSelector((state) => state.user);

    const handleAddIllness = () => {
        dispatch(switchLoadingStatus(true));
        const toSend = {
            user: profile.id,
            sickness: illness,
        };
        axios
            .post("http://3.78.3.122:8000/profile/sickness/", toSend)
            .then((res) => {
                console.log(res);
                toast.success("Successfuly added!");
                axios
                    .get(`http://3.78.3.122:8000/profile/sickness/${profile.id}`)
                    .then((res) => {
                        setPastIllnesses(res.data);
                    })
                    .catch((err) => {
                        console.log(err);
                        toast.error("Error while getting past illnesses!");
                    });
            })
            .catch((err) => {
                console.log(err);
                if (err.response.data.non_field_errors[0].includes("unique")) {
                    toast.error("This illness is already added!");
                } else {
                    toast.error(err.message);
                }
            })
            .finally(() => {
                dispatch(switchLoadingStatus(false));
            });
    };

    const handleAddMedicine = () => {
        dispatch(switchLoadingStatus(true));
        const toSend = {
            user: profile.id,
            drug: medicine,
        };
        axios
            .post("http://3.78.3.122:8000/profile/drugs/", toSend)
            .then((res) => {
                console.log(res);
                toast.success("Successfuly added!");
                axios
                    .get(`http://3.78.3.122:8000/profile/drugs/${profile.id}`)
                    .then((res) => {
                        setPastIllnesses(res.data);
                    })
                    .catch((err) => {
                        console.log(err);
                        toast.error("Error while getting past medicines!");
                    });
            })
            .catch((err) => {
                console.log(err);
                if (err.response.data.non_field_errors[0].includes("unique")) {
                    toast.error("This medicine is already added!");
                } else {
                    toast.error(err.message);
                }
            })
            .finally(() => {
                dispatch(switchLoadingStatus(false));
            });
    };

    const handleSubmit = () => {
        navigate("/profiles");
    };

    return (
        <div className="flex blue-bg justify-center items-center m-0 p-0 h-full w-full flex-col">
            <div className="col mt-5 flex flex-col p-4 border-gray-400 rounded-lg custom-card gray-bg mb-5">
                <span className="text-2xl">
                    Please enter your previous illnessess and medications
                </span>
                <div className="grid">
                    <div className="col">Past Illness:</div>
                </div>
                <div className="grid">
                    <ul>
                        {pastIllnesses.map((illness) => {
                            return <li>{illness.name}</li>;
                        })}
                    </ul>
                </div>
                <div className="flex flex-row w-full justify-between mb-3">
                    <InputText
                        value={illness}
                        onChange={(e) => setIllness(e.target.value)}
                        className="w-3/4"
                    />
                    <ButtonComponent
                        label="Add"
                        icon="pi-plus"
                        type="blue"
                        onClick={() => handleAddIllness()}
                    />
                </div>
                <div className="grid">
                    <div className="col">Past Medications:</div>
                </div>
                <div className="grid">
                    <ul>
                        {pastMedicines.map((medicine) => {
                            return <li>{medicine.name}</li>;
                        })}
                    </ul>
                </div>
                <div className="flex flex-row w-full justify-between mb-5">
                    <InputText
                        value={medicine}
                        onChange={(e) => setMedicine(e.target.value)}
                        className="w-3/4"
                    />
                    <ButtonComponent
                        label="Add"
                        icon="pi-plus"
                        type="blue"
                        onClick={() => handleAddMedicine()}
                    />
                </div>
                <div className="grid mt-5">
                    <div className="col flex w-full justify-end">
                        <ButtonComponent
                            label="Submit"
                            icon="pi-check"
                            type="turquoise"
                            onClick={() => handleSubmit()}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileIllnesses;
