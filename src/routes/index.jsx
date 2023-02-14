import React from 'react'
import {Routes, Route} from 'react-router-dom';

import { Login, Signup, Social, Report, NotFound, Dashboard, Analytics, DataUpload, Governance, Environment, CompanyDetails } from '../pages';

const MainRoutes = () => {
  return (
    <Routes>
        <Route index element={<Dashboard />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='social' element={<Social />} />
        <Route path='report' element={<Report />} />
        <Route path='analytics' element={<Analytics />} />
        <Route path='dataUpload' element={<DataUpload />} />
        <Route path='governance' element={<Governance />} />
        <Route path='environment' element={<Environment />} />
        <Route path='companyDetails' element={<CompanyDetails />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default MainRoutes