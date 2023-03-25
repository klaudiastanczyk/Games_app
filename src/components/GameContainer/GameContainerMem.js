import styled from "styled-components";
import { useState, useEffect } from "react";
import { MEMORY_TIMEOUT_SETTING, MEMORY_CARD_SETS } from "./gamesConst";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;

const Counter = styled.div`
  position: absolute;
  right: 50px;
  top: 50px;
`;

const SettingTabs = styled.div`
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

const Tab = styled.div`
  flex-basis: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  background-color: ${({isSelected}) => isSelected ? '#180fec' : 'aliceblue'};
  color: ${({isSelected}) => isSelected ? 'white' : 'black'};
`;

const WinContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  flex-direction: column;
`;

const ButtonForNewGame = styled.div`
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

const ButtonOnWinScreen = styled.div`
  width: 150px;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  height: 70%;
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const CardContainert = styled.div`
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

export const GameContainerMem = () => {
  const [clickedCard, setClickedCard] = useState([]);
  const [counterOfTries, setCounterOfTries] = useState(0);
  const [selectedValueOfCards, setSelectedValueOfCards] = useState(1);
  const { VERSION_WITH_8_CARDS, VERSION_WITH_12_CARDS, VERSION_WITH_24_CARDS } =
    MEMORY_CARD_SETS;

  const [cardsForPlaying, setCardsForPlaying] = useState(
    selectedValueOfCards === 1
      ? VERSION_WITH_8_CARDS
      : selectedValueOfCards === 2
      ? VERSION_WITH_12_CARDS
      : VERSION_WITH_24_CARDS
  );

  const shuffleAnArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let indexThatWillBeSwappedWith = Math.floor(Math.random() * (i + 1));
      let temporaryValueOfSwappedIndex = array[i];
      array[i] = array[indexThatWillBeSwappedWith];
      array[indexThatWillBeSwappedWith] = temporaryValueOfSwappedIndex;
    }
    return array;
  };

  useEffect(() => {
    setCardsForPlaying(shuffleAnArray(cardsForPlaying));
  }, []);

  useEffect(() => {
    switch(selectedValueOfCards) {
      case 1:
        setCardsForPlaying(shuffleAnArray(VERSION_WITH_8_CARDS));
        break;
      case 2: 
        setCardsForPlaying(shuffleAnArray(VERSION_WITH_12_CARDS));
        break;
      case 3: 
        setCardsForPlaying(shuffleAnArray(VERSION_WITH_24_CARDS));
        break;
    }
  }, [selectedValueOfCards])

  useEffect(() => {
    if (clickedCard.length === 2) {
      setTimeout(() => {
        const arePair =
          cardsForPlaying[clickedCard[0]].id ===
          cardsForPlaying[clickedCard[1]].id;
        if (arePair) {
          setCardsForPlaying((prev) =>
            prev.map((card, index) => {
              if (clickedCard.includes(index)) {
                return { ...card, isGuess: true };
              } else {
                return card;
              }
            })
          );
        }
        setClickedCard([]);
      }, MEMORY_TIMEOUT_SETTING);
      setCounterOfTries((prev) => prev + 1);
    }
  }, [clickedCard.length]);

  return (
    <MainContainer>
      {!cardsForPlaying.every((x) => x.isGuess) ? (
        <>
          <SettingTabs>
            <Tab isSelected={selectedValueOfCards === 1} onClick={() => setSelectedValueOfCards(1)}>8 CARDS</Tab>
            <Tab isSelected={selectedValueOfCards === 2} onClick={() => setSelectedValueOfCards(2)}>12 CARDS</Tab>
            <Tab isSelected={selectedValueOfCards === 3} onClick={() => setSelectedValueOfCards(3)}>24 CARDS</Tab>
          </SettingTabs>
          <ButtonForNewGame
            onClick={() => {
              setCounterOfTries(0);
              setClickedCard([]);
              const temporaryCards = cardsForPlaying.map((card) => {
                return { ...card, isGuess: false };
              });
              setCardsForPlaying(shuffleAnArray(temporaryCards));
            }}
          >
            Zacznij nowa gre
          </ButtonForNewGame>
          <Counter>
            <p> Amout of tries: {counterOfTries}</p>
          </Counter>
        </>
      ) : null}
      {cardsForPlaying.every((x) => x.isGuess) ? (
        <WinContainer>
          <h1>Gratulacje, wygrałeś w {counterOfTries} próbach</h1>
          <ButtonOnWinScreen
            onClick={() => {
              setCounterOfTries(0);
              setClickedCard([]);
              const temporaryCards = cardsForPlaying.map((card) => {
                return { ...card, isGuess: false };
              });
              setCardsForPlaying(shuffleAnArray(temporaryCards));
            }}
          >
            Zacznij nowa gre
          </ButtonOnWinScreen>
        </WinContainer>
      ) : (
        <CardWrapper>
          {cardsForPlaying.map((card, index) => {
            const { id, name, image, isGuess } = card;
            return (
              <CardContainert key={index} isAlreadyGuessed={isGuess} data-testid={`Card_number${index}`} onClick={() => {
                if (!isGuess) {
                  if (clickedCard.length < 2) {
                    setClickedCard((prev) => [...prev, index]);
                  }
                }
              }}>
                {clickedCard.includes(index) ? name : null}
              </CardContainert>
            );
          })}
        </CardWrapper>
      )}
    </MainContainer>
  );
};
