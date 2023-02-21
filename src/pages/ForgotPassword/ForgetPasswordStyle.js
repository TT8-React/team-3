import styled from "styled-components";

export const ForgotPasswordStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .card {
    width: 522px;
    height: 405px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 100px auto;

    form {
      margin-top: 60px;

      input {
        width: 360px;
        height: 48px;
      }
      button {
        display: block;
        margin: 84px auto 10px;
      }
    }
  }
`;
