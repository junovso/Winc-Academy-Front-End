import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super();
    this.state = props;
  }
  render() {
    return <ul>{this.props.value}</ul>;
  }
}

export default List;
