import React from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom';

const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onClick}></div>
}
const ModalOverlay=(props)=>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}
function Modal(props) {
    const overlays=document.getElementById("overlays")
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>,overlays)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,overlays)}
        </>
    )
}

export default Modal
