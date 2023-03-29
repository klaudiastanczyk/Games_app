import * as S from "./Navbar.styles";

export const Navbar = ({activeGame, setActiveGame}) => {
  const menuOptions = ["Home", "Tic-Tac-Toe", "Memory", "Guess the number", "Harry Potter Quiz", 'Rock, paper, scissors'];

  return (
    <S.NavbarContainer>
      <S.NavbarStyled>
        {menuOptions.map((x, index) => (
          <S.GameNameTile
            key={Math.random() + index}
            onClick={() => {
              setActiveGame(index);
            }}
            isActiveGame={index === activeGame}
          > 
            <S.Text>{x}</S.Text>
          </S.GameNameTile>
        ))}
      </S.NavbarStyled>
    </S.NavbarContainer>
  );
}; 