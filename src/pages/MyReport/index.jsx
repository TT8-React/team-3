import React from 'react'
import Button from '../../components/Button'
import CustomLink from '../../components/CustomLink'
// components
import Table from '../../components/Table'
// layout
import dashboardLayout from '../../layouts/DashboardPages'
import { PATHS } from '../../routes'
import Style from './style'

const MyReport = () => {
    return (
        <Style>
            <div className="back_container">
                <CustomLink to={PATHS.REPORT}>
                    <Button>
                        Back
                    </Button>
                </CustomLink>
            </div>
            <Table />
        </Style>
    )
}

export default dashboardLayout(MyReport)