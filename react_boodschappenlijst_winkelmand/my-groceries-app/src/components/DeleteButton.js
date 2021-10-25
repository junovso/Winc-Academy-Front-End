import React from "react";

const DeleteButton = (props) => {
  return (
    <>
      <button onClick={props.handleDelete}>
        Delete everything from Shopping List
      </button>
    </>
  );
};

export default DeleteButton;
