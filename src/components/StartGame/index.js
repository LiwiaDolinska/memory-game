import { useState } from "react";
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
cursor: pointer;
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
cursor: pointer;
`

export function StartGame(props) {
    const [values, setValues] = useState({
        theme: '',
        playersNumber: '',
        gameSize: '',
    })

    function handleChange(event) {
        setValues({
            ...values, [event.target.name]: event.target.value,
        })

    }
    function handleSubmit() {
        const newGameConfig = {
            ...values,
            playersNumber: parseInt(values.playersNumber),
            gameSize: parseInt(values.gameSize)
        }
        console.log(newGameConfig)
        props.onStart(
            newGameConfig

        )
    }
    return <>
        <StartPage>Start game Memory!
            <StartGameWindow>
                <ThemeToChoose>Select Theme</ThemeToChoose>
                <div>
                    <Input onChange={handleChange} type="radio" name="theme" id="numbers" value="Numbers"></Input>
                    <OptionToChoose for="numbers">Numbers</OptionToChoose>
                    <Input onChange={handleChange} type="radio" name="theme" id="fruit" value="Fruit"></Input>
                    <OptionToChoose for="fruit">Fruit</OptionToChoose>
                </div>
                <ThemeToChoose>Number of players</ThemeToChoose>
                <div>
                    <Input onChange={handleChange} type="radio" name="playersNumber" id="one" value="1"></Input>
                    <OptionToChoose for="one">1 player</OptionToChoose>
                    <Input onChange={handleChange} type="radio" name="playersNumber" id="two" value="2"></Input>
                    <OptionToChoose for="two">2 players</OptionToChoose>
                    <Input onChange={handleChange} type="radio" name="playersNumber" id="three" value="3"></Input>
                    <OptionToChoose for="three">3 players</OptionToChoose>
                    <Input onChange={handleChange} type="radio" name="playersNumber" id="four" value="4"></Input>
                    <OptionToChoose for="four">4 players</OptionToChoose>
                </div>
                <ThemeToChoose>Size of game</ThemeToChoose>
                <div>
                    <Input onChange={handleChange} type="radio" name="gameSize" id="4" value={4}></Input>
                    <OptionToChoose for="4">4*4</OptionToChoose>
                    <Input onChange={handleChange} type="radio" name="gameSize" id="6" value={6}></Input>
                    <OptionToChoose for="6">6*6</OptionToChoose>
                </div>
                <StartButton onClick={handleSubmit}>Start game!</StartButton>
            </StartGameWindow>
        </StartPage>
    </>
}