import React from "react";

function ListItem(props) {
  const { item, handleClick} = props;
  return (
    <li onClick={handleClick} id={item.id} value={item.value}>
      {item.title}
    </li>
  );
}
export default ListItem;
