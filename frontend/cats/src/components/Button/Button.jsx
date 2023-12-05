import './Button.css'

import React from 'react'

const Button = (props) => {
    const handleClick = (e) => {
        e.preventDefault()
        props.onClick()
    }
    return (
        <button onClick ={handleClick} type={props.type} className='btn'>
            {props.children}
        </button>
    )
}
export default Button