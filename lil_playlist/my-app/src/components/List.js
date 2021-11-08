import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  return (
    <div>
      <div className="playlist-bar">
        <span>ID</span>
        <span>title</span>
        <span>artist</span>
        <span>genre</span>
        <span>rating</span>
      </div>
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
