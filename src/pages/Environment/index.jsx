import React from "react";
import DashboardItem from "../../components/DashboardItem";
// layout
import dashboardLayout from "../../layouts/DashboardPages";

//images
import chart1 from "../../assets/images/Line chart.png";
import chart3 from "../../assets/images/NBcharts-columnChats.png";

const Environment = () => {
  return <DashboardItem chart1={chart1} chart2={chart1} chart3={chart3} />;
};

export default dashboardLayout(Environment);
