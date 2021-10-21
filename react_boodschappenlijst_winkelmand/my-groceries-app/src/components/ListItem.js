import React from "react";

function ListItem(props) {
  return (
    <li onClick={props.handleClick} value={props.value}>
      {props.title}
    </li>
  );
}
export default ListItem;
