import React from "react";
import List from "./List";
function GroceryList(props) {
  return (
    <div>
      <List value={props.value} handleClick={props.handleClick} />
    </div>
  );
}
export default GroceryList;
