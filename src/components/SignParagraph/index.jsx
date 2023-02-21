import React from "react";
import { Link } from "react-router-dom";
import { ParagraphStyled } from "./style.js";

const SignParagraph = ({ p, path, link }) => {
  return (
    <ParagraphStyled>
      {p}
      <Link to={path}>{link}</Link>
    </ParagraphStyled>
  );
};

export default SignParagraph;
