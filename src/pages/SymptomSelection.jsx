import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Typewriter from "../components/Typewriter";
import DropdownComponent from "../components/DropdownComponent";
import ButtonComponent from "../components/ButtonComponent";

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

    return (
        <>
            <div className="grid h-100 mt-5 mb-5">
                <div className="col-12 flex justify-center">
                    <div className="p-3 flex justify-center border">
                        <Typewriter text={customerIsNotWell} />
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="col-12 flex justify-center items-center">
                    <DropdownComponent
                        value={selectedDiseases}
                        onChange={(e) => setSelectedDiseases(e.value)}
                        options={diseases}
                        optionLabel="name"
                        placeholder="Select Disease(s)"
                    />
                </div>
            </div>
            <div className="grid mt-5 mb-5">
                <div className="col-12 flex justify-center items-center">
                    <ButtonComponent label="Submit" type="turquoise" onClick={() => Submit()} />
                </div>
            </div>
        </>
    );
};

export default SymptomSelection;
