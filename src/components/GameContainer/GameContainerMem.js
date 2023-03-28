import styled from "styled-components";
import { useState, useEffect } from "react";
import { MEMORY_TIMEOUT_SETTING, MEMORY_CARD_SETS } from "./gamesConst";
import * as S from "./GameCOntainerMem.styles";

export const GameContainerMem = () => {
  const [clickedCard, setClickedCard] = useState([]);
  const [counterOfTries, setCounterOfTries] = useState(0);
  const [selectedValueOfCards, setSelectedValueOfCards] = useState(1);
  const { VERSION_WITH_8_CARDS, VERSION_WITH_12_CARDS, VERSION_WITH_16_CARDS } =
    MEMORY_CARD_SETS;

  const [cardsForPlaying, setCardsForPlaying] = useState(
    selectedValueOfCards === 1
      ? VERSION_WITH_8_CARDS
      : selectedValueOfCards === 2
      ? VERSION_WITH_12_CARDS
      : VERSION_WITH_16_CARDS
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
    switch (selectedValueOfCards) {
      case 1:
        setCardsForPlaying(shuffleAnArray(VERSION_WITH_8_CARDS));
        break;
      case 2:
        setCardsForPlaying(shuffleAnArray(VERSION_WITH_12_CARDS));
        break;
      case 3:
        setCardsForPlaying(shuffleAnArray(VERSION_WITH_16_CARDS));
        break;
    }
  }, [selectedValueOfCards]);

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
    <S.MainContainer>
      {!cardsForPlaying.every((x) => x.isGuess) ? (
        <>
          <S.SettingTabs>
            <S.Tab
              isSelected={selectedValueOfCards === 1}
              onClick={() => setSelectedValueOfCards(1)}
            >
              8 CARDS
            </S.Tab>
            <S.Tab
              isSelected={selectedValueOfCards === 2}
              onClick={() => setSelectedValueOfCards(2)}
            >
              12 CARDS
            </S.Tab>
            <S.Tab
              isSelected={selectedValueOfCards === 3}
              onClick={() => setSelectedValueOfCards(3)}
            >
              16 CARDS
            </S.Tab>
          </S.SettingTabs>
          <S.ButtonForNewGame
            onClick={() => {
              setCounterOfTries(0);
              setClickedCard([]);
              const temporaryCards = cardsForPlaying.map((card) => {
                return { ...card, isGuess: false };
              });
              setCardsForPlaying(shuffleAnArray(temporaryCards));
            }}
          >
            Start the new game
          </S.ButtonForNewGame>
          <S.Counter>
            <p> Amout of tries: {counterOfTries}</p>
          </S.Counter>
        </>
      ) : null}
      {cardsForPlaying.every((x) => x.isGuess) ? (
        <S.WinContainer>
          <h1>Congratulations, you won in {counterOfTries} tries</h1>
          <S.ButtonOnWinScreen
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
          </S.ButtonOnWinScreen>
        </S.WinContainer>
      ) : (
        <S.CardWrapper>
          {cardsForPlaying.map((card, index) => {
            const { name, image, isGuess } = card;
            return (
              <S.CardContainert
                key={index}
                isAlreadyGuessed={isGuess}
                data-testid={`Card_number${index}`}
                onClick={() => {
                  if (!isGuess) {
                    if (clickedCard.length < 2) {
                      setClickedCard((prev) => [...prev, index]);
                    }
                  }
                }}
              >
                {clickedCard.includes(index) ? (
                  <S.MemoCard src={`${process.env.PUBLIC_URL}/${image}`} />
                ) : null}
              </S.CardContainert>
            );
          })}
        </S.CardWrapper>
      )}
    </S.MainContainer>
  );
};
