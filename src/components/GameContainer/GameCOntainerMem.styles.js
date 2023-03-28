import styled from "styled-components";

export const MainContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
position: relative;
background-image: url("https://i.postimg.cc/Qd4xkHyh/tapeciarnia-pl-tapeta-liscie-i-kwiaty-na-zielonym-tle-1.jpg");
object-fit: cover;
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
top: 15px;
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
top: 70px;
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
  margin: 150px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-basis: 90%;
`;

export const CardContainert = styled.div`
  display: flex;
  width: 20%;
  height: 25%;
  border: 1px solid #DDF0E2;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #DDF0E2;
  opacity: ${({ isAlreadyGuessed }) => (isAlreadyGuessed ? "0%" : "100%")};
`;

export const MemoCard = styled.img`
  border-radius: 5px;
  object-fit: cover;
  width: 100%;
  height: 100%
`