console.log("################################################");
console.log("####################opdracht 1##################");
console.log("################################################");

const addTheWordCool = function (array) {
  array.push("cool");
  return array;
};

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

console.log("################################################");
console.log("####################opdracht 2##################");
console.log("################################################");

let amountOfElementsInArray = function (array) {
  return array.length;
};

console.log(
  "de array is " +
    amountOfElementsInArray(["appels", "peren", "citroenen"]) +
    " elementen groot"
);

console.log("################################################");
console.log("####################opdracht 3##################");
console.log("################################################");

const selectBelgiumFromBenelux = function (array) {
  return array[0];
};
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));

console.log("################################################");
console.log("####################opdracht 4##################");
console.log("################################################");

const lastElementInArray = function (array) {
  return array[array.length - 1];
};
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

console.log("################################################");
console.log("####################opdracht 5##################");
console.log("################################################");

const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function (array) {
  array = array.slice(1);
  return array;
};
const impeachTrumpSplice = function (array) {
  array = array.splice(1);
  return array;
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

console.log("################################################");
console.log("####################opdracht 5##################");
console.log("################################################");

const stringsTogether = (array) => (array = array.join(" "));

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
//resultaat: "Winc Academy is leuk ;-}"

console.log("################################################");
console.log("####################opdracht 6##################");
console.log("################################################");

const combineArrays = function (array1, array2) {
  console.log(array1, array2);
  array = array1.concat(array2);
  return array;
};

console.log(combineArrays([1, 2, 3], [4, 5, 6]));
