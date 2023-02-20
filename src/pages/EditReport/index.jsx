import React from 'react'
import Button from '../../components/Button'
import CustomLink from '../../components/CustomLink'
import Divider from '../../components/Divider'
import LabelInput from '../../components/LabelInput'
import dashboardLayout from '../../layouts/DashboardPages'
import { PATHS } from '../../routes'
import Style from './style'

const EditReport = () => {
    return (
        <Style>
            <div className="back_container">
                <CustomLink to={PATHS.REPORT_VIEW_ALL_REPORTS}>
                    <Button>
                        View report
                    </Button>
                </CustomLink>
            </div>
            <Divider />
            <div className="inputs__grid">
                <LabelInput label="Name" placeholder="Enter name"/>
                <LabelInput label="Report1" placeholder="Enter Report1"/>
                <LabelInput label="Report2" placeholder="Enter Report2"/>

                <LabelInput label="Report3" placeholder="Enter Report3"/>
                <LabelInput label="Report4" placeholder="Enter Report4"/>
                <LabelInput label="Report5" placeholder="Enter Report5"/>

                <LabelInput label="Report6" placeholder="Enter Report6"/>
                <LabelInput label="Report7" placeholder="Enter Report7"/>
                <LabelInput label="Report8" placeholder="Enter Report8"/>
            </div>
        </Style>
    )
}

export default dashboardLayout(EditReport)