import React from "react";

const ListItem = (props) => {
  const li = props.value.map((song) => {
    return (
      <li className="listItem" id={song.id} onClick={props.handleDelete}>
        <span>{song.id}</span>
        <span>{song.title}</span>
        <span>{song.artist}</span>
        <span>{song.genre}</span>
        <span> {song.rating}</span>
      </li>
    );
  });
  return li;
};
export default ListItem;
