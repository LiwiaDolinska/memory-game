import styled from "styled-components";

const StartPage = styled.div`
color: white;
background-color: black;
text-align: center;
font-size: 40px;
height: 1000px;
padding: 50px;
`
const StartGameWindow = styled.div`
background-color: white;
width: 50%;
height: 500px;
padding: 10px;
margin: auto;
margin-top: 80px;

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
const StartButton = styled.button`
color: white;
background-color: orange;
padding: 15px 32px;
font-size: 30px;
border-radius: 30px;
border: orange;
margin: 40px;
`

export function StartGame() {
    return <>
        <StartPage>Start game Memory!
            <StartGameWindow>
                <ThemeToChoose>Select Theme</ThemeToChoose>
                <div>
                    <OptionToChoose>Numbers</OptionToChoose>
                    <OptionToChoose>Icons</OptionToChoose>
                </div>
                <ThemeToChoose>Number of players</ThemeToChoose>
                <div>
                    <OptionToChoose>1 player</OptionToChoose>
                    <OptionToChoose>2 players</OptionToChoose>
                    <OptionToChoose>3 players</OptionToChoose>
                    <OptionToChoose>4 players</OptionToChoose>
                </div>
                <ThemeToChoose>Size of game</ThemeToChoose>
                <div>
                    <OptionToChoose>4*4</OptionToChoose>
                    <OptionToChoose>6*6</OptionToChoose>
                </div>
                <StartButton>Start game!</StartButton>
            </StartGameWindow>
        </StartPage>
    </>
}