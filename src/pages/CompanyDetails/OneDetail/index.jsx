import React from 'react'
import { Body2, H5 } from '../../../components/Typography'

const OneDetail = ({ title, desc, className = "" }) => {
    return (
        <div className={className}>
            <Body2>{title}</Body2>
            <H5 weight={600}>{desc}</H5>
        </div>
    )
}

export default OneDetail