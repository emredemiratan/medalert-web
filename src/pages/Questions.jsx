import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { toast } from "react-hot-toast";

import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";

import ButtonComponent from "../components/ButtonComponent";
import { setQuestions } from "../store/slices/questionSlice";
import { setResponse } from "../store/slices/responseSlice";
import { switchLoadingStatus } from "../store/slices/globalSlice";

const Questions = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { profile } = useSelector((state) => state.user);
    const { symptoms } = useSelector((state) => state.symptom);

    const [order, setOrder] = useState(0);

    const [firstQuestion, setFirstQuestion] = useState("");
    const [secondQuestion, setSecondQuestion] = useState("");
    const [thirdQuestion, setThirdQuestion] = useState("");

    const questions = [
        {
            id: 0,
            text: "How long have you been experiencing these symptoms? Answer in days.",
            answer: "",
        },
        {
            id: 1,
            text: "Have you noticed any specific triggers or patterns related to your symptoms?",
            answer: "",
        },
        {
            id: 2,
            text: "Have you sought medical attention for these symptoms before?",
            answer: "",
        },
    ];

    const handleNext = async () => {
        if (order + 1 === questions.length) {
            dispatch(switchLoadingStatus(true));
            let newArr = [];
            for (let i = 0; i < questions.length; i++) {
                if (i === 0) {
                    let newObj = {
                        id: i,
                        question: questions[i].text,
                        answer: firstQuestion,
                    };
                    newArr.push(newObj);
                }
                if (i === 1) {
                    let newObj = {
                        id: i,
                        question: questions[i].text,
                        answer: secondQuestion,
                    };
                    newArr.push(newObj);
                }
                if (i === 2) {
                    let newObj = {
                        id: i,
                        question: questions[i].text,
                        answer: thirdQuestion,
                    };
                    newArr.push(newObj);
                }
            }
            console.log(newArr);
            dispatch(setQuestions(newArr));

            let selectedSymptoms = Array.from(symptoms);
            let arrToSend = [];
            selectedSymptoms.forEach((symptom) => {
                arrToSend.push(symptom.name);
            });
            const toSend = {
                profile_id: profile.id,
                symptoms: arrToSend,
            };

            axios
                .post("http://3.78.3.122:8000/ai/assessment/", toSend)
                .then((res) => {
                    console.log(res);
                    dispatch(setResponse(res.data));
                    dispatch(switchLoadingStatus(false));
                    navigate("/summary");
                })
                .catch((err) => {
                    console.log(err);
                    toast.error(err.message);
                });
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
        <div className="h-full w-full blue-bg flex">
            <div className="flex flex-col items-center justify-center h-full w-full">
                <div className="flex flex-col border-2 border-gray-400 gray-bg p-3 gap-2 rounded-lg custom-card bg-white opacity-90">
                    <div className="col-12 mb-3 flex justify-start items-center">
                        <button onClick={() => handleGoBack()}>
                            <i className="pi pi-arrow-left mr-2" />
                            <span>Previous Question</span>
                        </button>
                    </div>
                    <div
                        className="grid h-full justify-center items-center"
                        key={questions[order].id}
                    >
                        <div className="col-12 mb-3">
                            <span>{questions[order].text}</span>
                        </div>
                        <div className="col-12 mb-5 flex items-center justify-center">
                            {order === 0 && (
                                <div className="flex flex-col">
                                    <InputText
                                        value={firstQuestion}
                                        onChange={(e) => setFirstQuestion(e.target.value)}
                                    />
                                    <Slider
                                        value={firstQuestion}
                                        onChange={(e) => setFirstQuestion(e.value)}
                                        max={30}
                                    />
                                </div>
                            )}
                            {order === 1 && (
                                <div className="flex w-full flex-col">
                                    <div className="grid mb-3">
                                        <div className="col-12 flex justify-start">
                                            <InputText
                                                className="px-4 py-2 w-full rounded-lg border-2 border-green-600"
                                                type="text"
                                                placeholder="If yes, please enter"
                                                value={secondQuestion}
                                                onChange={(e) => setSecondQuestion(e.target.value)}
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
                            {order === 2 && (
                                <div className="flex w-full flex-col">
                                    <div className="grid mb-3">
                                        <div className="col-12 flex justify-start">
                                            <InputText
                                                className="px-4 py-2 w-full rounded-lg border-2 border-green-600"
                                                type="text"
                                                placeholder="If yes, please enter"
                                                value={thirdQuestion}
                                                onChange={(e) => setThirdQuestion(e.target.value)}
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
                            {order === 0 && (
                                <ButtonComponent
                                    type="turquoise"
                                    label="Submit"
                                    onClick={() => handleNext()}
                                    className="ml-5"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;
