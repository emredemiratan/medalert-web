import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const { profile } = useSelector((state) => state.user);

    function MyAccount() {
        navigate("/myaccount");
    }

    return (
        <div className="w-full flex justify-end p-2 bg-white`">
            <button
                onClick={() => MyAccount()}
                className="flex items-center p-2 border border-black rounded-2xl"
            >
                <span className="mx-2">{profile.name}</span>
                <img
                    src={require("../assets/user-icon.png")}
                    alt={profile.name}
                    className="mini-icon mx-2 my-1"
                />
            </button>
        </div>
    );
};

export default Header;
