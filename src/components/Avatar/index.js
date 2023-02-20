import React from "react";
import styled from "styled-components";

const Avatar = ({ avatar }) => {
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
  border-radius: 50%;
`;
