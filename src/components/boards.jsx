import React from "react";

import Board from "./board";

const Boards = ({ boards, getLists }) => {
  return (
    <>
      {boards.map((b) => {
        return (
          <Board
            key={b.id}
            board={b}
            handleClick={(id) => {
              getLists(id);
            }}
          />
        );
      })}
    </>
  );
};

export default Boards;
