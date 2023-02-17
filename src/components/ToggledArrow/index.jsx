import React from 'react'

// icons
import arrowDown from '../../assets/images/icons/arrowDown.png';
import arrowRight from '../../assets/images/icons/arrowRight.png';
const ToggledArrow = ({ isDown }) => {
    return (
        <span>
            <img src={isDown ? arrowDown : arrowRight} alt="arrow" />
        </span>
    )
}

export default ToggledArrow