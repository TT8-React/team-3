import React from 'react'
import { Link } from 'react-router-dom'
const CustomLink = ({ to }) => {
    return (
        <div>
            <Link to={to} />
        </div>
    )
}

export default CustomLink