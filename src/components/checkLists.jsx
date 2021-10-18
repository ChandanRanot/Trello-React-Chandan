import React from "react";
import CheckList from "./checkList";

const CheckLists = ({ checkLists, onDelete }) => {
  return (
    <>
      {checkLists.map((cl) => {
        return (
          <CheckList
            key={cl.id}
            checklist={cl}
            handleDelete={(checkListId) => onDelete(checkListId)}
          />
        );
      })}
    </>
  );
};

export default CheckLists;
