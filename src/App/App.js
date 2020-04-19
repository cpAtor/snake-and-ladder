import React from 'react';
import './App.css';
import { Clock } from "./clock/Clock";
import Board from "./Board/Board";
import Dice from './Dice/Dice'

function App() {
  return (
    <div className="App">
      <Clock />
      <div className="gameContainer">
        <Dice />
        <Board />
        <Dice />
      </div>
    </div>
  );
}

export default App;

