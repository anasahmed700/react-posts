/* eslint-disable react/prop-types */
import classes from './Modal.module.css'

function Modal({ children, onModalClose }) {
    return (
        <>
            <div className={classes.backdrop} onClick={onModalClose} />
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    )
}

export default Modal