import React from "react";
import styled from "styled-components";

const Header = () => {
  return <HeaderStyle></HeaderStyle>
};

export default Header;

export const HeaderStyle = styled.div`
  width: 100%;
  height: 91px;
  background-color: ${(props) => props.theme.pallet.gray100};
`;
