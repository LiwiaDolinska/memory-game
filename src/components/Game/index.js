import { useEffect, useState } from "react";
import { SingleCard } from "../SingleCard";
import { MainPage, Button, PlayerButton, FirstSection, GameSection, PlayersSection, PlayerPoints } from "./styles";
import { WinnerAlert } from "../WinnerAlert";
import { fruitsCardsImages, numberCardImages } from "./data";


const numbersCover = "/cards/numberGameCards/number-cover.jpg"

const fruitCover = "/cards/fruitsGameCards/cover.jpg"



function isWinner(cards) {
    return cards.length > 0 && cards.every((card) => card.matched)
}


// funkcja która bierze punkty i pobiera index playera
function getWinners(points) {
    const highestPoints = Math.max(...points)
    const winners = []
    for (let i = 0; i < points.length; i++) {
        if (highestPoints === points[i]) {
            winners.push(i)
        }
    }
    return winners
}


export function Game({ gameSize, theme, playersNumber }) {
    const [cards, setCards] = useState([])
    const [firstChosenCard, setFirstChosenCard] = useState(null)
    const [secondChosenCard, setSecondChosenCard] = useState(null)
    const cover = theme === "Numbers" ? numbersCover : fruitCover
    const playersArray = [...Array(playersNumber).keys()]
    const [points, setPoints] = useState(new Array(playersNumber).fill(0))
    const [turn, setTurn] = useState(0)
    const [cardsShown, setCardsShown] = useState(false)

    const winner = isWinner(cards)
    // rozłożyć karty, podwoić je

    const shuffleCards = () => {
        const pairs = gameSize * gameSize / 2
        let cardsImages = theme === "Numbers" ? numberCardImages : fruitsCardsImages
        const limitedCards = cardsImages.slice(0, pairs)
        const shuffledCards = [...limitedCards, ...limitedCards]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffledCards)

    }

    const resetGame = () => {
        setPoints(new Array(playersNumber).fill(0))
        shuffleCards()
        setTurn(0)
        setCardsShown(false)
    }

    // wybór karty
    const handleChoice = (card) => {
        if (firstChosenCard !== null && secondChosenCard !== null) {
            return
        }
        if (firstChosenCard === null) {
            setFirstChosenCard(card)
            return
        }
        setSecondChosenCard(card)
        if (firstChosenCard.src === card.src) {
            setPoints(prevPoints => {
                const newPoints = [...prevPoints]
                newPoints[turn]++
                return newPoints
            })

            setCards(prevCards => {
                return prevCards.map(item => {
                    if (firstChosenCard.src === item.src || card.src === item.src) {

                        return { ...item, matched: true }



                    }
                    return item

                })

            })

            resetTurn()
            setTurn(prevTurn => (prevTurn + 1) % playersNumber)

        } else {
            setTimeout(() => {
                resetTurn()
                setTurn(prevTurn => (prevTurn + 1) % playersNumber)
            }, 3000)

        }

    }


    const resetTurn = () => {
        setFirstChosenCard(null)
        setSecondChosenCard(null)
    }

    const showCards = () => {
        setCardsShown(true)
    }

    useEffect(() => {
        shuffleCards()
    }, [])


    return <>
        <MainPage>
            <FirstSection >
                <div>
                    <h1>memory</h1>
                </div>
                <div>
                    {cardsShown ? null : (<Button onClick={showCards}>Show cards</Button>)}
                    <Button onClick={resetGame}>New Game</Button>
                </div>
            </FirstSection>
            <GameSection gameSize={gameSize} theme={theme} >
                {cards.map(card => (
                    <SingleCard
                        card={card}
                        key={card.id}
                        cover={cover}
                        handleChoice={handleChoice}
                        flipped={card === firstChosenCard || card === secondChosenCard || card.matched || cardsShown}
                        isSmall={gameSize === 6}
                    />
                ))}
            </GameSection>
            <PlayersSection>

                {playersArray.map(player => (
                    <>
                        <PlayerButton
                            currentPlayer={turn === player}
                            key={player.id}

                        >
                            Gracz {player + 1}
                        </PlayerButton>
                        <PlayerPoints>{points[player]}</PlayerPoints>

                    </>

                )

                )}

            </PlayersSection>
            {winner ? (<WinnerAlert winners={getWinners(points)} />) : null}
        </MainPage>
    </>
}


