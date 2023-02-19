import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import { H2 } from "../Typography";
const Header = ({ title }) => {
  return (
    <HeaderStyle>
      <H2>{title}</H2>
      <Avatar />
    </HeaderStyle>
  );
};

export default Header;

export const HeaderStyle = styled.div`
  width: 100%;
  height: 91px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.pallet.gray100};
`;
