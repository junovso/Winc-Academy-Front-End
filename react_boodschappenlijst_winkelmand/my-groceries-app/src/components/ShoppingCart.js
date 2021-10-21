import React from "react";
import List from "./List";
function ShoppingCart(props) {
  return (
    <List key={props.value.id} shoppingCartList={props.value} handleClick={props.handleClick} />
  );
}
export default ShoppingCart;
