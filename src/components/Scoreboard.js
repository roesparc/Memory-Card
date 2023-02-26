import { useEffect } from "react";

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
    <div className="scoreboard">
      <div className="current-score">
        <h3>Current Score</h3>
        <p>{currentScore}</p>
      </div>
      <div className="best-score">
        <h3>Best Score</h3>
        <p>{bestScore}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
