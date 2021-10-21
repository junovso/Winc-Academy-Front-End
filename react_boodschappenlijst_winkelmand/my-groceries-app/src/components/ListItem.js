import React from "react";

function ListItem(props) {
console.log(props.value.id)
  return (
    <li onClick={props.handleClick} key={props.id} value={props.title}>
      {props.title}
    </li>
  );
}
export default ListItem;
