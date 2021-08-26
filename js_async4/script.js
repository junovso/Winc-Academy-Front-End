const optellen = function (...nummers) {
  return nummers.reduce((acc, num) => {
    return acc + num;
  });
};

console.log(optellen(1, 2, 3, 4, 5, 6));

const nummers = [10, 5, 30];

const plussen = function (num1, num2, num3) {
  return num1 + num2 + num3;
};

console.log(plussen(...nummers));

//Bij de 1e maakt het niet uit hoe groot de array is, dit is in veel gevallen handiger.
