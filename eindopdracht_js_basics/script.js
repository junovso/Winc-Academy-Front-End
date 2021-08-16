var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

// deze code is van w3schools
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
      // de 2 regels hier onder heb ik zelf toegevoegd om het menu te laten sluiten on click.
      dropdownContent.addEventListener("click", function () {
        dropdownContent.style.display = "none";
      });
    }
  });
}

const liRood = document.querySelector("#rood");
const liBlauw = document.querySelector("#blauw");
const liGroen = document.querySelector("#groen");
const liGeel = document.querySelector("#geel");
const body = document.getElementsByTagName("body")[0];

liRood.addEventListener("click", function () {
  body.className = "";
  body.classList.toggle("bg-rood");
});

liBlauw.addEventListener("click", function () {
  body.className = "";
  body.classList.toggle("bg-blauw");
});

liGroen.addEventListener("click", function () {
  body.className = "";
  body.classList.toggle("bg-groen");
});

liGeel.addEventListener("click", function () {
  body.className = "";
  body.classList.toggle("bg-geel");
});
