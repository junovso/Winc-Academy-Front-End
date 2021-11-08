import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span>ID</span>
          <span>title</span>
          <span>artist</span>
          <span>genre</span>
          <span>rating</span>
        </div>
      </nav>
      <div className="card bg-dark">
        <ul className="playlist">
          <ListItem
            id={props.value.id}
            value={props.value}
            handleDelete={props.handleDelete}
          />
        </ul>
        <p>Click on a song to remove it from your playlist!</p>
      </div>
    </div>
  );
};

export default List;
