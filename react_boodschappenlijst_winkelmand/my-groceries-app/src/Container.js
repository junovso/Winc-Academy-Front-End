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
  handleClick(props) {
    console.log("clicked", props);
    const clickedItem = props.target.innerHTML;
    console.log(clickedItem);
  }
  render(props) {
    // const mappedGroceryListItems = this.state.groceryListItems.map((item) => (
    //   <GroceryList
    //     key={item.id}
    //     value={item.title}
    //     handleClick={this.handleClick}
    //   />
    // ));
    // const mappedShoppingListItems = this.state.shoppingListItems.map((item) => (
    //   <ShoppingCart
    //     key={item.id}
    //     value={item.title}
    //     handleClick={this.handleClick}
    //   />
    // ));

    // let count = this.state.groceryListItems.length
    // for (let i = 0; i < count; i++) {
    //   let groceryId = this.state.groceryListItems[i].id
    //   let groceryTitle = this.state.groceryListItems[i].title
    //   let shoppingCartId = this.state.shoppingListItems[i].id
    //   let shoppingCartTitle = this.state.shoppingListItems[i].title

    //   console.log(groceryId + groceryTitle + shoppingCartId + shoppingCartTitle) 
      
    // }
    
    return (
      <div class="box">
        <div class="grocery-list">
          <p class="grocery-text"> Grocery Items: </p>
          <GroceryList
          key={this.state.groceryListItems.id}
          itemList={this.state.groceryListItems}
          handleClick={this.handleClick}
          />
        </div>
        <div class="shopping-list">
          <p class="shopping-text"> Shopping List Items:</p>
          <ShoppingCart
          key={this.state.shoppingListItems.id}
         itemList={this.state.shoppingListItems}
         handleClick={this.handleClick}
       />
        </div>
      </div>
    );
  }
}
export default Container;
