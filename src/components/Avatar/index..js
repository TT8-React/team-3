import React from "react";
import styled from "styled-components";
import avatar from "../../assets/images/avatar.png";

const Avatar = () => {
  return (
    <AvatarStyle>
      <img src={avatar} alt="" />
    </AvatarStyle>
  );
};

export default Avatar;

export const AvatarStyle = styled.div`
  width: 57px;
  height: 57px;
  background-color: azure;
  border-radius: 50%;
`;
