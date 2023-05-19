import styled from "styled-components";
import Cafe from "./cafe.jpg";
import Completo from "./completao.jpg";
import Fome from "./fome.jpg";

export const ContainerMain = styled.main`
  background-size: 100% 100%;
  height: 90vh;
  animation: fundo 10s ease-out infinite normal both;

  @keyframes fundo {
    0% {
      background-image: url(${Cafe});
    }
    50% {
      background-image: url(${Fome});
    }
    100% {
      background-image: url(${Completo});
    }
  }
`;
