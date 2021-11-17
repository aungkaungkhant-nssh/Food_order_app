import React from 'react'
import classes from './Input.module.css'
function Input(props) {
    return (
        <div className={classes.input}>
            <label htmlFor="">{props.label}</label>
            <input type={props.input.type}  {...props.input}/>
        </div>
    )
}

export default Input
