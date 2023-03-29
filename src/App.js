import { Navbar } from "./components/Navbar/Navbar.js";
import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import { GameContainerOX } from "./components/GameContainer/GameContainerOX.js";
import { GameContainerMem } from "./components/GameContainer/GameContainerMem.js";
import { GameContainerNum } from "./components/GameContainer/GameContainerNum.js";
import { GameContainerHP } from "./components/GameContainer/GameContainerHP.js";
import { HomeContainer } from "./components/GameContainer/HomeContainer.js";
import { GameContainerPRS } from "./components/GameContainer/GameContainerPRS.js";

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
          <HomeContainer />
        ) : activeGame === 1 ? (
          <GameContainerOX />
        ) : activeGame === 2 ? (
          <GameContainerMem />
        ) : activeGame === 3 ? (
          <GameContainerNum />
        ) : activeGame === 4 ? (
          <GameContainerHP />
        ) : (
          <GameContainerPRS />
        )}
      </GameBox>
    </>
  );
}

export default App;
