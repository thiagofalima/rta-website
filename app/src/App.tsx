import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { GlobalStyle } from "./components/GlobalStyles";

function App() {
  return (
    <>
    <GlobalStyle />
    <Layout>
      <Hero />
    </Layout>
    </>
  );
}

export default App;
