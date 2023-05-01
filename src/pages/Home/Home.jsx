import React from "react";

import { useDispatch, useSelector } from "react-redux";

import "./home.css";

import Typewriter from "../../components/Typewriter";
import ButtonComponent from "../../components/ButtonComponent";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.user);

    const texts = {
        greetings: `Hello ${user.name}, how are you feeling today?`,
        customerIsWell: "I'm glad to hear that. Have a nice day.",
        responseGreen: "You might have nothing to worry about. Here are your possible diseases:",
        responseYellow: "Here are your possible diseases:",
        responseOrange: "Here are your possible diseases:",
        responseRed: "Here are your possible diseases:",
    };

    function notFeelingWell() {
        navigate("/symptoms");
    }

    return (
        <>
            <div className="grid h-100 mt-5 mb-5">
                <div className="col-12 flex justify-center">
                    <div className="p-3 flex justify-center border">
                        <Typewriter text={texts.greetings} />
                    </div>
                    {/* <Typewriter text={texts.customerIsWell} />
                    <Typewriter text={texts.responseGreen} />
                    <Typewriter text={texts.responseYellow} />
                    <Typewriter text={texts.responseOrange} />
                    <Typewriter text={texts.responseRed} /> */}
                </div>
            </div>
            <div className="grid">
                <div className="col-12 flex justify-center items-center">
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
