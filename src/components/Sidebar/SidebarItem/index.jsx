import React from 'react'
import CustomLink from '../../CustomLink'
import { H4 } from '../../Typography'
import Style from './style'

const SidebarItem = ({ children, linkTo, inCollapse }) => {
    return (
        <Style inCollapse={inCollapse}>
            <H4 weight={500}>
                <CustomLink to={linkTo}>{children}</CustomLink>
            </H4>
        </Style>
    )
}

export default SidebarItem