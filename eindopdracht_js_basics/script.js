var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
      dropdownContent.addEventListener("click", function () {
        dropdownContent.style.display = "none";
      });
    }
  });
}

const lirood = document.querySelector("#rood");
const liblauw = document.querySelector("#blauw");
const ligroen = document.querySelector("#groen");
const ligeel = document.querySelector("#geel");
const body = document.getElementsByTagName("body")[0];

lirood.addEventListener("click", function () {
  body.classList.toggle("bg-rood");
});

liblauw.addEventListener("click", function () {
  body.classList.toggle("bg-blauw");
});

ligroen.addEventListener("click", function () {
  body.classList.toggle("bg-groen");
});

ligeel.addEventListener("click", function () {
  body.classList.toggle("bg-geel");
});
