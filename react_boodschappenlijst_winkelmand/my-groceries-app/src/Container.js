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
  }
  //changed prop to event and assigned value
  handleClick(event) {
    const target = event.target;
    console.log(target);
    const arrLength = this.state.shoppingListItems.length + 1;

    this.state.shoppingListItems.filter((item) => {
      if (item.title === target.title) {
        // this.setState((prevState) => ({
        //   shoppingListItems: [
        //     { ...item, amount: prevState.amount + 1 },
        //     ...prevState.shoppingListItems,
        //   ],
        // }));
      } else {
        this.setState((prevState) => ({
          shoppingListItems: [
            { id: arrLength, title: target.title, amount: 1 },
            ...prevState.shoppingListItems,
          ],
        }));
      }
      console.log(this.state.shoppingListItems);
    });
  }

  handleDelete() {
    this.setState({
      shoppingListItems: [],
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
