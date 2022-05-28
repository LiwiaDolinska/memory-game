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
    { "src": "/cards/fruitsGameCards/avocado.jpg" },
    { "src": "/cards/fruitsGameCards/banana.jpg" },
    { "src": "/cards/fruitsGameCards/cherry.jpg" },
    { "src": "/cards/fruitsGameCards/orange.jpg" },
    { "src": "/cards/fruitsGameCards/pineapple.jpg" },
    { "src": "/cards/fruitsGameCards/strawberry.jpg" },
    { "src": "/cards/fruitsGameCards/lime.jpg" },
    { "src": "/cards/fruitsGameCards/apricot.jpg" },
    { "src": "/cards/fruitsGameCards/blueberries.jpg" },
    { "src": "/cards/fruitsGameCards/fig.jpg" },
    { "src": "/cards/fruitsGameCards/grapes.jpg" },
    { "src": "/cards/fruitsGameCards/kiwi.jpg" },
    { "src": "/cards/fruitsGameCards/melon.jpg" },
    { "src": "/cards/fruitsGameCards/pear.jpg" },
    { "src": "/cards/fruitsGameCards/pomegranate friut.jpg" },
    { "src": "/cards/fruitsGameCards/raspberries.jpg" },
    { "src": "/cards/fruitsGameCards/watermelon.jpg" },
    { "src": "/cards/fruitsGameCards/papaya.jpg" },

]

const numberCardImages = [
    { "src": "/cards/numberGameCards/-2.jpg" },
    { "src": "/cards/numberGameCards/0.jpg" },
    { "src": "/cards/numberGameCards/1.jpg" },
    { "src": "/cards/numberGameCards/2.jpg" },
    { "src": "/cards/numberGameCards/3.jpg" },
    { "src": "/cards/numberGameCards/4.jpg" },
    { "src": "/cards/numberGameCards/5.jpg" },
    { "src": "/cards/numberGameCards/6.jpg" },
    { "src": "/cards/numberGameCards/8.jpg" },
    { "src": "/cards/numberGameCards/10.jpg" },
    { "src": "/cards/numberGameCards/11.jpg" },
    { "src": "/cards/numberGameCards/13.jpg" },
    { "src": "/cards/numberGameCards/20.jpg" },
    { "src": "/cards/numberGameCards/27.jpg" },
    { "src": "/cards/numberGameCards/33.jpg" },
    { "src": "/cards/numberGameCards/45.jpg" },
    { "src": "/cards/numberGameCards/53.jpg" },
    { "src": "/cards/numberGameCards/88.jpg" },
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
        if (firstChosenCard === null) {
            setFirstChosenCard(card)
            return
        }
        if (firstChosenCard.src === card.src) {
            console.log("pasuje")
            resetTurn()
        } else {
            console.log("nie pasuje:(")
            resetTurn()
        }
    }


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
                    <SingleCard card={card} key={card.id} cover={cover} handleChoice={handleChoice} />
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