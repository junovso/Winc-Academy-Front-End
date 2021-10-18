import React, { Component } from "react";
import List from "./List";
function GroceryList(props) {
  return (
    <List
      key={props.groceryListItems.id}
      value={props.groceryListItems.title}
    />
  );
}
export default GroceryList;
