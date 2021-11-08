import React from "react";
const Rating = (props) => {
  return (
    <select
      name="rating"
      className="form-select"
      onChange={props.handleChange}
      value={props.value}
    >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  );
};
export default Rating;
