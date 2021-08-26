const huiswerkMaken = (vak, callback) => {
  setTimeout(function () {
    console.log("Ok, Ok, ik ga nu mijn" + vak + "huiswerk maken!");
    callback();
  }, 1000);
};

const klaarMetHuiswerk = () => {
  console.log("Kijk paps en mams, ik ben klaar met huiswerk!");
};

huiswerkMaken("wiskunde", klaarMetHuiswerk);
