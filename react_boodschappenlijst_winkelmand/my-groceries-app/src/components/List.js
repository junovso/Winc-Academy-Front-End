import React, { Component } from "react";
import ListItem from "./ListItem"
class List extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    console.log(this.props)
    //console.log(this.props.value.value[0])
    return <ul>
      <ListItem value={this.props} handleClick={this.props.handleClick}/>
      </ul>;
  }
}

export default List;

