import React from "react";
import styled from "styled-components";

const Chart = ({ img, width }) => {
  return (
    <ChartStyle width={width}>
      <img src={img} alt="" />
    </ChartStyle>
  );
};

export default Chart;

export const ChartStyle = styled.div`
  width: ${(props) => props.width};
  border-radius: 12px;
  border: 1px solid #969696;
`;
