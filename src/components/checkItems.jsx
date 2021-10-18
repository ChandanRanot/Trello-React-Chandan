import React from "react";
import CheckItem from "./checkItem";

const CheckItems = ({ checkItems, checkListId, onDelete }) => {
  return (
    <>
      {checkItems.map((item) => {
        return (
          <CheckItem
            key={item.id}
            checkItem={item}
            checkListId={checkListId}
            handleDelete={(checkItemId, checkListID) =>
              onDelete(checkItemId, checkListID)
            }
          />
        );
      })}
    </>
  );
};

export default CheckItems;
