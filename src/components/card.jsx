import React from "react";

const Card = ({ card, handleDelete }) => {
  return (
    <>
      <div className="btn btn-light btn-sm">
        {card.name}
        <button
          onClick={() => handleDelete(card.id)}
          className="btn btn-light btn sm"
        >
          X
        </button>
      </div>
    </>
  );
};

export default Card;
