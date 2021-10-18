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
  }
  render() {
    console.log(this.state.shoppingListItems.title);
    return (
      <div>
        <ShoppingCart
          key={this.state.shoppingListItems.id}
          value={this.state.shoppingListItems.title}
        />
        <GroceryList
          key={this.state.groceryListItems.id}
          value={this.state.groceryListItems.title}
        />
      </div>
    );
  }
}
export default Container;
