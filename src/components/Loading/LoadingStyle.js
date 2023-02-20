import styled from "styled-components";
import { rotateAnimation } from "../../global/animation";

export const LoadingStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .loading-rotary {
    width: 50px;
    height: 50px;
    border: 3px solid white;
    border-radius: 50%;
    border-top-color: #3498db;
    animation: ${rotateAnimation} 2s linear infinite;
  }
  .title {
    font-size: 2rem;
    color: #3498db;
    text-align: center;
    margin-top: 1rem;
  }
`;
