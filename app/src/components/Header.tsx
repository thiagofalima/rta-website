import styled from "styled-components";
import { HashLink} from "react-router-hash-link";

const HeaderWrapper = styled.header`
  width: 100vw;
  color: white;
  padding: 16px;
  background-color: #344969;
  border-bottom: 2px solid #ffffff;
  position: sticky;
  top: 0;

  h1 {
    font-family: Michroma, sans-serif;
    font-size: 1.25em;
    text-align: center;
    font-weight: 500;
    letter-spacing: 2px;
  }

  ul.nav__links {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  li.link {
    letter-spacing: 2px;
    transition: opacity 0.5s, text-decoration 1s
  }

  li.link:hover {
    opacity: 0.6;
    text-decoration: underline;
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <nav className="nav">
        <ul className="nav__links">
          <li className="link">
            <HashLink smooth to="#About">
              Sobre
            </HashLink>
          </li>
          <li className="link">
            <HashLink smooth to="#WhatWeDo">
              Soluções
            </HashLink>
          </li>
          <li className="link">
            <HashLink smooth to="#Contact">
              Contato
            </HashLink>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};
