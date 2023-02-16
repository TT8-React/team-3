import React from 'react'
import { Link } from 'react-router-dom'
import Style from './style'
const CustomLink = ({ to, children, color }) => {
    return (
        <Style color={color}>
            <Link to={to}>{children}</Link>
        </Style>
    )
}

export default CustomLink