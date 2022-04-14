import styled from "styled-components";

const StartPage = styled.div`
color: white;
background-color: black;
text-align: center;
font-size: 40px;
font-family: 'Raleway', sans-serif;
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
const OptionToChoose = styled.label`
color: white;
border: grey;
background-color: grey;
font-size: 15px;
padding: 15px 32px;
margin: 4px 2px;
display: inline-block;
border-radius: 30px;
`
const Input = styled.input`
display: none;
&:checked + label {
background-color: black; 
}

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

export function StartGame(props) {
    return <>
        <StartPage>Start game Memory!
            <StartGameWindow>
                <ThemeToChoose>Select Theme</ThemeToChoose>
                <div>
                    <Input type="radio" name="theme" id="numbers" value="Numbers"></Input>
                    <OptionToChoose for="numbers">Numbers</OptionToChoose>
                    <Input type="radio" name="theme" id="icons" value="Icons"></Input>
                    <OptionToChoose for="icons">Icons</OptionToChoose>
                </div>
                <ThemeToChoose>Number of players</ThemeToChoose>
                <div>
                    <Input type="radio" name="players-number" id="one" value="1 player"></Input>
                    <OptionToChoose for="one">1 player</OptionToChoose>
                    <Input type="radio" name="players-number" id="two" value="2 players"></Input>
                    <OptionToChoose for="two">2 players</OptionToChoose>
                    <Input type="radio" name="players-number" id="three" value="3 players"></Input>
                    <OptionToChoose for="three">3 players</OptionToChoose>
                    <Input type="radio" name="players-number" id="four" value="4 players"></Input>
                    <OptionToChoose for="four">4 players</OptionToChoose>
                </div>
                <ThemeToChoose>Size of game</ThemeToChoose>
                <div>
                    <Input type="radio" name="game-size" id="4" value="4*4"></Input>
                    <OptionToChoose for="4">4*4</OptionToChoose>
                    <Input type="radio" name="game-size" id="6" value="6*6"></Input>
                    <OptionToChoose for="6">6*6</OptionToChoose>
                </div>
                <StartButton onClick={props.onStart}>Start game!</StartButton>
            </StartGameWindow>
        </StartPage>
    </>
}