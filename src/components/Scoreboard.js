import { useEffect } from "react";
import styles from "../styles/ScoreBoard.module.css";

const Scoreboard = ({
  currentScore,
  bestScore,
  clickedCards,
  setCurrentScore,
  setBestScore,
}) => {
  useEffect(() => {
    setCurrentScore((prevCurrentScore) =>
      clickedCards.length ? clickedCards.length : prevCurrentScore
    );

    setBestScore((prevBestScore) =>
      prevBestScore < clickedCards.length ? clickedCards.length : prevBestScore
    );
  }, [clickedCards, setCurrentScore, setBestScore]);

  return (
    <div className={styles.scoreboard}>
      <div className={styles.currentScore}>
        <h3>Current Score</h3>
        <p>{currentScore}</p>
      </div>
      <div className={styles.bestScore}>
        <h3>Best Score</h3>
        <p>{bestScore}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
