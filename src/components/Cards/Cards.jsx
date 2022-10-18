import "./Cards.scss";
import { Card } from "./Card/Card";

const Cards = ({ cards }) => {
  console.log(cards);
  return (
    <article className="cardsImpulsos_container">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </article>
  );
};

export default Cards;
