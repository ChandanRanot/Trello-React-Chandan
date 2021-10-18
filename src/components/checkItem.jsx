import React from "react";

const CheckItem = ({ checkItem, checkListId, handleDelete }) => {
  return (
    <div className="d-flex justify-content-between">
      <div>
        {checkItem.state === "complete" ? (
          <input type="checkbox" defaultChecked />
        ) : (
          <input type="checkbox" />
        )}
        <span>{checkItem.name}</span>
      </div>
      <button
        className="btn btn-light btn-sm"
        onClick={() => handleDelete(checkItem.id, checkListId)}
      >
        X
      </button>
    </div>
  );
};

export default CheckItem;
