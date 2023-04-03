import { useState } from "react";
import styled, { css } from "styled-components";

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

const PlayerSection = styled.div`
  height: 100%;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ isUserSide }) => (isUserSide ? "red" : "blue")};
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Card = styled.div`
  width: 200px;
  height: 200px;
  text-align: center;
  background: #19aa8c;
  cursor: pointer;
  right: calc(50% - 200px);
  top: ${({userSelect}) => userSelect === 0 ? '0%' : userSelect === 1 ? '45%' : '80%'};
  ${({isCorrectCard, isItPlayerCard}) => isCorrectCard && css`
    position: absolute;
    right: ${isItPlayerCard ? '0%' : '85.5%'};
    top: 50%;
    translate: 0 -50%;
  `}
  transition: top 1s linear, right 1s linear;
`;

export const GameContainerPRS = () => {
  const [isWin, setIsWin] = useState(-1);
  const [computerSelect, setComputerSelect] = useState();
  const [userSelect, setUserSelect] = useState();
  const options = ["Paper", "Rock", "Scissors"];

  const declareWin = (index) => {
    setComputerSelect();
    setUserSelect();
    const chosenOption = options[index];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerRandomOptionSelected = options[randomIndex];
    setComputerSelect(randomIndex);

    chosenOption === "Paper"
      ? computerRandomOptionSelected === "Rock"
        ? setIsWin(1)
        : setIsWin(0)
      : chosenOption === "Rock"
      ? computerRandomOptionSelected === "Scissors"
        ? setIsWin(1)
        : setIsWin(0)
      : chosenOption === "Scissors"
      ? computerRandomOptionSelected === "Paper"
        ? setIsWin(1)
        : setIsWin(0)
      : setIsWin(-1);
  };

  return (
    <MainContainer>
      <PlayerSection isUserSide={true}>
        <CardsWrapper>
          {options.map((singleContainer, index) => (
            <Card
              isItPlayerCard={true}
              isCorrectCard={userSelect === index}
              userSelect={userSelect}
              onClick={() => {
                declareWin(index);
                setUserSelect(index);
              }}
            >
              {singleContainer}
            </Card>
          ))}
        </CardsWrapper>
      </PlayerSection>
      <PlayerSection isUserSide={false}>
        <CardsWrapper>
          {options.map((singleContainer, index) => {
            return (<Card
              isItPlayerCard={false}
              isCorrectCard={computerSelect === index}
              userSelect={computerSelect}
            >
              {singleContainer}
            </Card>)
          }
          )}
        </CardsWrapper>
      </PlayerSection>
    </MainContainer>
  );
};
