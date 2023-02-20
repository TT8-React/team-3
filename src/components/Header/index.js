import React, { useCallback } from "react";
import styled from "styled-components";
import Avatar from "../Avatar/index";
import { H2 } from "../Typography";
// images
import avatarImage from "../../assets/images/avatar.png";
import { useLocation } from "react-router-dom";
import { PATHS } from "../../routes";
const Header = () => {
  const { pathname } = useLocation();

  const routeToTitle = useCallback(
    (path) => {
      switch (path) {
        case PATHS.DASHBOARD:
          return "Dashboard";
        case PATHS.COMPANY_DETAILS:
          return "Company details";
        case PATHS.PROFILE_DETAILS:
          return "Profile details";
        case PATHS.REPORT:
          return "Report";
        case PATHS.REPORT_SEBI:
          return "SEBI Report";
        case PATHS.REPORT_GRI:
          return "GRI Report";
        case PATHS.REPORT_CUSTOMIZE:
          return "Customize Report";
        case PATHS.REPORT_VIEW_ALL_REPORTS:
          return "My Report";
        case PATHS.DATA_UPLOAD:
          return "Data upload";
        case PATHS.ENVIRONMENT:
          return "Environment";
        case PATHS.SOCIAL:
          return "Social";
        case PATHS.GOVERNANCE:
          return "Governance";
        default:
          return "";
          break;
      }
    }, [])
  return (
    <HeaderStyle>
      <H2 color="light">{routeToTitle(pathname)}</H2>
      <Avatar avatar={avatarImage} />
    </HeaderStyle>
  );
};

export default Header;

export const HeaderStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 36px;
  background-color: ${(props) => props.theme.pallet.gray100};
`;
