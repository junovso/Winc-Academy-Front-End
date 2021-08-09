let person = {
  name: "juno",
  age: 20,
  evaluations: [7, 10, 9],
};
// Zonder let's nog een keer te benoemen.
console.log(person);
console.log(person.name);
console.log(person.age);

// Met blok en . notatie
person.name = "Denny";
person["age"] = 17;

console.log(person);
console.log(person.name);
console.log(person.age);

console.log(person.evaluations);
// resultaat weergeeft de volledige array

let kleuren = ["rood", "groen", "blauw"];

//array zelf
console.log(kleuren);
//lengte van array
console.log(kleuren.length);
// eerste van array
console.log(kleuren[0]);
// laatste v/d arrau
const last = kleuren[kleuren.length - 1];
console.log(last);
// toevoegen aan array
kleuren.push("geel", "oranje");
console.log(kleuren);
// nummer toevoegen aan array
kleuren.push(3);
console.log(kleuren);

let eenobject = { greeting: "hi ik ben een object" };
kleuren.push(eenobject);
console.log(kleuren);
