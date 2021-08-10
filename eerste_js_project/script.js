let username = prompt("Please enter your name");
if (username != null) {
  alert("Hey " + username + "!");
}
let guessNumber = prompt("Please enter a number between 0 and 25");
const randomNumber = Math.floor(Math.random() * 25);
if (guessNumber != randomNumber) {
  alert("fout");
} else {
  alert("goed");
}
alert("Fijne dag " + username + "!");
