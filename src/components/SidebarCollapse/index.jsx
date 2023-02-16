import React, { useState } from 'react'
import Style from './style'
// components
import ToggledArrow from '../ToggledArrow';
import { H4 } from '../Typography';

const SidebarCollapse = ({ head, children }) => {
    const [isCollapseOpen, setIsCollapseOpen] = useState(false);

    const toggleCollapse = () => {
        setIsCollapseOpen(prev => !prev)
    }

    return (
        <Style isCollapseOpen={isCollapseOpen}>
            <div className="head" onClick={toggleCollapse}>
                <H4 weight={isCollapseOpen ? 600 : 500}>{head}</H4> <ToggledArrow isDown={isCollapseOpen} />
            </div>
            <div className="body">
                {children}
            </div>
        </Style>
    )
}

export default SidebarCollapse