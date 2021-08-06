const age = 27;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Abraham";
const totalAmount = 0;

if (age >= 18) {
  document.write("Ouder dan 18");
} else {
  document.write("Helaas! je mag niet naar binnen.");
}

if (isFemale) {
  document.write("U bent een vrouw");
} else {
  document.write("U bent een man");
}

if (driverStatus == "bob") {
  document.write("U hebt niet gedronken en mag rijden!");
} else {
  document.write("Helaas, U hebt gedronken!");
}

if (age >= 18 && age <= 25) {
  document.write("U krijgt 50% korting!");
} else {
  document.write("U krijgt helaas geen korting!");
}

if (firstName === "Juno" || firstName === "Abraham") {
  document.write("U krijgt een gratis drankje");
} else {
  document.write("jij krijgt geen gratis drankje!");
}

if (totalAmount > 25) {
  document.write("U krijgt gratis (vega)bitterballen!");
} else if (totalAmount > 50) {
  document.write("U krijgt gratis nacho's!");
} else if (totalAmount >= 100) {
  document.write("U krijgt een gratis fles champagne!");
} else {
  document.write("Besteed €25 of meer voor een gratis extra'tje!");
}

/* ik heb hier gekozen voor document.write omdat ik in dit geval de browser heb gebruikt. ik ben ervan bewust dat console.log(""); hetzelfde resultaat heeft
maar dan in de Console */
