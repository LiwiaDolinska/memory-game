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
grid-template-columns: 1fr 1fr 1fr 1fr;
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

]

export function Game() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)

    // rozłożyć karty, podwoić je

    const shuffleCards = () => {
        const shuffledCards = [...cardsImages, ...cardsImages]
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
            <GameSection>
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