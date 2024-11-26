const formation = document.querySelector("#formation");
const squadList = document.querySelector(".squad__list-content");
console.log(formation);


// Squad Formation
formation.addEventListener("change", (e) => {
  let target = e.target.value;

  switch (target) {
    case "433":
      squadList.style.gridTemplateAreas = `
         ". lat lat fat fat rat rat ."
          ". lcm lcm cdm cdm rcm rcm ."
          "lb lb clb clb crb crb rb rb"
          ". . . gk gk . . ."
          `;
    squadList.style.gridTemplateColumns = "repeat(8, 1fr)"
      break;
    case "442":
      squadList.style.gridTemplateAreas = `
          ". . lat lat fat fat . ."
          "lcm lcm cdm cdm rcm rcm rat rat"
          "lb lb clb clb crb crb rb rb"
          ". . . gk gk . . ."
          `;
          squadList.style.gridTemplateColumns = "repeat(8, 1fr)"
      break;
    case "343":
      squadList.style.gridTemplateAreas = `
          ". lat lat fat fat rat rat ."
          "lcm lcm cdm cdm rcm rcm crb crb"
          ". lb lb clb clb rb rb ."
          ". . . gk gk . . ."
          `;
          squadList.style.gridTemplateColumns = "repeat(8, 1fr)"
      break;
    case "352":
      squadList.style.gridTemplateAreas = `
          ". . . fat fat rat rat . . ."
          "lat lat lcm lcm cdm cdm rcm rcm crb crb"
          ". . lb lb clb clb rb rb . ."
          ". . . . gk gk . . . ."
          `;
          squadList.style.gridTemplateColumns = "repeat(10, 1fr)"
      break;
  }
});
