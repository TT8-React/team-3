import React from 'react'
import Button from '../../components/Button'
import Divider from '../../components/Divider'
import LabelInput from '../../components/LabelInput'
import dashboardLayout from '../../layouts/DashboardPages'
import Style from './style'

const ProfileDetails = () => {
    return (
        <Style>
            <div className="back_container">
                <Button>
                    View details
                </Button>
            </div>
            <Divider />
            <form>
                <div className="inputs__grid">
                    <LabelInput label="Name" placeholder="Enter name" />
                    <LabelInput label="Test1" placeholder="Enter Test1" />
                    <LabelInput label="Test2" placeholder="Enter Test2" />

                    <LabelInput label="Test3" placeholder="Enter Test3" />
                    <LabelInput label="Test4" placeholder="Enter Test4" />
                    <LabelInput label="Test5" placeholder="Enter Test5" />

                    <LabelInput label="Test6" placeholder="Enter Test6" />
                    <LabelInput label="Test7" placeholder="Enter Test7" />
                    <LabelInput label="Test8" placeholder="Enter Test8" />
                </div>

                <div className="submit_container">
                    <Button>
                        Submit
                    </Button>
                </div>
            </form>
        </Style>
    )
}

export default dashboardLayout(ProfileDetails)