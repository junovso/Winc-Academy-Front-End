const API_KEY = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

async function getData() {
  const apiUrl =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY;
  try {
    let res = await fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log(data));
  } catch (err) {
    console.log(err);
  }
}
