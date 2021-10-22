import React from "react";
import List from "./List";
function ShoppingCart(props) {
  
  return (
    //changed prop name to itemList
    <List key={props.itemList.id} itemList={props.itemList}  />
  );
}
export default ShoppingCart;
