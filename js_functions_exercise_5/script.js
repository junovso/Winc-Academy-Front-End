/*
 const ageChecker = function (age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

const helloWho = function (age) {
  const adult = ageChecker(age);
  if (adult == true) {
    console.log("Hello there!");
  } else {
    console.log("hey kiddo!");
  }
};

helloWho(19);
 */

/////////////////// opdracht 2 //////////////////////////

/*
const vat = function (price) {
  let priceWithVat = price * 0.21;
  return priceWithVat;
};

const priceCalculation = function (price) {
  let priceWithVat = price + vat(price);
  console.log("this is the price with VAT: " + priceWithVat);
};

priceCalculation(10);
*/

/////////////////// opdracht 4 //////////////////////////

const baseAndVat = function (price, percentage) {
  goodPercentage = percentage / 100 + 1;
  let priceWithoutVat = price / goodPercentage;
  let vatAmount = price - price / goodPercentage;
  return [priceWithoutVat, vatAmount];
};

const splitUpPrice = function (price, percentage) {
  let priceSplitUp = baseAndVat(price, percentage);
  console.log(
    " Price without VAT: " +
      priceSplitUp[0] +
      " VAT Amount in EUR " +
      priceSplitUp[1]
  );
};

splitUpPrice(1210, 21);
