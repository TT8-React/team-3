import React from "react";
import { Container } from "../../components/Container";
import SignCard from "../../components/FormCard";
import Title from "../../components/title";
import Button from "../../components/Button";
import CustomLink from "../../components/CustomLink";

import { VerifiedStyled } from "./Verified.Styled.js";

import { PATHS } from "../../routes";
import Img from "../../assets/images/Verified.png";

const Verified = () => {
  return (
    <Container>
      <VerifiedStyled>
        <SignCard className="card">
          <Title title="Verified" />

          <div>
            <img src={Img} alt="Verified" />
          </div>

          <CustomLink to={PATHS.DASHBOARD}>
            <Button>NEXT</Button>
          </CustomLink>
        </SignCard>
      </VerifiedStyled>
    </Container>
  );
};

export default Verified;
