import { useEffect, useState } from "react";
import cards from "../assets/cardData";

const GameOver = ({
  clickedCards,
  currentScore,
  bestScore,
  setCurrentScore,
  setClickedCards,
}) => {
  const [gameOver, setGameOver] = useState(false);
  const [playerWins, setPlayerWins] = useState(false);
  const [newBestScore, setNewBestScore] = useState({
    isBestScore: false,
    score: 0,
  });

  useEffect(() => {
    if (!clickedCards.length && currentScore) {
      setGameOver(true);

      if (bestScore > newBestScore.score)
        setNewBestScore({ isBestScore: true, score: bestScore });
    }
  }, [clickedCards, bestScore, currentScore, newBestScore]);

  useEffect(() => {
    if (!gameOver) {
      setCurrentScore(0);
      setNewBestScore((prevNewBestScore) => ({
        ...prevNewBestScore,
        isBestScore: false,
      }));
    }
  }, [gameOver, setCurrentScore]);

  useEffect(() => {
    if (clickedCards.length === cards.length) {
      setPlayerWins(true);
      setNewBestScore({ isBestScore: false, score: cards.length });
    }
  }, [clickedCards]);

  useEffect(() => {
    if (!playerWins) {
      setCurrentScore(0);
      setClickedCards([]);
    }
  }, [playerWins, setCurrentScore, setClickedCards]);

  return (
    <div className="game-over">
      <div
        id="overlay"
        style={
          playerWins || gameOver ? { display: "block" } : { display: "none" }
        }
      ></div>

      <div
        className="player-wins"
        style={playerWins ? { display: "block" } : { display: "none" }}
      >
        <h2>You Win!</h2>
        <h3>Score</h3>
        <p>{currentScore}</p>
        <button onClick={() => setPlayerWins(false)}>Play Again</button>
      </div>

      <div
        className="player-loses"
        style={gameOver ? { display: "block" } : { display: "none" }}
      >
        <h2>Game Over</h2>
        {newBestScore.isBestScore ? (
          <h3 className="new-best-score">New Best Score!</h3>
        ) : (
          <h3>Score</h3>
        )}
        <p>{currentScore}</p>
        <h3>Best Score</h3>
        <p>{bestScore}</p>
        <button onClick={() => setGameOver(false)}>Play Again</button>
      </div>
    </div>
  );
};

export default GameOver;
