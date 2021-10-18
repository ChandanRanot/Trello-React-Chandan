import React from "react";
import Card from "./card";

const Cards = ({ cards, onDelete }) => {
  return (
    <>
      {cards.map((c) => {
        return (
          <Card
            key={c.id}
            card={c}
            handleDelete={(cardId) => onDelete(cardId)}
          />
        );
      })}
    </>
  );
};

export default Cards;
