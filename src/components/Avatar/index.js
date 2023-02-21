import React, { useState } from "react";
import styled from "styled-components";
import PopUp from "./PopUp";

const Avatar = ({ avatar }) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  return (
    <>
      {isPopUpOpen && <PopUp close={() => setIsPopUpOpen(false)} />}
      <AvatarStyle onClick={() => setIsPopUpOpen(true)}>
        <img src={avatar} alt="" />
      </AvatarStyle>
    </>
  );
};

export default Avatar;

export const AvatarStyle = styled.div`
  width: 57px;
  height: 57px;
  border-radius: 50%;
  cursor: pointer;
`;
