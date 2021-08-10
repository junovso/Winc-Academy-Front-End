let counter = 0;
const colors = ["red", "green", "blue", "grey", "orange"];
while (counter < colors.length) {
  let huidigekleur = colors[counter];
  counter++;
  console.log("kleur: " + huidigekleur);
}

// zelfde in for loop

for (let i = 0; i < colors.length; i++) {
  console.log("kleur: " + colors[i]);
}

colors.forEach((element) => console.log("kleur: " + element));
