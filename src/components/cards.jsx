import React from "react";
import Card from "./card";

const Cards = ({ cards }) => {
  return (
    <>
      {cards.map((c) => {
        return <Card key={c.id} card={c} />;
      })}
    </>
  );
};

export default Cards;
