import React, { Component } from "react";
import List from "./List";
function ShoppingCart(props) {
  return (
    <List
      key={props.shoppingListItems.id}
      value={props.shoppingListItems.title}
    />
  );
}
export default ShoppingCart;
