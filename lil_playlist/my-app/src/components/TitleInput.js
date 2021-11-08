import React from "react";
const TitleInput = (props) => {
  return (
    <input
      type="text"
      name="title"
      className="form-control"
      placeholder="Title..."
      onChange={props.handleChange}
      value={props.value}
    ></input>
  );
};
export default TitleInput;
