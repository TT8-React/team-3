import React from "react";
import { Route, Routes } from "react-router-dom";

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
  CompanyDetails,
} from "../pages";

import CreateReport from "../pages/CreateReport";
import CustomizeReport from "../pages/CustomizeReport";
import EditReport from "../pages/EditReport";
import ForgotPassword from "../pages/ForgotPassword";
import GriReport from "../pages/GriReport";
import MyReport from "../pages/MyReport";
import ProfileDetails from "../pages/ProfileDetails";
import SebiReport from "../pages/SebiReport";
import Verification from "../pages/Verification";
import Verified from "../pages/Verified";
import RequiresAuth from "./components/RequiresAuth";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        index
        element={
          <RequiresAuth>
            <Dashboard />
          </RequiresAuth>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/verified" element={<Verified />} />
      <Route path="/report">
        <Route
          index
          element={
            <RequiresAuth>
              <Report />
            </RequiresAuth>
          }
        />
        <Route
          path="view-all-reports"
          element={
            <RequiresAuth>
              <MyReport />
            </RequiresAuth>
          }
        />
        <Route
          path="edit"
          element={
            <RequiresAuth>
              <EditReport />
            </RequiresAuth>
          }
        />
        <Route
          path="create"
          element={
            <RequiresAuth>
              <CreateReport />
            </RequiresAuth>
          }
        />
        <Route
          path="sebi"
          element={
            <RequiresAuth>
              <SebiReport />
            </RequiresAuth>
          }
        />
        <Route
          path="gri"
          element={
            <RequiresAuth>
              <GriReport />
            </RequiresAuth>
          }
        />
        <Route
          path="customize"
          element={
            <RequiresAuth>
              <CustomizeReport />
            </RequiresAuth>
          }
        />
      </Route>
      <Route
        path="/dataUpload"
        element={
          <RequiresAuth>
            <DataUpload />
          </RequiresAuth>
        }
      />
      <Route path="/analytics">
        <Route
          index
          element={
            <RequiresAuth>
              <Analytics />
            </RequiresAuth>
          }
        />
        <Route
          path="environment"
          element={
            <RequiresAuth>
              <Environment />
            </RequiresAuth>
          }
        />
        <Route
          path="social"
          element={
            <RequiresAuth>
              <Social />
            </RequiresAuth>
          }
        />
        <Route
          path="governance"
          element={
            <RequiresAuth>
              <Governance />
            </RequiresAuth>
          }
        />
      </Route>
      <Route
        path="/companyDetails"
        element={
          <RequiresAuth>
            <CompanyDetails />
          </RequiresAuth>
        }
      />
      <Route
        path="/profile-details"
        element={
          <RequiresAuth>
            <ProfileDetails />
          </RequiresAuth>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export const PATHS = {
  DASHBOARD: "/",
  LOGIN: "/login",
  SIGN_UP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",
  VERIFICATION: "/verification",
  VERIFIED: "/verified",
  REPORT: "/report",
  REPORT_VIEW_ALL_REPORTS: "/report/view-all-reports",
  REPORT_EDIT: "/report/edit",
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
};

export default Router;
