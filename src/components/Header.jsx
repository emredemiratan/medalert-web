import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.user);

    function MyAccount() {
        navigate("/myaccount");
    }

    return (
        <div className="w-full flex justify-between p-2 bg-white">
            <div className="flex items-center justify-center">
                <button className="flex items-center justify-center">
                    <i className="pi pi-arrow-left mr-2" />
                    <span>Home Page</span>
                </button>
            </div>
            <button
                onClick={() => MyAccount()}
                className="flex items-center p-2 border border-black rounded-2xl"
            >
                <span className="mx-2">{user.name}</span>
                <img
                    src={require("../assets/user-icon.png")}
                    alt={user.name}
                    className="mini-icon mx-2 my-1"
                />
            </button>
        </div>
    );
};

export default Header;
