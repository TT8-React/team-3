import React from 'react'
import ReportTable from '../../../../components/ReportTable'
import SectionDropDown from '../../../../components/SectionDropDown'
import Style from './style'

const Tab1 = () => {
    console.log("RUN")
    return (
        <Style>
            <div className="grid">
                <div>
                    <SectionDropDown title="Section A" items={[
                        "Company Details",
                        "Products/Services",
                        "Operations",
                        "Employees",
                        "Employees",
                        "Holding, Subsidiary and Associate ...",
                        "CSR File",
                        "Transparency and Disclosures ...",
                    ]} />
                    <SectionDropDown title="Section B" items={[
                        "Company Details",
                        "Products/Services",
                        "Operations",
                        "Employees",
                        "Employees",
                        "Holding, Subsidiary and Associate ...",
                        "CSR File",
                        "Transparency and Disclosures ...",
                    ]} />
                    <SectionDropDown title="Section C" items={[
                        "Company Details",
                        "Products/Services",
                        "Operations",
                        "Employees",
                        "Employees",
                        "Holding, Subsidiary and Associate ...",
                        "CSR File",
                        "Transparency and Disclosures ...",
                    ]} />
                </div>

                <ReportTable content={[
                    "Corporate Identity Number (CIN) of the Company",
                    "Name of the comapny",
                    "Year of incorporation",
                    "Registered office address",
                    "Corporate address",
                    "Email",
                    "Telephone",
                    "Website",
                    "Financial year for reporting is being done",
                    "Whether shares listed on recognized Stock Exchange(s):",
                    "Authorised Capital",
                    "Paid Up Capital",
                ]} />
            </div>
        </Style>
    )
}

export default Tab1