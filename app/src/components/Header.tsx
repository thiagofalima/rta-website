import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100vw;
  color: white;
  padding: 16px;
  background-color: #344969;

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
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <nav className="nav">
        <ul className="nav__links">
          <li className="link">Sobre</li>
          <li className="link">Soluções</li>
          <li className="link">Contato</li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};
