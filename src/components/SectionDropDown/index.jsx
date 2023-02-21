import React, { useState } from 'react'
import ToggledArrow from '../ToggledArrow';
import { Body1 } from '../Typography';
import Style from './style'

const SectionDropDown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropDown = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <Style>
            <div className="toggle_drop_down" onClick={toggleDropDown}>
                {title}
                <ToggledArrow isDown={isOpen} />
            </div>
            <div className={`drop_down_content ${isOpen ? "open" : ""}`}>
                {items.map((item, index) => <div key={index} className="drop_down_item">
                    <Body1>{item}</Body1>
                </div>)}

            </div>
        </Style >
    )
}

export default SectionDropDown