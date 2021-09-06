const API_KEY = "e91101a131169ae2c0bd0de393df9ee4";

// async function getData() {
//   const apiUrl =
//     "https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY;
//   try {
//     let res = await fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   } catch (err) {
//     console.log(err);
//   }
// }


async function getMovieGenres() {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  try {
    let res = await fetch(apiUrl);
    res = await res.json();
    return res;
  } catch (err) {
    //handle error?
    console.log(err);
  }
}

async function getMyTopMovie() {
  const imdbId = "tt6105098";
  const apiUrl = `https://api.themoviedb.org/3/find/${imdbId}?api_key=${API_KEY}&external_source=imdb_id`;
  try {
    let res = await fetch(apiUrl);
    res = await res.json();
    return res;
  } catch (err) {
    //handle error?
    console.log(err);
  }
}

 async function getTopRatedFilms() {
   const apiUrl =
     "https://api.themoviedb.org/3/movie/top_rated/?api_key=" + API_KEY;
   try {
     const res = await fetch(apiUrl);
     return await res.json();
   } catch (err) {
     console.log(err);
   }
 }

async function getTopRatedActionMovies() {}
