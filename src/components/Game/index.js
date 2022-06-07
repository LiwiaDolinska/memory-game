import { useEffect, useState } from "react";
import styled from "styled-components";
import { SingleCard } from "../SingleCard";

const MainPage = styled.div`
color: black;
background-color: white;
`

const Button = styled.label`
color: white;
border: grey;
background-color: grey;
font-size: 15px;
padding: 15px 32px;
margin: 4px 2px;
display: inline-block;
border-radius: 30px;
`

const PlayerButton = styled.label`
color: white;
border: grey;
background-color: grey;
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
margin-top: 40px;
display: grid;
grid-template-columns: ${props => `repeat(${props.gameSize}, 1fr);`};
grid-gap: 20px;
`

const PlayersSection = styled.div`
display: flex;
justify-content: center;
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

export function Game({ gameSize, theme }) {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [firstChosenCard, setFirstChosenCard] = useState(null)
    const [secondChosenCard, setSecondChosenCard] = useState(null)
    const cover = theme === "Numbers" ? numbersCover : fruitCover


    // rozłożyć karty, podwoić je

    const shuffleCards = () => {
        const pairs = gameSize * gameSize / 2
        let cardsImages = theme === "Numbers" ? numberCardImages : fruitsCardsImages
        const limitedCards = cardsImages.slice(0, pairs)
        const shuffledCards = [...limitedCards, ...limitedCards]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffledCards)
        setTurns(0)
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
            setCards(prevCards => {
                return prevCards.map(item => {
                    if (firstChosenCard.src === item.src || card.src === item.src) {
                        return { ...item, matched: true }
                    }
                    return item

                })

            })
            resetTurn()
        } else {
            setTimeout(resetTurn, 3000)
        }
    }

    console.log(cards)


    const resetTurn = () => {
        setFirstChosenCard(null)
        setSecondChosenCard(null)
        setTurns(prevTurn => prevTurn + 1)
    }
    return <>
        <MainPage>
            <FirstSection>
                <div>
                    <h1>memory</h1>
                </div>
                <div>
                    <Button >Show cards</Button>
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
                <PlayerButton>1 player</PlayerButton>
                <PlayerButton>2 player</PlayerButton>
                <PlayerButton>3 player</PlayerButton>
                <PlayerButton>4 player</PlayerButton>
            </PlayersSection>
        </MainPage>
    </>
}
