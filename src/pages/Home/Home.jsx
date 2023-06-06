import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import "./home.css";
import Typewriter from "../../components/Typewriter";
import ButtonComponent from "../../components/ButtonComponent";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { profile } = useSelector((state) => state.user);

    const texts = {
        greetings: `Hello ${profile.name}, how are you feeling today?`,
        customerIsWell: "I'm glad to hear that. Have a nice day.",
    };

    function notFeelingWell() {
        navigate("/symptoms");
    }

    useEffect(() => {
        //
    }, []);

    return (
        <form className="h-full w-full blue-bg">
            <div className="flex flex-col items-center justify-center h-full w-full">
                <div className="flex flex-col border-2 border-gray-400 p-4 gap-2 rounded-lg gray-bg opacity-90 custom-card">
                    <div className="grid h-full mt-5 mb-5">
                        <div className="col-12 flex justify-center">
                            <div className="p-3 flex justify-center border">
                                <Typewriter text={texts.greetings} />
                            </div>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="col-12 flex justify-center items-center">
                            <ButtonComponent
                                label="I'm not feeling well."
                                type="lightblue"
                                onClick={() => notFeelingWell()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Home;
