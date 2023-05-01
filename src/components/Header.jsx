import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const { user } = useSelector((state) => state.user);
    return (
        <div className="w-full flex justify-end p-2 sticky top-0 bg-slate-300 opacity-50">
            <div className="flex items-center p-2 border border-black rounded-2xl">
                <span className="mx-2">{user.name}</span>
                <img
                    src={require("../assets/user-icon.png")}
                    alt={user.name}
                    className="mini-icon mx-2 my-1"
                />
            </div>
        </div>
    );
};

export default Header;
