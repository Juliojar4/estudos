import React from "react"
import "./index.css"


const Input = ({name, label}) => {

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input name={name} className="default-input"/>
        </>
    )
}

export default Input