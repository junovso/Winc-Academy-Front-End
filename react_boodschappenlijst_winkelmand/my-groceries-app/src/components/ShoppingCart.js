import React from "react";
import List from "./List";
function ShoppingCart(props) {
  return <List key={props.id} value={props.value} />;
}
export default ShoppingCart;
