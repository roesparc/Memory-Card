import { useCallback, useEffect, useState } from "react";
import cards from "../assets/cardData";

const shuffleCards = () => {
  const shuffled = cards.slice();

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const Game = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [randomCards, setRandomCards] = useState(shuffleCards());
  const [gameOver, setGameOver] = useState(false);
  const [newBestScore, setNewBestScore] = useState({
    isBestScore: false,
    score: 0,
  });

  const handleCardClick = useCallback((id) => {
    setClickedCards((prevClickedCards) =>
      prevClickedCards.includes(id) ? [] : [...prevClickedCards, id]
    );
  }, []);

  useEffect(() => {
    setCurrentScore((prevCurrentScore) =>
      clickedCards.length ? clickedCards.length : prevCurrentScore
    );

    setBestScore((prevBestScore) =>
      prevBestScore < clickedCards.length ? clickedCards.length : prevBestScore
    );
  }, [clickedCards]);

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
      setNewBestScore((prevBestScore) => ({
        ...prevBestScore,
        isBestScore: false,
      }));
    }
  }, [gameOver]);

  useEffect(() => {
    setRandomCards(shuffleCards());
  }, [currentScore]);

  return (
    <div className="game">
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

      <div
        className="game-over"
        style={gameOver ? { display: "block" } : { display: "none" }}
      >
        <h2>Game Over</h2>
        {newBestScore.isBestScore ? (
          <h3 className="new-best-score">New Best Score!</h3>
        ) : (
          <h3>Score</h3>
        )}
        <p>{currentScore}</p>
        <p>Best Score</p>
        <p>{bestScore}</p>
        <button onClick={() => setGameOver(false)}>Play Again</button>
      </div>

      <div className="cards">
        {randomCards.map((card) => (
          <div
            key={card.id}
            className="card"
            onClick={() => handleCardClick(card.id)}
          >
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
