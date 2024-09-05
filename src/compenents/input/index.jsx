import React from "react";
import "./index.scss";

const Input = ({ name, label, value, readonly }) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                value={value}
                className="default-input"
                readOnly={readonly} 
            />
        </>
    );
};

export default Input;
