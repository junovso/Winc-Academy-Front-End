import React from "react";

function ListItem(props) {
  const { item, handleClick } = props;
  return (
    <li
      className="list-item"
      onClick={handleClick}
      id={item.id}
      title={item.title}
    >
      {item.title} {props.readOnly ? item.amount : null}
    </li>
  );
}
export default ListItem;
