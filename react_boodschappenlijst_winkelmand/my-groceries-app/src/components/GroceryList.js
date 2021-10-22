import React from "react";
import List from "./List";
function GroceryList(props) {
    return <List key={props.itemList.id} itemList={props.itemList} handleClick={props.handleClick} /> 
    //changed prop name to itemList

    
  ;
}
export default GroceryList;
