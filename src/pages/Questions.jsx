import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RadioButton } from "primereact/radiobutton";

import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";

import ButtonComponent from "../components/ButtonComponent";

const Questions = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading } = useSelector((state) => state.global);

    const [order, setOrder] = useState(0);
    const [slider, setSlider] = useState(0);

    const questions = [
        {
            id: 0,
            text: "How long have you been experiencing these symptoms? Answer in days.",
            value: false,
            response: "",
            inputType: "SLIDER",
            
        },
        {
            id: 1,
            text: "Have you noticed any specific triggers or patterns related to your symptoms?",
            value: false,
            response: "",
            inputType: "BUTTON",
        },
        {
            id: 2,
            text: "Have you sought medical attention for these symptoms before?",
            value: false,
            response: "",
            inputType: "BUTTON",
        },
    ];

    const handleNext = () => {
        if (order + 1 === questions.length) {
            // TODO: post these questions to api
            navigate("/summary");
        } else {
            setOrder(order + 1);
        }
    };
    const handleGoBack = () => {
        if (order === 0) {
            navigate("/symptoms");
        } else {
            setOrder(order - 1);
        }
    };

    return (
        <form className="h-full w-full blue-bg flex">
            <div className="flex flex-col items-center justify-center h-full w-full">
                <div className="flex flex-col border-2 border-gray-400 p-3 gap-2 rounded-lg custom-card bg-white opacity-90">
                    <div
                        className="grid h-full justify-center items-center"
                        key={questions[order].id}
                    >
                        <div className="col-12 mb-3 flex justify-start items-center">
                            <button onClick={() => handleGoBack()}>
                                <i className="pi pi-arrow-left mr-2" />
                                <span>Previous Question</span>
                            </button>
                        </div>
                        <div className="col-12 mb-3">
                            <span>{questions[order].text}</span>
                        </div>
                        <div className="col-12 mb-5 flex items-center justify-center">
                            {questions[order].inputType === "SLIDER" ? (
                                <div className="flex flex-col">
                                    <InputText
                                        value={slider}
                                        onChange={(e) => setSlider(e.target.value)}
                                    />
                                    <Slider
                                        value={slider}
                                        onChange={(e) => setSlider(e.value)}
                                        max={30}
                                    />
                                </div>
                            ) : (
                                <div className="flex w-full flex-col">
                                    <div className="grid mb-3">
                                        <div className="col-12 flex justify-start">
                                            <input
                                                type="text"
                                                className="border p-2 px-3 w-full"
                                                value={questions[order].response}
                                                placeholder="If yes, please enter"
                                                onChange={() => (e) =>
                                                    (questions[order].response = e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid mb-3">
                                        <div className="col-12 flex justify-between">
                                            <ButtonComponent
                                                label="No"
                                                icon="pi-times"
                                                onClick={() => handleNext()}
                                                type="red"
                                            />
                                            <ButtonComponent
                                                label="Submit"
                                                icon="pi-check"
                                                onClick={() => handleNext()}
                                                type="turquoise"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-12 mb-3 flex items-center justify-center">
                            <ButtonComponent
                                className="text-white"
                                label={
                                    questions[order].inputType === "SLIDER"
                                        ? "Next Question"
                                        : "I don't have an answer"
                                }
                                onClick={() => handleNext()}
                                type="lightblue"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Questions;
