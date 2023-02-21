import React from "react";
import styled from "styled-components";

const FormCard = ({ children, padding, className }) => {
  return (
    <CardStyle className={className} padding={padding}>
      {children}
    </CardStyle>
  );
};

export default FormCard;

export const CardStyle = styled.div`
  width: 522px;
  border-radius: 30px;
  padding: ${(props) => props.padding};
  border: 1px solid #000000;
  background-color: #f8f8f8;
`;
