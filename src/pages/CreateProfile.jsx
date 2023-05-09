import React, { useState } from "react";

import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import DropdownComponent from "../components/DropdownComponent";
import ButtonComponent from "../components/ButtonComponent";

const CreateProfile = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.global);
    const navigate = useNavigate();
    const [date, setDate] = useState();
    const [selectedGender, setSelectedGender] = useState(null);
    const genders = [
        { name: "Male", code: "m" },
        { name: "Female", code: "fm" },
    ];

    
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

        const medications = [
            {
                id: 0,
                name: "Cough Syrup",
            },
            {
                id: 1,
                name: "Aspirin",
            },
            {
                id: 2,
                name: "Blood Pressure Medicine",
            },
            {
                id: 3,
                name: "Insulin",
            },
            {
                id: 4,
                name: "Blood Thinner",
            },
        ];
        const [selectedMedications, setSelectedMedications] = useState([]);
        
        function CreateProfile() {
            navigate("/profiles");
        }

    
    
    

    return (
        <form className="flex md:flex-row flex-col w-screen h-screen">
            <div className="h-full md:w-1/2 w-full bg-blue-400 relative">
                <img src={require("../assets/bg.png")} alt="" className="h-full w-full absolute" />
                <div className="flex flex-col h-full w-full absolute items-center justify-center">
                    <img
                        src={require("../assets/medalert-logo.png")}
                        alt=""
                        className="w-[200px] h-[200px]"
                    />
                </div>
            </div>
            <div className="flex flex-col md:w-1/2 w-full h-full items-center justify-center overflow-auto">
                <div className="flex flex-col w-1/2 border-2 border-gray-400 p-4 gap-1 rounded-lg overflow-y">
                    <div className="flex items-center justify-center">
                        <img
                            src={require("../assets/medalert-logo.png")}
                            alt=""
                            className="w-[200px] h-[200px] -m-4 "
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Name</span>
                        <input
                            className="px-4 py-2 rounded-lg border-2 border-green-600"
                            type="name"
                            placeholder="Please Enter Your Name"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Surname</span>
                        <input
                            className="px-4 py-2 rounded-lg border-2 border-green-600"
                            type="surname"
                            placeholder="Please Enter Your Surname"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Phone Number</span>
                        <input
                            className="px-4 py-2 rounded-lg border-2 border-green-600"
                            type="phone"
                            placeholder="Please Enter Your Phone Number"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Email</span>
                        <input
                            className="px-4 py-2 rounded-lg border-2 border-green-600"
                            type="email"
                            placeholder="Please Enter Your Email"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Date Of Birth</span>
                        <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
                    </div>
                    <span>Gender</span>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-row gap-2 items-center">
                            <Dropdown
                                value={selectedGender}
                                onChange={(e) => setSelectedGender(e.value)}
                                options={genders}
                                optionLabel="name"
                                placeholder="Gender"
                                className="w-full md:w-14rem"
                            />
                        </div>
                    </div>
                    <span>Extra Diseases</span>
                    <div className="grid">
                <div className="flex flex-row gap-2 items-center">
                    <DropdownComponent
                        value={selectedDiseases}
                        onChange={(e) => setSelectedDiseases(e.value)}
                        options={diseases}
                        optionLabel="name"
                        placeholder="Select Disease(s)"
                    />
                </div>
            </div>
            <span>Regularly Used Medications</span>
                    <div className="grid">
                <div className="flex flex-row gap-2 items-center">
                    <DropdownComponent
                        value={selectedMedications}
                        onChange={(e) => setSelectedMedications(e.value)}
                        options={medications}
                        optionLabel="name"
                        placeholder="Select Medication(s)"
                    />
                </div>
            </div>
                    <div className="flex flex-col gap-3">
                    <ButtonComponent label="Create Profile" type="turquoise" onClick={() => CreateProfile()}/>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CreateProfile;
