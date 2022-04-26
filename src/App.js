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
  return hasGameStarted ? <Game /> : <StartGame onStart={() => setHasGameStarted(true)} onChange={setValues} onSubmit={values} />

}
export default App;
