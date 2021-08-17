const button = document.querySelector("#mybutton");
const button2 = document.querySelector("#change-background");
const body = document.getElementsByTagName("body")[0];

console.log(body);
button.addEventListener("click", function () {
  alert("hi!");
});

const toggleColor = function () {
  body.classList.toggle("red-background");
};

button2.addEventListener("click", toggleColor);
