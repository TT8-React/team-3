import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar/index";
import { H2 } from "../Typography";
import avatar from "../../assets/images/avatar.png";
const Header = ({ title }) => {
  return (
    <HeaderStyle>
      <H2>{title}</H2>
      <Avatar avatar={avatar} />
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
  padding: 0 15px;
  background-color: ${(props) => props.theme.pallet.gray100};
`;
