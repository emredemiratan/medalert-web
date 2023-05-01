import React from "react";

const Loading = () => {
    return (
        <div className="loading-container">
            <img src={require("../assets/load-icon.png")} alt="loading" className="loading-image" />
        </div>
    );
};

export default Loading;
