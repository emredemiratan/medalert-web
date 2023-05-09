import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Typewriter from "../components/Typewriter";
import DropdownComponent from "../components/DropdownComponent";
import ButtonComponent from "../components/ButtonComponent";
import { Button } from "primereact/button";
const SymptomSelection = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const diseases = [
        {
            id: 0,
            name: "Nausea",
        },
        {
            id: 1,
            name: "Headache",
        },
        {
            id: 2,
            name: "Tremor",
        },
        {
            id: 3,
            name: "Flu",
        },
        {
            id: 4,
            name: "Stomach Ache",
        },
    ];
    const [selectedDiseases, setSelectedDiseases] = useState([]);

    const customerIsNotWell = "I'm sorry to hear that. Could you tell me what's wrong with you?";

    function Submit() {
        navigate("/summary");
    }
    function MyAccount() {
        navigate("/myaccount");
    }

    return (
        <form>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col w-1/2 border-2 border-gray-400 p-4 gap-2 rounded-lg">
                <div className="flex items-center justify-end">
                    <Button icon="pi pi-user" rounded text raised severity="info" aria-label="User" onClick={() => MyAccount()} />
                </div>
                    <div className="grid h-100 mt-5 mb-5">
                        <div className="col-12 flex justify-center">
                            <div className="p-3 flex justify-center border">
                                <Typewriter text={customerIsNotWell} />
                            </div>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="col-12 flex justify-center items-center">
                        <input
                        className="px-4 py-2 rounded-lg border-2 border-green-600"
                        type="text"
                        placeholder="Diseases"
                        />
                        </div>
                            
                    </div>
                    <div className="grid mt-5 mb-5">
                        <div className="col-12 flex justify-center items-center">
                            <ButtonComponent label="Submit" type="turquoise" onClick={() => Submit()} />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SymptomSelection;
