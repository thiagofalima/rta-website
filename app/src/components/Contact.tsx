import styled from "styled-components";
import Wrapper from "./Wrapper";

const Contacts = styled.div`
    p.contact::before {
    content: '';
    display: inline-block;
    width: 1.125rem;
    height: 1.125rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    p.email {
        background-image: url('../assets/icons/email.svg');
    }

    p.wpp {
        background-image: url('../assets/icons/wpp.svg');
    }
`

export const Contact = () => {
  return (
    <Wrapper>
      <h2>Contato</h2>
      <Contacts>
        <p className="contact email">
          E-mail: <a href="#" className="link">contato@rtasolutions.com.br</a>
        </p>
        <p className="contact wpp">
          WhatsApp: <a href="#" className="link">(11)996916400</a>
        </p>
      </Contacts>
    </Wrapper>
  );
};
