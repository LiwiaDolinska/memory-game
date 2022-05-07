import { useState } from "react";
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


const cardsImages = [
    { "src": "/cards/gameCards/avocado.jpg" },
    { "src": "/cards/gameCards/banana.jpg" },
    { "src": "/cards/gameCards/cherry.jpg" },
    { "src": "/cards/gameCards/orange.jpg" },
    { "src": "/cards/gameCards/pineapple.jpg" },
    { "src": "/cards/gameCards/strawberry.jpg" },
    { "src": "/cards/gameCards/lime.jpg" },
    { "src": "/cards/gameCards/apricot.jpg" },
    { "src": "/cards/gameCards/blueberries.jpg" },
    { "src": "/cards/gameCards/fig.jpg" },
    { "src": "/cards/gameCards/grapes.jpg" },
    { "src": "/cards/gameCards/kiwi.jpg" },
    { "src": "/cards/gameCards/melon.jpg" },
    { "src": "/cards/gameCards/pear.jpg" },
    { "src": "/cards/gameCards/pomegranate friut.jpg" },
    { "src": "/cards/gameCards/raspberries.jpg" },
    { "src": "/cards/gameCards/watermelon.jpg" },
    { "src": "/cards/gameCards/papaya.jpg" },
    { "src": "/cards/gameCards/-2.jpg" },
    { "src": "/cards/gameCards/0.jpg" },
    { "src": "/cards/gameCards/1.jpg" },
    { "src": "/cards/gameCards/2.jpg" },
    { "src": "/cards/gameCards/3.jpg" },
    { "src": "/cards/gameCards/4.jpg" },
    { "src": "/cards/gameCards/5.jpg" },
    { "src": "/cards/gameCards/6.jpg" },
    { "src": "/cards/gameCards/8.jpg" },
    { "src": "/cards/gameCards/10.jpg" },
    { "src": "/cards/gameCards/11.jpg" },
    { "src": "/cards/gameCards/13.jpg" },
    { "src": "/cards/gameCards/20.jpg" },
    { "src": "/cards/gameCards/27.jpg" },
    { "src": "/cards/gameCards/33.jpg" },
    { "src": "/cards/gameCards/45.jpg" },
    { "src": "/cards/gameCards/53.jpg" },
    { "src": "/cards/gameCards/88.jpg" },

]

export function Game({ gameSize, theme }) {
    // console.log(gameSize)
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)

    // rozłożyć karty, podwoić je

    const shuffleCards = () => {
        const pairs = gameSize * gameSize / 2
        const limitedCards = cardsImages.slice(0, pairs)
        const shuffledCards = [...limitedCards, ...limitedCards]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffledCards)
        setTurns(0)
    }
    console.log(cards, turns)

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
                    <SingleCard card={card} key={card.id} />
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