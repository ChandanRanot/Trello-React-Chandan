import React from "react";

const List = ({ list, handleDelete }) => {
  return (
    <div className="card m-2">
      <div className="card-header d-flex justify-content-between">
        {list.name}
        <button
          onClick={() => handleDelete(list.id)}
          className="btn btn-danger btn-sm"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default List;
