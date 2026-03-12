import styled, { keyframes } from "styled-components";
import { Products } from "./Products";

const moveArrow = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

const WhatWeDoWrapper = styled.section`
  width: 100vw;
  margin: 1.5em 0;
  background-color: #344969;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .container {
    width: 80%;
    padding: 16px;
  }

  h2.title,
  small {
    color: #ffffff;
  }

  small {
    margin-bottom: 10px;
    display: block;
    font-size: 14px;
    &::after {
      content: " \\2192"; /* Seta para a direita (→) */
      display: inline-block;
      margin-left: 5px;
      animation: ${moveArrow} 1.5s ease-in-out infinite;
    }
  }

  h2.title {
    font-size: 1.5em;
    font-weight: 700;
    margin: 10px 0;
  }
`;

export const WhatWeDo = () => {
  return (
    <WhatWeDoWrapper id="WhatWeDo">
      <div className="container">
        <h2 className="title">O que fazemos?</h2>
        <small>Passe para o lado</small>
        <Products />
      </div>
    </WhatWeDoWrapper>
  );
};
