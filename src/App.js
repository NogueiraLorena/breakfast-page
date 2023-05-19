import "./styles.css";
import { createGlobalStyle } from "styled-components";
import Header from "./Components/header/header";
import Main from "./Components/Main/main";

const Global = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

`;

export default function App() {
  return (
    <div>
      <Global />
      <Header />
      <Main />
    </div>
  );
}
