import styled from "styled-components";


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
grid-template-columns: ${props => `repeat(${props.gameSize}, 220px);`};
column-gap: 10px;
row-gap: 10px;
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

const WinnerSection = styled.div`
background-color: orange;
color: white;
`

export { MainPage, Button, PlayerButton, FirstSection, GameSection, PlayersSection, PlayerPoints, WinnerSection }