import React from 'react'
import "./PurpleButton.css"

export function PurpleButton(props) {
    return (
        <button className="purple-button">
            {props.text}
        </button>
    )
}
