import React from "react"

import "./index.css"

const Button = ({placehouder,onClick}) => {
    return (
        <>
        <div>
            <button onClick={onClick} className="button">{placehouder}</button>
        </div>
        </>
    )
}

export default Button;