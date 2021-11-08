import React, { Component } from "react";
import List from "./List";
import TitleInput from "./TitleInput";
import ArtistInput from "./ArtistInput";
import GenreInput from "./GenreInput";
import Rating from "./Rating";
import { Routes, Route, Link } from "react-router-dom";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      artist: "",
      genre: "",
      rating: 0,
      playlist: [],
    };
    this.handleChange = this.handleChange.bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  handleDelete(e) {
    console.log(e.target.id);
    const list = this.state.playlist;
    list.splice(
      list.findIndex(function (i) {
        return i.id == e.target.id;
      }),
      1
    );

    console.log(list);

    this.setState(() => ({
      playlist: list,
    }));
  }

  handleClick(e) {
    e.preventDefault();
    const arrLength = this.state.playlist.length + 1;
    this.setState((prevState) => ({
      playlist: [
        ...prevState.playlist,
        {
          id: arrLength,
          title: this.state.title,
          artist: this.state.artist,
          genre: this.state.genre,
          rating: this.state.rating,
        },
      ],
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="card bg-dark addsong">
          <div className="card-body">
            <form className="d-flex flex-row">
              <Link to="/About">About</Link>
              <TitleInput
                handleChange={this.handleChange}
                value={this.state.title}
              />
              <ArtistInput
                handleChange={this.handleChange}
                value={this.state.artist}
              />
              <GenreInput
                handleChange={this.handleChange}
                value={this.state.genre}
              />
              <Rating
                handleChange={this.handleChange}
                value={this.state.rating}
              />
              <button className="btn btn-secondary" onClick={this.handleClick}>
                Add to playlist
              </button>
            </form>
          </div>
        </div>

        <List value={this.state.playlist} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
export default Container;
