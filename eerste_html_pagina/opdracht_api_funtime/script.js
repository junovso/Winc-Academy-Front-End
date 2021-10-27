const FetchButton = document.getElementById("fetch");
const itemDiv = document.getElementById("item-div");
const itemImageBox = document.getElementById("item-image");

const getPokemon = async () => {
  FetchButton.disabled = true;
  const pokemon = await fetchData();

  if (!!pokemon) {
    itemImageBox.innerHTML = "";
    const itemImage = document.createElement("img");
    itemImage.src = pokemon.sprites.front_default;
    itemImageBox.appendChild(itemImage);
    itemDiv.innerHTML =
      "you have fetched <b> " +
      pokemon.name +
      "!</b> " +
      "<br> base experience: " +
      pokemon.base_experience;
  }
  FetchButton.disabled = false;
};

const fetchData = async () => {
  const randomPokemonId = Math.floor(Math.random() * (1 + 898 - 1));
  const URL = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;
  try {
    let res = await fetch(URL);
    res = await res.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};

FetchButton.addEventListener("click", getPokemon);
