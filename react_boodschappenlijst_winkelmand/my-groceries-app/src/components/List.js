import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const items = this.state.groceryItems.map((item) => (
      <ListItem key={item.id} item={item} />
    ));
    return <ul>{items}</ul>;
  }
}

export default List;
