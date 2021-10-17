import React from "react";

import List from "./list";

const Lists = ({ lists }) => {
  return (
    <>
      {lists.map((l) => {
        return (
          <List
            key={l.id}
            list={l}
            // handleDelete={(listID) => onDelete(listID)}
          />
        );
      })}
    </>
  );
};

export default Lists;
