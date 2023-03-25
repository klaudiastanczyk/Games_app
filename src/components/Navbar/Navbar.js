import * as S from "./Navbar.styles";

export const Navbar = ({activeGame, setActiveGame}) => {
  const menuOptions = ["Kółko i krzyżyk", "Memory", "Zgadnij liczbę", "Harry Potter Quiz"];

  return (
    <S.NavbarContainer>
      <S.NavbarStyled>
        {menuOptions.map((x, index) => (
          <S.GameNameTile
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