import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const user = useSelector((state) => state.user);
    return (
        <div className="w-100 d-flex align-items-center justify-content-end p-2 position-sticky sticky-top">
            <span>{user.name}</span>
            <img
                src={require("../assets/user-icon.png")}
                alt={user.name}
                className="mini-icon mx-2 my-1"
            />
        </div>
    );
};

export default Header;
