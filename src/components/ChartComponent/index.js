import React from "react";
import styled from "styled-components";
import Label from "../title";

const Chart = ({ img, width, isVisiable }) => {
  return (
    <ChartContainer>
      <Labe>{isVisiable ? <Label title={isVisiable} /> : ""}</Labe>
      <ChartStyle width={width}>
        <Img src={img} alt="" />
      </ChartStyle>
    </ChartContainer>
  );
};

export default Chart;

export const ChartStyle = styled.div`
  width: ${(props) => props.width};
  border-radius: 12px;
  border: 1px solid #969696;
`;
export const Labe = styled.div`
  margin-bottom: 10px;
`;
export const Img = styled.img`
  width: 100%;
  height: 382px;
  padding: 15px;
`;
export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 30px;
`;
