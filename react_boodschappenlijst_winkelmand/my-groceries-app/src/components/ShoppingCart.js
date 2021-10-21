import React from "react";
import List from "./List";
function ShoppingCart(props) {
  
  return (
    <List key={props.itemList.id} shopItemList={props.itemList} handleClick={props.handleClick} />
  );
}
export default ShoppingCart;
