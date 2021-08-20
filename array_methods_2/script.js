const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

const findSpiderMan = (array) =>
  array.find((item) => item.name === "Spiderman");

console.log(findSpiderMan(superheroes));

// Opdracht 2
const doubleArrayValues = (array) => array.map((array) => array * 2);

console.log(doubleArrayValues([1, 2, 3]));

// Opdracht 3

const containsNumberBiggerThan10 = (array) => {
  return array.some((el) => el > 10);
};

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));
// result should be false

// Opdracht 4

const isItalyInTheGreat7 = (array) => array.includes("Italy");

console.log(
  isItalyInTheGreat7([
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States",
  ])
);
// result should be true

//Opdracht 5

const tenfold = (array) => array.map((el) => el * 10);

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]

//Opdracht 6

const isBelow100 = (array) => !array.some((el) => el > 100);

console.log(
  isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);
// result should be: false

//Opdracht 7

const bigSum = (array) => {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
};

console.log(
  bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234])
);
// result should be 1118
