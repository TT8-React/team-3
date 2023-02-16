import React from "react";
import styled from "styled-components";

const FormCard = ({ children }) => {
  return <Card>{children}</Card>
};

export default FormCard;

export const Card = styled.div`
  width: 522px;
  height: ${(props) => props.height};
  border-radius: 30px;
  padding: ${(props) => props.padding};
  border: 1px solid #000000;
  background-color: #f8f8f8;
`;
