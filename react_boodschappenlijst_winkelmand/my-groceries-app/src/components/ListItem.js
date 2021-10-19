import React from "react";

function ListItem(props) {
  return <li onClick={props.handleClick}>{props.title}</li>;
}
export default ListItem;
