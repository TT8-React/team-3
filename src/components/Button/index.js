import styled from "styled-components";
import React from "react";

const Button = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default Button;

export const ButtonStyle = styled.button`
  border-radius: 5px;
  padding: 10px 16px;
  background-color: ${(props) => props.theme.pallet.dark};
  font-size: ${(props) => props.theme.typography.body1};
  color: ${(props) => props.theme.pallet.light};
  font-weight: 700;
  cursor: pointer;

  transition: 0.3s box-shadow ease-in-out;
  &:hover{
    box-shadow: inset 20vw 0 0 0 ${({ theme }) => theme.pallet.light200};
    transition: 0.5s box-shadow ease-in-out;
    color: ${({ theme }) => theme.pallet.dark}
  }
`;
