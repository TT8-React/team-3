import React from "react";

// layout
import dashboardLayout from "../../layouts/DashboardPages";

// components
import DashboardItem from "../../components/DashboardItem";

//images 
import chart1 from "../../assets/images/Line chart.png";
import chart2 from "../../assets/images/Ellipse (5).png";
import chart3 from "../../assets/images/NBcharts-columnChats.png";

const Dashboard = () => {
  return (
    <>
      <DashboardItem chart1={chart1} chart2={chart2} chart3={chart3}/>
    </>
  );
};

export default dashboardLayout(Dashboard);
