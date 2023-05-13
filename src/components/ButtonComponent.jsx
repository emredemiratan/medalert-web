import React from "react";

import { Button } from "primereact/button";

import "./CustomComponents.css";

const ButtonComponent = (props) => {
    return (
        <Button
            id={props.id}
            onClick={props.onClick ? props.onClick : () => {}}
            className={`${props.type}-button ${props.className}`}
            disabled={props.disabled}
        >
            {props.label && <span className="label">{props.label}</span>}
            {props.icon && <i className={`pi ${props.icon} ml-3`} />}
        </Button>
    );
};

export default ButtonComponent;
