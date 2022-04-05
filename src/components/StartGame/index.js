import styled from "styled-components";

const StartPage = styled.div`
color: white;
background-color: black;
text-align: center;
font-size: 30px;
`

const StartGameWindow = styled.div`
background-color: white;
width: auto;
height: 500px;
`
const ThemeToChoose = styled.h1`
color: grey;
font-size: 20px;

`
const OptionToChoose = styled.button`
color: white;
border: grey;
background-color: grey;
font-size: 15px;
padding: 15px 32px;
margin: 4px 2px;
display: inline-block;
border-radius: 30px;
`

export function StartGame() {
    return <>
        <StartPage>Start game Memory!
            <StartGameWindow>
                <ThemeToChoose>Select Theme</ThemeToChoose>
                <>
                    <OptionToChoose>Numbers</OptionToChoose>
                    <OptionToChoose>Icons</OptionToChoose>
                </>
                <ThemeToChoose>Number of players</ThemeToChoose>
                <>
                    <OptionToChoose>1 player</OptionToChoose>
                    <OptionToChoose>2 players</OptionToChoose>
                    <OptionToChoose>3 players</OptionToChoose>
                    <OptionToChoose>4 players</OptionToChoose>
                </>
                <ThemeToChoose>Size of game</ThemeToChoose>
                <>
                    <OptionToChoose>4*4</OptionToChoose>
                    <OptionToChoose>6*6</OptionToChoose>
                </>
            </StartGameWindow>
        </StartPage>
    </>
}