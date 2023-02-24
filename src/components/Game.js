import { useState } from "react";

const Game = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="game">
      <div className="scoreboard">
        <div className="current-score">
          <p>Current Score</p>
          <p>{currentScore}</p>
        </div>
        <div className="best-score">
          <p>Best Score</p>
          <p>{bestScore}</p>
        </div>
      </div>
    </div>
  );
};

export default Game;
