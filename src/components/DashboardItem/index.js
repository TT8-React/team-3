import React from "react";
import styled from "styled-components";
import Chart from "../ChartComponent";

// images
import chart1 from "../../assets/images/Line chart.png";
import chart2 from "../../assets/images/Ellipse (5).png";
import chart3 from "../../assets/images/NBcharts-columnChats.png";

const DashboardItem = () => {
  return (
    <>
      <Grid>
        <Chart img={chart1} width="500px" isVisiable={"Chart 1"} />
        <Chart img={chart2} width="500px" isVisiable={"Chart 2"} />
      </Grid>
      <Chart3>
        <Chart img={chart3} width="100%" isVisiable={"Chart 3"} />
      </Chart3>
    </>
  );
};

export default DashboardItem;
export const Grid = styled.div`
  display: flex;
`;

export const Chart3 = styled.div`
  flex-shrink: 1;
`;
