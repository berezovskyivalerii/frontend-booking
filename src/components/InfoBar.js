import React from 'react'
import "./InfoBar.css"

export function InfoBar(props) {
    return (
        <div className="infobar-container">
            <div className="infobar-content">
                <img src={props.url} alt={props.name} />
                <p>{props.text}</p>
            </div>
        </div>
    )
}
