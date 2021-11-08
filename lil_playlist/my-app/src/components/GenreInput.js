import React from "react";
const GenreInput = (props) => {
  return (
    <select
      name="genre"
      className="form-select"
      onChange={props.handleChange}
      value={props.value}
    >
      <option>Rock</option>
      <option>Hip-Hop</option>
      <option>R 'n B</option>
      <option>Reggae</option>
      <option>Oprah</option>
    </select>
  );
};
export default GenreInput;
