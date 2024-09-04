import React from "react"
import "./index.scss"


const Input = ({name, label, value}) => {

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input name={name} value={value} className="default-input"/>
        </>
    )
}

export default Input