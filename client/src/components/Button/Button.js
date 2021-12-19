import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <button type="button" className="btn btn-warning btn-lg">{props.children}</button>
    )
}

export default Button
