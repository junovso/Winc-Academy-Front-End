const genreList = document.getElementById("genre-list");
const myTopMovie = document.getElementById("my-top-movie");
const topRatedMoviesList = document.getElementById("top-rated-movies-list");

const populateGenreList = async function () {
  const genres = await getMovieGenres();

  genres.genres.forEach((genre) => {
    const li = document.createElement("li");
    li.innerHTML = `genre naam: ${genre.name} id: ${genre.id}`;
    genreList.appendChild(li);
  });
  console.log(genres);
};

populateGenreList();

const populateMyTopMovie = async function () {
  const movie = await getMyTopMovie();
  myTopMovie.innerHTML = movie.movie_results[0].title;
};

populateMyTopMovie();

const populateTopRatedMoviesList = async function () {};

populateTopRatedMoviesList();

// async function getMovieGenres() {
//   const getGenresData = async function () {
//     const genreData = await getData();
//     return genreData.genres;
//   };
// }

// getMovieGenres();

async function getTopRatedMovies() {
  const topRatedMovies = await getTopRatedFilms();
  const topRatedTitles = topRatedMovies.results.map((results) => results.title);
  console.log(topRatedTitles);
}
console.log(getTopRatedMovies());
