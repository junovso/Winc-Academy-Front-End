import React from "react";
import List from "./List";
function GroceryList(props) {
  return (
    <div>
      <List value={props.value} />
    </div>
  );
}
export default GroceryList;
