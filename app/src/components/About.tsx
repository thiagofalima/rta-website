import { CoFounders } from "./CoFounders";
import Wrapper from "./Wrapper";

export const About = () => {
  return (
    <Wrapper id="About">
      <h2>Quem somos?</h2>
      <p>
        A FTA Soluções é uma empresa especializada no desenvolvimento de
        softwares personalizados para empresas que desejam organizar processos,
        ganhar produtividade e tomar decisões com mais segurança.
      </p>
      <h2>Co-fundadores</h2>
      <CoFounders />
    </Wrapper>
  );
};
