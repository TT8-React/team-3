import React from 'react'
import { PATHS } from '../../routes'
import CustomLink from '../CustomLink'
import Logo from '../Logo'
import SidebarCollapse from '../SidebarCollapse'
import SidebarItem from './SidebarItem'
import Style from './style'

const Sidebar = () => {
    return (
        <Style>
            <div className="logo_container">
                <Logo />
            </div>
            <SidebarItem linkTo={PATHS.DASHBOARD}>Dashboard</SidebarItem>
            <SidebarItem linkTo={PATHS.COMPANY_DETAILS}>Company details</SidebarItem>
            <SidebarCollapse head={<CustomLink to={PATHS.REPORT}>Report</CustomLink>}>
                <SidebarItem inCollapse linkTo={PATHS.REPORT_VIEW_ALL_REPORTS}>My Report</SidebarItem>
            </SidebarCollapse>
            <SidebarItem linkTo={PATHS.DATA_UPLOAD}>Data upload</SidebarItem>
            <SidebarCollapse head="Analytics">
                <SidebarItem inCollapse linkTo={PATHS.ENVIRONMENT}>Environment</SidebarItem>
                <SidebarItem inCollapse linkTo={PATHS.SOCIAL}>Social</SidebarItem>
                <SidebarItem inCollapse linkTo={PATHS.GOVERNANCE}>Governance</SidebarItem>
            </SidebarCollapse>
        </Style>
    )
}

export default Sidebar