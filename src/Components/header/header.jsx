import React, { useState } from "react";
import * as S from "./style";

export default function Header() {
  const [mode, setMode] = useState(false);

  return (
    <S.Cointaner>
      <S.Title>Café Vai na Web</S.Title>
      <div>
        <button
          onClick={() => {
            setMode(!mode);
          }}>
          Click aqui para escolher seu café
        </button>
        <S.Pesquisa modo={mode === false ? "none" : "initial"} />
      </div>
    </S.Cointaner>
  );
}
