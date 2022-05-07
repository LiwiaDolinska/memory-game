import logo from './logo.svg';
import { useState } from 'react';
import { StartGame } from "./components/StartGame";
import { Game } from "./components/Game";

function App() {
  const [hasGameStarted, setHasGameStarted] = useState(false)
  const [values, setValues] = useState({
    theme: '',
    playersNumber: '',
    gameSize: '',
  })
  const handleStart = (gameSettings) => {
    setHasGameStarted(true)
    setValues(gameSettings)
    console.log(gameSettings)
  }

  return hasGameStarted ? <Game gameSize={values.gameSize} theme={values.theme} /> : <StartGame onStart={handleStart} onChange={setValues} />

}
export default App;
