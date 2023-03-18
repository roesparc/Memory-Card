import { useState } from "react";
import Cards from "./Cards";
import GameOver from "./GameOver";
import Scoreboard from "./Scoreboard";
import styles from "../styles/Game.module.css";

const Game = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  return (
    <div className={styles.game}>
      <Scoreboard
        currentScore={currentScore}
        bestScore={bestScore}
        clickedCards={clickedCards}
        setCurrentScore={setCurrentScore}
        setBestScore={setBestScore}
      />

      <GameOver
        clickedCards={clickedCards}
        currentScore={currentScore}
        bestScore={bestScore}
        setCurrentScore={setCurrentScore}
        setClickedCards={setClickedCards}
      />

      <Cards currentScore={currentScore} setClickedCards={setClickedCards} />
    </div>
  );
};

export default Game;
