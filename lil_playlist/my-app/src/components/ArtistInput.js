import React from "react";
const ArtistInput = (props) => {
  return (
    <input
      type="text"
      name="artist"
      className="form-control"
      placeholder="Artist..."
      height=""
      onChange={props.handleChange}
      value={props.value}
    ></input>
  );
};
export default ArtistInput;
