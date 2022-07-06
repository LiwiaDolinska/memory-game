import { useEffect, useState } from "react";
import styled from "styled-components";
import { SingleCard } from "../SingleCard";

const MainPage = styled.div`
color: white;
background-color: black;
height: 100vh;
`

const Button = styled.label`
color: white;
border: grey;
background-color: grey;
font-size: 15px;
padding: 15px 32px;
margin: 4px 2px;
display: inline-block;
border-radius: 5px;
`

const PlayerButton = styled.label`
color: white;
border: grey;
background-color: ${props => props.currentPlayer ? "orange" : "grey"};
font-size: 15px;
padding: 15px 32px;
margin: 15px 20px;
display: inline-block;
border-radius: 5px;
`
const Input = styled.input`
display: none;
&:checked + label {
background-color: black; 
}
`
const FirstSection = styled.div`
display: flex;
justify-content: space-between;
`
const GameSection = styled.div`
margin-top: 50px;
display: grid;
grid-template-columns: ${props => `repeat(${props.gameSize}, 1fr);`};
column-gap: 10px;
row-gap: 10px;
`

const PlayersSection = styled.div`
display: flex;
justify-content: center;
margin: 40px;
`

const PlayerPoints = styled.label`
color: white;
flex-direction: column;
`
const numbersCover = "/cards/numberGameCards/number-cover.jpg"

const fruitCover = "/cards/fruitsGameCards/cover.jpg"

const fruitsCardsImages = [
    { "src": "/cards/fruitsGameCards/avocado.jpg", matched: false },
    { "src": "/cards/fruitsGameCards/banana.jpg", matched: false },
    { "src": "/cards/fruitsGameCards/cherry.jpg", matched: false },
    { "src": "/cards/fruitsGameCards/orange.jpg", matched: false },
    { "src": "/cards/fruitsGameCards/pineapple.jpg", matched: false },
    { "src": "/cards/fruitsGameCards/strawberry.jpg", matched: false },
    { "src": "/cards/fruitsGameCards/lime.jpg", matched: false },
    { "src": "/cards/fruitsGameCards/apricot.jpg", matched: false },
    { "src": "/cards/fruitsGameCards/blueberries.jpg", matched: false },
    { "src": "/cards/fruitsGameCards/fig.jpg", matched: false },
    { "src": "/cards/fruitsGameCards/grapes.jpg", matched: false },
    { "src": "/cards/fruitsGameCards/kiwi.jpg", matched: false },
    { "src": "/cards/fruitsGameCards/melon.jpg", matched: false },
    { "src": "/cards/fruitsGameCards/pear.jpg", matched: false },
    { "src": "/cards/fruitsGameCards/pomegranate friut.jpg", matched: false },
    { "src": "/cards/fruitsGameCards/raspberries.jpg", matched: false },
    { "src": "/cards/fruitsGameCards/watermelon.jpg", matched: false },
    { "src": "/cards/fruitsGameCards/papaya.jpg", matched: false },

]

const numberCardImages = [
    { "src": "/cards/numberGameCards/-2.jpg", matched: false },
    { "src": "/cards/numberGameCards/0.jpg", matched: false },
    { "src": "/cards/numberGameCards/1.jpg", matched: false },
    { "src": "/cards/numberGameCards/2.jpg", matched: false },
    { "src": "/cards/numberGameCards/3.jpg", matched: false },
    { "src": "/cards/numberGameCards/4.jpg", matched: false },
    { "src": "/cards/numberGameCards/5.jpg", matched: false },
    { "src": "/cards/numberGameCards/6.jpg", matched: false },
    { "src": "/cards/numberGameCards/8.jpg", matched: false },
    { "src": "/cards/numberGameCards/10.jpg", matched: false },
    { "src": "/cards/numberGameCards/11.jpg", matched: false },
    { "src": "/cards/numberGameCards/13.jpg", matched: false },
    { "src": "/cards/numberGameCards/20.jpg", matched: false },
    { "src": "/cards/numberGameCards/27.jpg", matched: false },
    { "src": "/cards/numberGameCards/33.jpg", matched: false },
    { "src": "/cards/numberGameCards/45.jpg", matched: false },
    { "src": "/cards/numberGameCards/53.jpg", matched: false },
    { "src": "/cards/numberGameCards/88.jpg", matched: false },
]


export function Game({ gameSize, theme, playersNumber }) {
    const [cards, setCards] = useState([])
    const [firstChosenCard, setFirstChosenCard] = useState(null)
    const [secondChosenCard, setSecondChosenCard] = useState(null)
    const cover = theme === "Numbers" ? numbersCover : fruitCover
    const playersArray = [...Array(playersNumber).keys()]
    console.log(playersArray, playersNumber)
    const [points, setPoints] = useState(new Array(playersNumber).fill(0))
    const [turn, setTurn] = useState(0)
    console.log(points)

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
    console.log({ points, turn })
    console.log(cards)


    const resetTurn = () => {
        setFirstChosenCard(null)
        setSecondChosenCard(null)
    }

    const showCards = () => {
        setCards(cards => {
            return cards.map(item => {
                return { ...item, matched: true }
            })
        })
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
                    <Button onClick={showCards}>Show cards</Button>
                    <Button onClick={shuffleCards}>New Game</Button>
                </div>
            </FirstSection>
            <GameSection gameSize={gameSize} theme={theme}>
                {cards.map(card => (
                    <SingleCard
                        card={card}
                        key={card.id}
                        cover={cover}
                        handleChoice={handleChoice}
                        flipped={card === firstChosenCard || card === secondChosenCard || card.matched}
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
        </MainPage>
    </>
}


