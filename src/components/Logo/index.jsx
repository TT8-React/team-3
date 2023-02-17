import React from 'react'
import { Body1 } from '../Typography'
import Style from './style'

const Logo = ({ className = "" }) => {
    return (
        <Style className={className}>
            <Body1
                transform="uppercase"
                align="center"
                weight="700"
            >Logo here</Body1>
        </Style>
    )
}

export default Logo