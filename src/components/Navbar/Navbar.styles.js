import styled from "styled-components";


export const NavbarContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #2F4858;
  
`
export const NavbarStyled = styled.div`
  width:  80%;
  margin: 10px auto 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
`

export const GameNameTile = styled.div`
  margin-right: 1px;
  width: 20%;
  background-color: ${({isActiveGame}) => isActiveGame ? '#EED374' : '#DDF0E2' };
  color: ${({isActiveGame}) => isActiveGame ? '#2F4858' : '#046970' };
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  &:hover{
    background-color: ${({isActiveGame}) => isActiveGame ? '#EED374' : '#D3FADE' };
  }
`
export const Text = styled.h1`
  font-size: 20px;
  font-family: 'Yantramanav', sans-serif;
`