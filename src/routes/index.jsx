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

import CreateReport from '../pages/CreateReport';
import CustomizeReport from '../pages/CustomizeReport';
import GriReport from '../pages/GriReport';
import MyReport from '../pages/MyReport';
import ProfileDetails from '../pages/ProfileDetails';
import SebiReport from '../pages/SebiReport';

const Router = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/report'>
        <Route index element={<Report />} />
        <Route path='view-all-reports' element={<MyReport />} />
        <Route path='create' element={<CreateReport />} />
        <Route path='sebi' element={<SebiReport />} />
        <Route path='gri' element={<GriReport />} />
        <Route path='customize' element={<CustomizeReport />} />
      </Route>
      <Route path='/dataUpload' element={<DataUpload />} />
      <Route path='/analytics'>
        <Route index element={<Analytics />} />
        <Route path='environment' element={<Environment />} />
        <Route path='social' element={<Social />} />
        <Route path='governance' element={<Governance />} />
      </Route>
      <Route path='/companyDetails' element={<CompanyDetails />} />
      <Route path='/profile-details' element={<ProfileDetails />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export const PATHS = {
  DASHBOARD: "/",
  LOGIN: "/login",
  SIGN_UP: "/signup",
  REPORT: "/report",
  REPORT_VIEW_ALL_REPORTS: "/report/view-all-reports",
  REPORT_SEBI: "/report/sebi",
  REPORT_GRI: "/report/gri",
  REPORT_CUSTOMIZE: "/report/customize",
  DATA_UPLOAD: "/dataUpload",
  ANALYTICS: "/analytics",
  ENVIRONMENT: "/analytics/environment",
  SOCIAL: "/analytics/social",
  GOVERNANCE: "/analytics/governance",
  COMPANY_DETAILS: "/companyDetails",
  PROFILE_DETAILS: "/profile-details",
}

export default Router