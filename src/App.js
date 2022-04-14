import logo from './logo.svg';
import { useState } from 'react';
import { StartGame } from "./components/StartGame";
import { Game } from "./components/Game";

function App() {
  const [hasGameStarted, setHasGameStarted] = useState(false)
  return hasGameStarted ? <Game /> : <StartGame onStart={() => setHasGameStarted(true)} />

}
export default App;
