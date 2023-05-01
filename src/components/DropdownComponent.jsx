import React from "react";

import { MultiSelect } from "primereact/multiselect";

import "./CustomComponents.css";

const DropdownComponent = (props) => {
    return (
        <>
            {props.label ? (
                <span className="p-float-label">
                    <MultiSelect
                        inputId={props.label}
                        value={props.value}
                        onChange={props.onChange ? props.onChange : () => {}}
                        options={props.options}
                        optionLabel={props.optionLabel}
                        placeholder={props.placeholder}
                        filter
                        showClear
                        display="chip"
                        maxSelectedLabels={5}
                        className={`${props.className} py-0`}
                    />
                    <label htmlFor={props.label}>{props.label}</label>
                </span>
            ) : (
                <MultiSelect
                    value={props.value}
                    onChange={props.onChange ? props.onChange : () => {}}
                    options={props.options}
                    optionLabel={props.optionLabel}
                    placeholder={props.placeholder}
                    filter
                    showClear
                    display="chip"
                    maxSelectedLabels={5}
                    className={`${props.className} py-0`}
                />
            )}
        </>
    );
};

export default DropdownComponent;
