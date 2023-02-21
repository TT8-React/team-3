import React from "react";
import { Container } from "../../components/Container";
import SignCard from "../../components/FormCard";
import Title from "../../components/title";
import Button from "../../components/Button";

import { VerificationStyled } from "./VerificationStyled.js";
import CustomLink from "../../components/CustomLink";
import { PATHS } from "../../routes";
const Verification = () => {
  return (
    <Container>
      <VerificationStyled>
        <SignCard className="card">
          <Title>Verification</Title>

          <ul>
            <li>
              You are sing up with this account please verify by this link
              <span>www.loremipsum.com</span>
            </li>
          </ul>

          <CustomLink to={PATHS.VERIFIED}>
            <Button>SUBMIT</Button>
          </CustomLink>
        </SignCard>
      </VerificationStyled>
    </Container>
  );
};

export default Verification;
