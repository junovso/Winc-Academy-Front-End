const removeButton = document.getElementById("remove-first-item-button");
const removeAllButton = document.getElementById("remove-all-button");
const bigFiveButtons = document.querySelectorAll(".big-five-button");
const animalList = document.getElementById("spotted-animals-list");

const bigFiveClick = function () {
  const animalName = this.innerHTML;
  console.log(animalName);

  addListItem(animalName);
};

const addListItem = function (animal) {
  const li = document.createElement("li");
  li.innerHTML = animal;
  animalList.appendChild(li);
};

bigFiveButtons.forEach((button) => {
  button.addEventListener("click", bigFiveClick);
});

const removeSpottedAnimal = function () {
  animalList.removeChild(animalList.childNodes[0]);
};

const removeAllSpottedAnimals = function () {
  animalList.innerHTML = "";
};

removeButton.addEventListener("click", removeSpottedAnimal);
removeAllButton.addEventListener("click", removeAllSpottedAnimals);
