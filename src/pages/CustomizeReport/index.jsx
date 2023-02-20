import React from 'react'
import Button from '../../components/Button'
import CustomLink from '../../components/CustomLink'
import TransferList from '../../components/TransferList'
// layout
import dashboardLayout from '../../layouts/DashboardPages'
import { PATHS } from '../../routes'
import Style from './style'

const CustomizeReport = () => {
    return (
        <Style>
            <div className="back_container">
                <CustomLink to={PATHS.REPORT}>
                    <Button>
                        Back
                    </Button>
                </CustomLink>
            </div>
            <TransferList />
        </Style>
    )
}

export default dashboardLayout(CustomizeReport)