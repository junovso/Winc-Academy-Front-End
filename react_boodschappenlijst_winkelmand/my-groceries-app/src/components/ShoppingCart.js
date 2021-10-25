import React from "react";
import List from "./List";
function ShoppingCart(props) {
  return (
    //changed prop name to itemList
    <div>
      <List key={props.itemList.id} itemList={props.itemList} readOnly />
    </div>
  );
}
export default ShoppingCart;
