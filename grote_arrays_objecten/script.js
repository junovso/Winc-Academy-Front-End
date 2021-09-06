const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const countryList = document.getElementById("country-list");
const mensenLijst = document.getElementById("mensen-lijst");

function showList() {
  mensenLijst.innerHTML = "";
  countries.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  countries.forEach((country) => {
    const li = document.createElement("li");
    li.innerHTML = `Landnaam: ${country.name} afkorting: ${country.code}`;
    countryList.appendChild(li);
  });
}

function getWomanList() {
  // removing all html from Exercise 1
  countryList.innerHTML = "";
  // alfabetic sorting
  mensen.sort((a, b) => a.name.localeCompare(b.name));
  // sorting on gender & age
  const theList = mensen.filter((mens) => {
    const date = new Date(mens.dob);
    return mens.gender === "f" && date <= new Date("01-01-1990");
  });

  function createPeopleList(mens) {
    const li = document.createElement("li");
    li.innerHTML = `naam: ${mens.name} achternaam: ${mens.lastname} geslacht: ${mens.gender} dob: ${mens.dob}`;
    const liImage = document.createElement("img");
    liImage.src = mens.pic;
    li.appendChild(liImage);
    mensenLijst.appendChild(li);
  }

  // creating the html
  theList.forEach((mens) => {
    const datum = mens.dob;
    const dagen = datum.split("-")[2];
    const maanden = datum.split("-")[1];
    if ((dagen < 20 && maanden < 2) || (dagen > 22 && maanden > 11)) {
      createPeopleList(mens);
    }
  });
}

button1.addEventListener("click", showList);
button2.addEventListener("click", getWomanList);
