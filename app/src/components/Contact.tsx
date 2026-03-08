import styled from "styled-components";
import Wrapper from "./Wrapper";
import emailIcon from "../assets/icons/email.svg";
import wppIcon from "../assets/icons/wpp.svg";

const Contacts = styled.div`
  div.contact {
    width: 500px;
    margin: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  img.wpp {
    width: 1em;
  }
  img.email {
    width: 1.15em;
  }

  a {
    font-weight: 500;
    letter-spacing: 1.5px;
    color: #344969;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Contact = () => {
  return (
    <Wrapper>
      <h2>Contato</h2>
      <Contacts>
        <div className="contact">
          <img className="email" src={emailIcon} />
          E-mail:{" "}
          <p className="contact email">
            <a
              target="_blank"
              href="mailto:contato@rtasolutions.com.br"
              className="link"
            >
              contato@rtasolutions.com.br
            </a>
          </p>
        </div>
        <div className="contact">
          <img className="wpp" src={wppIcon} />
          <p className="contact wpp">
            WhatsApp:{" "}
            <a
              target="_blank"
              href="https://wa.me/5511996916400?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              className="link"
            >
              (11)996916400
            </a>
          </p>
        </div>
      </Contacts>
    </Wrapper>
  );
};
