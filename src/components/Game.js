import { useEffect, useState } from "react";
import cards from "../assets/cardData";

const Game = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [randomCards, setRandomCards] = useState(cards);

  useEffect(() => {
    const shuffled = cards.slice();

    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setRandomCards(shuffled);
  }, [currentScore]);

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

      <div className="cards">
        {randomCards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
