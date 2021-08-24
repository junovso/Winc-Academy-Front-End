const list = document.getElementById("movie-list");
const radioButtons = document.querySelectorAll("input.movie-radio");

const returnimdbUrl = (imdbId) => {
  return `https://www.imdb.com/title/${imdbId}`;
};

const addMoviesToDom = (movieList) => {
  list.innerHTML = "";
  const liArray = movieList.map((movie) => {
    //first make the li item this is the main element
    const li = document.createElement("li");
    //then make the a this is going to be inside the li and wraps the image
    const anchorTag = document.createElement("a");
    //assign the imdb url to the a href returnimdbUrl() returns this url based on the movie id
    anchorTag.href = returnimdbUrl(movie.imdbID);
    //create the image and assign the image url to the src
    const liImage = document.createElement("img");
    liImage.src = movie.Poster;

    //append image to the anchortag and anchortag to the listitem
    anchorTag.appendChild(liImage);
    li.appendChild(anchorTag);
    return li;
  });

  liArray.forEach((liElement) => {
    list.appendChild(liElement);
  });
};

const filterMovies = (wordInMovieTitle) => {
  const filterdArrayByWord = movies.filter((movie) =>
    movie.Title.includes(wordInMovieTitle)
  );
  addMoviesToDom(filterdArrayByWord);
};

const filterLatestMovies = () => {
  const filteredArrayByYear = movies.filter((movie) => movie.Year >= 2014);
  addMoviesToDom(filteredArrayByYear);
};

const handleOnChangeEvent = (event) => {
  switch (event.target.value) {
    case "latest-films":
      filterLatestMovies();
      break;
    case "avenger-films":
      filterMovies("Avenger");
      break;
    case "x-men-films":
      filterMovies("X-Men");
      break;
    case "princess-films":
      filterMovies("Princess");
      break;
    case "batman-films":
      filterMovies("Batman");
      break;
  }
};

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", (event) => {
    handleOnChangeEvent(event);
  });
});

addMoviesToDom(movies);
