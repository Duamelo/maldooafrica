import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

function Button(props) {
    return (
        <Link to={props.link} className="btn btn-warning btn-lg">{props.children}</Link>
    )
}

Button.defaultProps = {
    link: ""
  }
export default Button
