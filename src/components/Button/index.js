import styled from "styled-components";
import { defaultTheme } from "../../global/themes";
import React from "react";

const Button = ({ title, width }) => {
  return <ButtonStyle width={width}>{title}</ButtonStyle>
};

export default Button;

export const ButtonStyle = styled.button`
  width: ${(props) => props.width};
  height: 40px;
  border-radius: 5px;
  padding: 0 16px;
  background-color: ${defaultTheme.pallet.dark};
  font-size: ${defaultTheme.typography.body1};
  color: ${defaultTheme.pallet.light};
  font-weight: 700;
  cursor: pointer;
`;
