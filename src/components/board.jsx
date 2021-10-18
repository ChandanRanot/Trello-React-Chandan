import React from "react";
import { Link } from "react-router-dom";

const Board = ({ board, handleClick }) => {
  return (
    <Link to={`/boards/${board.id}`} style={{ textDecoration: "none" }}>
      <button
        onClick={() => handleClick(board.id)}
        className="card m-2"
        style={{
          backgroundImage: `url(${board.prefs.backgroundImage})`,
          backgroundSize: "260px 200px",
          border: "none",
          backgroundColor: `${board.prefs.backgroundColor}`,
        }}
      >
        <div className="card-body">{board.name}</div>
      </button>
    </Link>
  );
};

export default Board;
