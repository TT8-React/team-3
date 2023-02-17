import React from 'react';
import { createPortal } from 'react-dom';

import { H4 } from '../Typography';
import Style from './style'

// icons
import closeImage from '../../assets/images/icons/close.png';
const Modal = ({ title, children, isOpen, close }) => {
    if (!isOpen) {
        return <></>
    }

    return createPortal(<Style>
        <div className="modal_closer" onClick={close} />
        <div className="overlay">
            <div className="modal">
                <div className="head">
                    <H4>{title}</H4>
                    <button className="close" onClick={close} >
                        <img src={closeImage} alt="close button" />
                    </button>
                </div>
                <div className="body">
                    {children}
                </div>
            </div>
        </div>
        HELLO WORLD
    </Style>, document.getElementById("modal"))
}

export default Modal