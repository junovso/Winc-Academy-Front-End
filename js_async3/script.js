/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10. Log the result to the console.
*/

const testNum = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(num + " is groter dan 10!");
    } else {
      reject(num + " is gelijk aan of kleiner dan 10!");
    }
  });
};

testNum(3)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

testNum(9)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

testNum(25)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

const makeAllCaps = (woordenlijst) => {
  return new Promise((resolve, reject) => {
    if (
      woordenlijst.every((woord) => {
        return typeof woord === "string";
      })
    ) {
      resolve(
        sortWords(
          woordenlijst.map((woord) => {
            return woord.toUpperCase();
          })
        )
      );
    } else {
      reject("Not a string!");
    }
  });
};

const sortWords = (woordenlijst) => {
  return new Promise((resolve, reject) => {
    if (woordenlijst) {
      resolve(woordenlijst.sort());
    } else {
      reject("Een of meerdere woorden zijn geen strings!");
    }
  });
};

const theseAreWords = ["promise", "practice", "break"];
const theseAreNotWords = [1, "hello", 9];

makeAllCaps(theseAreWords)
  .then(sortWords(theseAreWords))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

makeAllCaps(theseAreNotWords)
  .then(sortWords(theseAreNotWords))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
