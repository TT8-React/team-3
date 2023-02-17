import React from 'react'
import CustomLink from '../../../../components/CustomLink'
import { H5 } from '../../../../components/Typography'
import Style from './style'

const ReportLink = ({ name, to, onClick }) => {
    if (onClick) {
        return (
            <Style onClick={onClick}>
                <div className="rectangle" />
                <H5>{name}</H5>
            </Style>
        )
    }

    return (
        <CustomLink to={to}>
            <Style>
                <div className="rectangle" />
                <H5>{name}</H5>
            </Style>
        </CustomLink>
    )
}

export default ReportLink