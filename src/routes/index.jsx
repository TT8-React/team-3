import React from 'react'
import { Route, Routes } from 'react-router-dom';

import {
  Login,
  Signup,
  Social,
  Report,
  NotFound,
  Dashboard,
  Analytics,
  DataUpload,
  Governance,
  Environment,
  CompanyDetails
} from '../pages';

const Router = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/report' element={<Report />} />
      <Route path='/dataUpload' element={<DataUpload />} />
      <Route path='/analytics'>
        <Route index element={<Analytics />} />
        <Route path='environment' element={<Environment />} />
        <Route path='social' element={<Social />} />
        <Route path='governance' element={<Governance />} />
      </Route>
      <Route path='/companyDetails' element={<CompanyDetails />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export const PATHS = {
  LOGIN: "/login",
  SIGN_UP: "/signup",
  REPORT: "/report",
  DATA_UPLOAD: "/dataUpload",
  ANALYTICS: "/analytics",
  ENVIRONMENT: "/analytics/environment",
  SOCIAL: "/analytics/social",
  GOVERNANCE: "/analytics/governance",
  COMPANY_DETAILS: "/companyDetails",
}
export default Router