import React from "react";
import List from "./List";
function GroceryList(props) {
    return (
    <div>
      <List key={props.id} value={props} handleClick={props.handleClick} />
    </div>
  );
}
export default GroceryList;
