import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { GlobalStyle } from "./components/GlobalStyles";
import { About } from "./components/About";
import { WhatWeDo } from "./components/WhatWeDo";
import { Center } from "@chakra-ui/react";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Center flexDirection="column">
          <Hero />
          <About/>
          <WhatWeDo/>
          <Contact />
        </Center>
      </Layout>
    </>
  );
}

export default App;
