import React from "react";

const Square = (props) => {
    return (
        <div
            onClick = {props.onclick}
            style={{
                border: "2px solid", height: "100px", width: "100%", display: "flex",
                justifyContent: "center", alignItems: "center"
            }}
            className="square">
            <h6>{props.value}</h6>
        </div>
    )
}

export default Square