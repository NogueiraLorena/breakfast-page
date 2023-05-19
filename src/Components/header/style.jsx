import styled from "styled-components";

export const Cointaner = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100%;
  background: linear-gradient(25deg, tomato, blue, yellow);

  div {
    display: flex;
    width: 30%;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const Pesquisa = styled.input`
  display: ${(props) => props.modo};
  animation: caixa 2s ease-in 1 normal both;

  @keyframes caixa {
    0% {
      width: 10%;
    }
    50% {
      width: 15%;
    }
    100% {
      width: 30%;
    }
  }
`;

export const Title = styled.h1`
  animation: mudar 2s ease-in infinite normal forwards;

  @keyframes mudar {
    0% {
      color: green;
      font-zie: 1.4rem;
      font-weight: 100;
    }
    25% {
      color: blue;
      font-size: 1.6rem;
      font-weight: 500;
    }

    50% {
      color: yellow;
      font-size: 1.8rem;
      font-weight: 600;
    }
    100% {
      color: green;
      font-size: 2rem;
      font-weight: bold;
    }
  }
`;

/* animation: name duration timing-function delay iteration-count direction fill-mode */

//animation: nome da animação/ duração da animação/ velocidade de execução da animação / atraso na animação / quantidade de execução /direção de execução da animação / modo de preenchimento de estilo na tela da animação

// https://www.w3schools.com/css/css3_animations.asp
