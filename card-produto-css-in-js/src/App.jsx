import styled, { createGlobalStyle } from "styled-components";
import CardProduto from "./components/CardProduto.jsx";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Segoe UI", Arial, sans-serif;
    background-color: #f1f3f5;
  }
`;

const Pagina = styled.main`
  min-height: 100vh;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const Titulo = styled.h1`
  margin: 0;
  font-size: 2rem;
  color: #212529;
`;

const ListaCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Pagina>
        <Titulo>Nossos produtos</Titulo>
        <ListaCards>
          <CardProduto adicionado={false} />
          <CardProduto adicionado={true} />
        </ListaCards>
      </Pagina>
    </>
  );
}

export default App;