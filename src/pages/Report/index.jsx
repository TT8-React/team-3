import React from 'react'
// layout
import dashboardLayout from '../../layouts/DashboardPages'

// components
import TransferList from '../../components/TransferList'
const Report = () => {
  return (
    <div>
      <TransferList />
    </div>
  )
}

export default dashboardLayout(Report)