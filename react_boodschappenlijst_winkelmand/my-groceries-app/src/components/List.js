import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super();
    this.state = props;
  }
  render() {
    return <ul onClick={this.props.handleClick}>{this.props.value}</ul>;
  }
}

export default List;
