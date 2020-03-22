import React from 'react'
import './Modal.css';
import BackDrop from '../BackDrop/BackDrop'

const Modal = props => {
        return (
        <div>
            <BackDrop show={props.show} clicked={props.modalClosed} />
            <div
                className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                }}
            >
                {props.children}
            </div>
        </div>
        )
    
}

export default React.memo(Modal,
    (prevProps, nextProps) =>
        nextProps.show === prevProps.show && nextProps.children === prevProps.children);