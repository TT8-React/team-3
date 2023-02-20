import React from "react";

// layout
import dashboardLayout from "../../layouts/DashboardPages";

// components
import DashboardItem from "../../components/DashboardItem";

const Dashboard = () => {
  return (
    <>
      <DashboardItem />
    </>
  );
};

export default dashboardLayout(Dashboard);
