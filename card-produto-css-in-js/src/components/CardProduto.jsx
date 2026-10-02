import styled from "styled-components";

const COR_ADICIONADO = "#198754";
const COR_PADRAO = "#6c757d";

const CardContainer = styled.article`
  width: 280px;
  overflow: hidden;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
  }
`;

const CardImagem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  font-size: 4rem;
  background: linear-gradient(135deg, #e9ecef, #ced4da);
`;

const CardConteudo = styled.div`
  padding: 20px;
`;

const CardNome = styled.h2`
  margin: 0 0 8px;
  font-size: 1.25rem;
  color: #212529;
`;

const CardPreco = styled.p`
  margin: 0 0 20px;
  font-size: 1.4rem;
  font-weight: bold;
  color: #343a40;
`;

const CardBotao = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) =>
    props.$adicionado ? COR_ADICIONADO : COR_PADRAO};
  transition: filter 0.2s ease, transform 0.1s ease;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    transform: scale(0.97);
  }
`;

function CardProduto({ adicionado }) {
  return (
    <CardContainer>
      <CardImagem role="img" aria-label="Fone Bluetooth">
        🎧
      </CardImagem>
      <CardConteudo>
        <CardNome>Fone Bluetooth</CardNome>
        <CardPreco>R$ 199,90</CardPreco>
        <CardBotao $adicionado={adicionado}>Adicionar ao carrinho</CardBotao>
      </CardConteudo>
    </CardContainer>
  );
}

export default CardProduto;