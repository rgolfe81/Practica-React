import React from "react";
import "./InputText.css";

export const InputText = ({
    type,
    placeholder,
    name,
    changeFunction,
    validateFunction
}) => {
    return (
    <>
    <input className="inputTextDesign"
    type={type}
    placeholder={placeholder}
    name={name}
    changeFunction={changeFunction}
    validateFunction={validateFunction}
    />
    </>
    )
};
