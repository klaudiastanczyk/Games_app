import styled from "styled-components";

export const MainContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
position: relative;
background-image: url("https://i.postimg.cc/g0HvZdYb/pexels-alfo-medeiros-14073236.jpg");
`;

export const Counter = styled.div`
  position: absolute;
  right: 50px;
  top: 50px;
`;

export const SettingTabs = styled.div`
display: flex;
flex-direction: row;
width: 40%;
position: absolute;
top: 50px;
left: 50%;
translate: -50%;
border: 1px solid #3a33d2e6;
border-radius: 3px;
cursor: pointer;
`;

export const Tab = styled.div`
flex-basis: 33.33%;
display: flex;
justify-content: center;
align-items: center;
padding: 10px 0;
background-color: ${({isSelected}) => isSelected ? '#180fec' : 'aliceblue'};
color: ${({isSelected}) => isSelected ? 'white' : 'black'};
`;

export const ButtonForNewGame = styled.div`
width: 150px;
height: 50px;
background-color: white;
position: absolute;
left: 50%;
translate: -50%;
display: flex;
justify-content: center;
align-items: center;
top: 100px;
`;

export const WinContainer = styled.div`
width: 80%;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
height: 80%;
flex-direction: column;
`;

export const ButtonOnWinScreen = styled.div`
width: 150px;
height: 50px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`;

export const CardWrapper = styled.div`
  height: 70%;
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const CardContainert = styled.div`
  display: flex;
  width: 20%;
  height: 300px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin-bottom: 50px;
  cursor: pointer;
  background-color: white;
  opacity: ${({ isAlreadyGuessed }) => (isAlreadyGuessed ? "0%" : "100%")};
`;