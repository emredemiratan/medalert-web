import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import "./home.css";
import { Button } from "primereact/button";
import Typewriter from "../../components/Typewriter";
import ButtonComponent from "../../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.user);

    const [products, setProducts] = useState([]);

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
    function MyAccount() {
        navigate("/myaccount");
    }

    useEffect(() => {
        console.log("page rendered");
        axios
            .get("https://dummyjson.com/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("done");
            });

        axios
            .post("https://dummyjson.com/products", { title: "zort" })
            .then((res) => {
                //
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("done");
            });
    }, []);

    return (
        <form className="h-full w-full blue-bg">
            <div className="flex flex-col items-center justify-center h-full w-full">
                <div className="flex flex-col border-2 border-gray-400 p-4 gap-2 rounded-lg bg-white opacity-90 custom-card">
                    {/* <div className="flex items-center justify-end">
                        <Button
                            icon="pi pi-user"
                            rounded
                            text
                            raised
                            severity="info"
                            aria-label="User"
                            onClick={() => MyAccount()}
                        />
                    </div> */}
                    <div className="grid h-full mt-5 mb-5">
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
                    <div className="grid">
                        <div className="col-12">
                            {products.map((product) => {
                                return <span key={product.id}>{product.title} </span>;
                            })}
                            {/* {JSON.stringify(products)} */}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Home;
