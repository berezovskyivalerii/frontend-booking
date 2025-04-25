import React from "react";
import "./SimplifierInfoBar.css";

export function SimplifierInfoBar(props){
    return (
        <div className="smp-infobar-container">
            <div className="smp-infobar-content">
                <img src={props.url} alt={props.name} />
                <p>{props.text}</p>
            </div>
        </div>
    )
}