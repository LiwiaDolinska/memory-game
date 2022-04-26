import styled from "styled-components";

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

`

const PlayersSection = styled.div`
display: flex;
justify-content: center;
`
export function Game() {
    return <>
        <MainPage>
            <FirstSection>
                <div>
                    <h1>memory</h1>
                </div>
                <div>
                    <Button>Show cards</Button>
                    <Button>New Game</Button>
                </div>
            </FirstSection>
            <PlayersSection>
                <PlayerButton>1 player</PlayerButton>
                <PlayerButton>2 player</PlayerButton>
                <PlayerButton>3 player</PlayerButton>
                <PlayerButton>4 player</PlayerButton>
            </PlayersSection>
        </MainPage>
    </>
}