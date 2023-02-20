import React from "react";
import styled from "styled-components";
import Label from "../title";

const Chart = ({ img, width, isVisiable }) => {
  return (
    <>
      <div>{isVisiable ? <Label title={isVisiable} /> : ""}</div>
      <ChartStyle width={width}>
        <img src={img} alt="" />
      </ChartStyle>
    </>
  );
};

export default Chart;

export const ChartStyle = styled.div`
  width: ${(props) => props.width};
  border-radius: 12px;
  border: 1px solid #969696;
`;
