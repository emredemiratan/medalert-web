import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Typewriter from "../components/Typewriter";
import DropdownComponent from "../components/DropdownComponent";
import ButtonComponent from "../components/ButtonComponent";
import axios from "axios";
import { useEffect } from "react";
import { switchLoadingStatus } from "../store/slices/globalSlice";

const SymptomSelection = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [diseases, setDiseases] = useState([]);

    const [selectedDiseases, setSelectedDiseases] = useState([]);

    const customerIsNotWell = "I'm sorry to hear that. Could you tell me what's wrong with you?";

    useEffect(() => {
        dispatch(switchLoadingStatus(true));
        axios
            .get("http://3.78.3.122:8000/symptoms/")
            .then((res) => {
                console.log(res.data);
                setDiseases(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                dispatch(switchLoadingStatus(false));
            });
    }, []);

    function Submit() {
        navigate("/questions");
    }

    return (
        <form className="h-full w-full blue-bg flex">
            <div className="flex flex-col items-center justify-center h-full w-full">
                <div className="flex flex-col border-2 border-gray-400 p-3 gap-2 rounded-lg custom-card gray-bg bg-white opacity-90">
                    <div className="grid h-full mt-5 mb-5">
                        <div className="col-12 flex justify-center">
                            <div className="p-3  border bg-white rounded">
                                <Typewriter text={customerIsNotWell} />
                            </div>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="flex flex-row w-full gap-2 items-center">
                            <DropdownComponent
                                value={selectedDiseases}
                                onChange={(e) => setSelectedDiseases(e.value)}
                                options={diseases}
                                optionLabel="name"
                                placeholder="Select Disease(s)"
                                className="w-full"
                            />
                        </div>
                    </div>
                    <div className="grid mt-5 mb-5">
                        <div className="col-12 flex justify-center items-center">
                            <ButtonComponent
                                label="Submit"
                                type="lightblue"
                                onClick={() => Submit()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SymptomSelection;
