import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { GlobalStyle } from "./components/GlobalStyles";
import { About } from "./components/About";

function App() {
  return (
    <>
    <GlobalStyle />
    <Layout>
      <Hero />
      <About />
    </Layout>
    </>
  );
}

export default App;
