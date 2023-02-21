import React from 'react'
import { NavLink } from 'react-router-dom'
import Style from './style'
const CustomLink = ({ to, children, color }) => {
    return (
        <Style color={color}>
            <NavLink to={to}>{children}</NavLink>
        </Style>
    )
}

export default CustomLink