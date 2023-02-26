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

const Cards = ({ currentScore, setClickedCards }) => {
  const [randomCards, setRandomCards] = useState(shuffleCards());

  const handleCardClick = useCallback(
    (id) => {
      setClickedCards((prevClickedCards) =>
        prevClickedCards.includes(id) ? [] : [...prevClickedCards, id]
      );
    },
    [setClickedCards]
  );

  useEffect(() => {
    setRandomCards(shuffleCards());
  }, [currentScore]);

  return (
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
  );
};

export default Cards;
