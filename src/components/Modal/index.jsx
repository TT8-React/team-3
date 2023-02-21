import React from 'react';
import { createPortal } from 'react-dom';

import { H4 } from '../Typography';
import Style from './style'

// icons
import closeImage from '../../assets/images/icons/close.png';
import LabelInput from '../LabelInput';
import CustomLink from '../CustomLink';
import Button from '../Button';
import { PATHS } from '../../routes';
const Modal = ({ title, isOpen, close }) => {
    return createPortal(<Style isOpen={isOpen}>
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
                    <div className="modal_content">
                        <div className="modal_inputs">
                            <LabelInput label="From" type="date" />
                            <LabelInput label="to" type="date" />
                        </div>

                        <div className="continue_btn">
                            <CustomLink to={PATHS.REPORT_CUSTOMIZE}>
                                <Button>
                                    Continue for next step
                                </Button>
                            </CustomLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Style>, document.getElementById("modal"))
}

export default Modal