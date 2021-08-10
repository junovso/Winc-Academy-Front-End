const biggerThan = function (number) {
  if (number > 100) {
    return true;
  } else if (number <= 100) {
    return false;
  }
};

const resultaat = biggerThan(101);
console.log(resultaat);

/////////////////////////////////////////////////

//bouncer functie, ik kan maxVisitors ook toevoegen als een vd parameters.
const bouncerBot = function (currentVisitors, visitorsAge) {
  const maxVisitors = 100;

  if (currentVisitors < maxVisitors && visitorsAge >= 18) {
    const antwoord1 = "Welkom!";
    return antwoord1;
  } else if (currentVisitors < maxVisitors && visitorsAge < 18) {
    const antwoord2 = "Jij bent te jong!";
    return antwoord2;
  } else if (currentVisitors >= maxVisitors && visitorsAge >= 18) {
    const antwoord3 = "Je bent oud genoeg, maar helaas zijn wij vol.";
    return antwoord3;
  } else if (currentVisitors >= maxVisitors && visitorsAge < 18) {
    const antwoord4 = "Wij zijn vol en je bent te jong.";
    return antwoord4;
  }
};

const resultaat1 = bouncerBot(101, 18);
console.log(resultaat1);

////////////////////////////////////////////////

const average = function (num1, num2, num3, num4, num5) {
  const averageNum = (num1 + num2 + num3 + num4 + num5) / 5;
  return averageNum;
};

const gemiddelde = average(1, 4, 6, 7, 1);
console.log(Math.round(gemiddelde));
