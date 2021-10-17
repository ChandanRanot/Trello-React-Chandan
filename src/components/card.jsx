import React from "react";

const Card = ({ card }) => {
  return <button className="btn btn-light btn-sm">{card.name}</button>;
};

export default Card;
