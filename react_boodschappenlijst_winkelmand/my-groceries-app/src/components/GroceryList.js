import React from "react";
import List from "./List";
function GroceryList(props) {
  return (
    <div>
      <List value={props.value} onClick={props.handleClick} />
    </div>
  );
}
export default GroceryList;
