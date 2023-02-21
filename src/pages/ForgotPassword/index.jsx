import { Container } from "../../components/Container";
import SignCard from "../../components/FormCard";
import Title from "../../components/title";
import Button from "../../components/Button";

import CustomLink from "../../components/CustomLink";

import { ForgotPasswordStyled } from "./ForgetPasswordStyle.js";

import Input from "../../components/LabelInput";
import { PATHS } from "../../routes";

const ForgotPassword = () => {
  return (
    <Container>
      <ForgotPasswordStyled>
        <SignCard className="card">
          <Title title="FORGOT PASSWORD" />
          <form>
            <Input
              id="email"
              type="text"
              placeholder="Enter Email ID"
              label="Email ID"
            />

            <CustomLink to={PATHS.VERIFICATION}>
              <Button>SUBMIT</Button>
            </CustomLink>
          </form>
        </SignCard>
      </ForgotPasswordStyled>
    </Container>
  );
};

export default ForgotPassword;
