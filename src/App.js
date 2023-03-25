import { Navbar } from "./components/Navbar/Navbar.js";
import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import { GameContainerOX } from "./components/GameContainer/GameContainerOX.js";
import { GameContainerMem } from "./components/GameContainer/GameContainerMem.js";
import { GameContainerNum } from "./components/GameContainer/GameContainerNum.js";
import { GameContainerHP } from "./components/GameContainer/GameContainerHP.js";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;
const GameBox = styled.div`
  height: 94.5vh;
  width: 100vw;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [activeGame, setActiveGame] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Navbar activeGame={activeGame} setActiveGame={setActiveGame} />
      <GameBox>
        {activeGame === 0 ? (
          <GameContainerOX />
        ) : activeGame === 1 ? (
          <GameContainerMem />
        ) : activeGame === 2 ? (
          <GameContainerNum />
        ) : (
          <GameContainerHP />
        )}
      </GameBox>
    </>
  );
}

export default App;
