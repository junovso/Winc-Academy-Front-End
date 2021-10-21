import React from "react";
import List from "./List";
function GroceryList(props) {
    return (
    <div>
      <List key={props.itemList.id} groceryItemList={props.itemList} handleClick={props.handleClick} />
    </div>
  );
}
export default GroceryList;
