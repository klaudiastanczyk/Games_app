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
  display: flex;
  width: 250px;
  height: 50px;
  position: absolute;
  right: 50px;
  top: 50px;
  background-color: #19AA8C;
  font-family: 'Amatic SC', cursive;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
`;

export const SettingTabs = styled.div`
display: flex;
flex-direction: row;
width: 40%;
position: absolute;
top: 15px;
left: 50%;
translate: -50%;
//border: 1px solid #DDF0E2;
border-radius: 3px;
cursor: pointer;
`;

export const Tab = styled.div`
flex-basis: 33.33%;
display: flex;
justify-content: center;
align-items: center;
padding: 8px 0;
margin-right: 10px;
background-color: ${({isSelected}) => isSelected ? '#19AA8C' : '#DDF0E2'};
color: ${({isSelected}) => isSelected ? 'white' : 'black'};
font-family: 'Amatic SC', cursive;
font-size: 25px;
border-radius: 5px;
`;

export const ButtonForNewGame = styled.div`
width: 250px;
height: 50px;
border-radius: 5px;
background-color: #DDF0E2;
position: absolute;
left: 50%;
translate: -50%;
display: flex;
justify-content: center;
align-items: center;
top: 70px;
font-family: 'Amatic SC', cursive;
font-size: 25px;
cursor: pointer;
`;

export const WinContainer = styled.div`
width: 80%;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
height: 80%;
flex-direction: column;
font-family: 'Amatic SC', cursive;
color: white;
font-size: 30px;
`;

export const ButtonOnWinScreen = styled.div`
width: 200px;
height: 50px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Amatic SC', cursive;
font-size: 30px;
cursor: pointer;
color: black;
border-radius: 5px;
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