function square1(number1, number2) {
  nummer1 = number1 * number1;
  nummer2 = number2 * number2;
  number3 = nummer1 * nummer2;
  return number3;
}

console.log(square1(4, 5));

const square2 = function (number1, number2) {
  nummer1 = number1 * number1;
  nummer2 = number2 * number2;
  number3 = nummer1 * nummer2;
  return number3;
};

console.log(square2(4, 5));

const square3 = (number1, number2) => {
  nummer1 = number1 * number1;
  nummer2 = number2 * number2;
  number3 = nummer1 * nummer2;
  return number3;
};

console.log(square2(4, 5));
