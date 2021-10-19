import React, { Component } from "react";
import ShoppingCart from "./components/ShoppingCart";
import GroceryList from "./components/GroceryList";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      groceryListItems: [
        { id: 1, title: "Appels" },
        { id: 2, title: "Aardappelen" },
        { id: 3, title: "Spinazie" },
        { id: 4, title: "Bonen" },
      ],
      shoppingListItems: [
        { id: 1, title: "Bonen" },
        { id: 2, title: "Aardappelen" },
        { id: 3, title: "Appels" },
        { id: 4, title: "Spinazie" },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("Clicked!");
  }
  render() {
    const mappedGroceryListItems = this.state.groceryListItems.map((item) => (
      <GroceryList
        key={item.id}
        value={item.title}
        onClick={this.handleClick}
      />
    ));
    const mappedShoppingListItems = this.state.shoppingListItems.map((item) => (
      <ShoppingCart
        key={item.id}
        value={item.title}
        onClick={this.handleClick}
      />
    ));
    return (
      <div>
        <p> Grocery Items: </p>
        {mappedGroceryListItems}
        <p>Shopping List Items:</p>
        {mappedShoppingListItems}
      </div>
    );
  }
}
export default Container;
