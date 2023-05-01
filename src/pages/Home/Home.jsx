import React from "react";

import { useDispatch, useSelector } from "react-redux";

import "./home.css";

import Typewriter from "../../components/Typewriter";
import ButtonComponent from "../../components/ButtonComponent";

const Home = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);

    const texts = {
        greetings: `Hello ${user.name}, how are you feeling today?`,
        customerIsWell: "I'm glad to hear that. Have a nice day.",
        customerIsNotWell: "I'm sorry to hear that. Could you tell me what's wrong with you?",
        responseGreen: "You might have nothing to worry about. Here are your possible diseases:",
        responseYellow: "Here are your possible diseases:",
        responseOrange: "Here are your possible diseases:",
        responseRed: "Here are your possible diseases:",
    };

    function notFeelingWell() {
        //
    }

    return (
        <>
            <div className="row h-100 mt-5 mb-5">
                <div className="col d-flex justify-content-center">
                    <div className="p-3 d-flex justify-content-center border">
                        <Typewriter text={texts.greetings} />
                    </div>
                    {/* <Typewriter text={texts.customerIsWell} />
                    <Typewriter text={texts.customerIsNotWell} />
                    <Typewriter text={texts.responseGreen} />
                    <Typewriter text={texts.responseYellow} />
                    <Typewriter text={texts.responseOrange} />
                    <Typewriter text={texts.responseRed} /> */}
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <ButtonComponent
                        label="I'm not feeling well."
                        type="blue"
                        onClick={() => notFeelingWell()}
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
