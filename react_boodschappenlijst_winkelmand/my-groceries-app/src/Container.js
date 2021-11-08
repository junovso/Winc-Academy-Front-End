import React, { Component } from "react";
import ShoppingCart from "./components/ShoppingCart";
import GroceryList from "./components/GroceryList";
import DeleteButton from "./components/DeleteButton";
import InputField from "./components/InputField";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      groceryListItems: [
        { id: 1, title: "Appels", amount: 1 },
        { id: 2, title: "Aardappelen", amount: 1 },
        { id: 3, title: "Spinazie", amount: 1 },
        { id: 4, title: "Bonen", amount: 1 },
        { id: 5, title: "Braadworst", amount: 1 },
      ],
      shoppingListItems: [
        { id: 1, title: "Bonen", amount: 1 },
        { id: 2, title: "Aardappelen", amount: 1 },
        { id: 3, title: "Appels", amount: 1 },
        { id: 4, title: "Spinazie", amount: 1 },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addAmountToItem = this.addAmountToItem.bind(this);
    this.addItem = this.addItem.bind(this)
  }
  addAmountToItem(target) {
    console.log("this item is already in the list", target);
    this.setState((prevState) => ({
      shoppingListItems: prevState.shoppingListItems.map(item => {
        console.log(item)
      return item.title === target.title ? {...item, amount: item.amount + 1} : item
    })
 }))
  }

  addItem(target) {
    console.log("you tried to add an item which is not in shoppinglist already")
    const arrLength = this.state.shoppingListItems.length + 1;
    this.setState((prevState)=> ({
      shoppingListItems: [
        {id: arrLength, title: target.title, amount: 1},
        ...prevState.shoppingListItems
      ]
    }))
  
  }
  //changed prop to event and assigned value
  handleClick(event) {
    const target = event.target;
    console.log(target);
    if (this.state.shoppingListItems.some(e => e.title === target.title)) {
     this.addAmountToItem(target)
    } else {
      this.addItem(target)
    }
}

  handleDelete() {
    const emptyArray = [];
    this.setState({
      shoppingListItems: emptyArray,
    });
  }

  handleInput(item) {
    console.log("handled input", item);

    const arrLength = this.state.groceryListItems.length + 1;

    this.setState((prevState) => ({
      groceryListItems: [
        ...prevState.groceryListItems,
        { id: arrLength, title: item },
      ],
    }));
  }

  render(props) {
  
    return (
      <div class="box">
        <div>
          <p class="grocery-text"> Grocery Items: </p>
          <InputField handleInput={this.handleInput} />
          <div class="grocery-list">
            <GroceryList
              key={this.state.groceryListItems.id}
              itemList={this.state.groceryListItems}
              handleClick={this.handleClick}
            />
          </div>
          <p class="shopping-text"> Shopping List Items:</p>
          <div class="shopping-list">
            <ShoppingCart
              key={this.state.shoppingListItems.id}
              itemList={this.state.shoppingListItems}
              handleClick={this.handleClick}
            />
          </div>
          <DeleteButton handleDelete={this.handleDelete} />
        </div>
      </div>
    );
  }
}
export default Container;
