import styled from "styled-components";


export const NavbarContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: red;
`
export const NavbarStyled = styled.div`
  width:  60%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

export const GameNameTile = styled.div`
  width: 20%;
  background-color: ${({isActiveGame}) => isActiveGame ? 'blue' : 'yellow' };
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: center;

`
export const Text = styled.h1`
  font-size: 20px;
`