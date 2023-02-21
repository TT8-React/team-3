import React from 'react'
import Tabs from '../../components/Tabs'
// layout
import dashboardLayout from '../../layouts/DashboardPages'
import Tab1 from './components/Tab1'
import Tab2 from './components/Tab2'
import Style from './style'

const DataUpload = () => {
  return (
    <Style>
      <Tabs
        tab1={<Tab1 />}
        tab1Title="Manual data tab"
        tab2={<Tab2 />}
        tab2Title="Bulk upload tab"
      />
    </Style>
  )
}

export default dashboardLayout(DataUpload)