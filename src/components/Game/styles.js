import styled from "styled-components";


const MainPage = styled.div`
color: white;
background-color: black;
height: 100vh;
width: 100%;
position: relative;
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
cursor: pointer;
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

const FirstSection = styled.div`
display: flex;
justify-content: space-between;
`
const GameSection = styled.div`
margin-top: ${props => props.gameSize === 4 ? "50px" : "20px"};
display: grid;
grid-template-columns: ${props => `repeat(${props.gameSize}, ${props.gameSize === 4 ? "140px" : "110px"});`};
grid-gap: ${props => props.gameSize === 4 ? "40px" : "10px"};
justify-content: center;
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


export { MainPage, Button, PlayerButton, FirstSection, GameSection, PlayersSection, PlayerPoints }