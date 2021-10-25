import React from "react";

class InputField extends React.Component {
  constructor(props) {
    super();
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
    console.log(this.state.inputValue);
  }

  render() {
    return (
      <div className="grocery-input-box">
        <p>Add Item</p>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        ></input>
        <button onClick={() => this.props.handleInput(this.state.inputValue)}>
          Voeg Toe
        </button>
      </div>
    );
  }
}

export default InputField;
