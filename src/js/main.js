const dropItems = document.querySelector("#sortable_cards");
document.addEventListener("DOMContentLoaded", function () {
  if (dropItems) {
    new Sortable(dropItems, {
      animation: 350,
      chosenClass: "sortable-chosen",
      dragClass: "sortable-drag",
      handle: ".squad__player",
      onSort: reportActivity
    });
  } else {
    console.error("#sortable_cards not found in the DOM");
  }

  const savedFormation = localStorage.getItem("formation");
  if (savedFormation) {
    formation.value = savedFormation; 
    updateFormationLayout(savedFormation); 
  }
});

function reportActivity() {
  console.log('The sort order has changed');
}

const formation = document.querySelector("#formation");
const squadList = document.querySelector(".squad__list-content");

// Squad Formation
formation.addEventListener("change", (e) => {
  const target = e.target.value;

  localStorage.setItem("formation", target); 
  
  updateFormationLayout(target);
});

function updateFormationLayout(target) {
  squadList.style.gridTemplateColumns = "repeat(8, 1fr)"; 

  switch (target) {
    case "433":
      squadList.style.gridTemplateAreas = `
        ". lat lat fat fat rat rat ."
        ". lcm lcm cdm cdm rcm rcm ."
        "lb lb clb clb crb crb rb rb"
        ". . . gk gk . . ."
      `;
      break;

    case "442":
      squadList.style.gridTemplateAreas = `
        ". . lat lat fat fat . ."
        "lcm lcm cdm cdm rcm rcm rat rat"
        "lb lb clb clb crb crb rb rb"
        ". . . gk gk . . ."
      `;
      break;

    case "343":
      squadList.style.gridTemplateAreas = `
        ". lat lat fat fat rat rat ."
        "lcm lcm cdm cdm rcm rcm crb crb"
        ". lb lb clb clb rb rb ."
        ". . . gk gk . . ."
      `;
      break;

    default:
      console.warn("Unknown formation selected:", target);
      break;
  }
}


let players = [];

const selectPosition = document.querySelector("#o-player-position");
const stateLabels = document.querySelectorAll(".player__state-inp label");
const defaultContent = Array.from(stateLabels).map(
  (label) => label.textContent
);

selectPosition.addEventListener("change", (e) => {
  let target = e.target;
  let getValue = target.value;

  if (getValue === "gk") {
    const convert = [
      "Diving",
      "Handling",
      "Kicking",
      "Reflexes",
      "Speed",
      "Positioning",
    ];
    stateLabels.forEach((label, index) => {
      if (index < convert.length) {
        label.textContent = convert[index];
      }
    });
  } else {
    stateLabels.forEach((label, index) => {
      label.textContent = defaultContent[index];
    });
  }
});

const getPlayerData = () => {
  const storedPlayers = localStorage.getItem("players");
  if (storedPlayers) {
    players = JSON.parse(storedPlayers);
  }
};

const savePlayers = () => {
  localStorage.setItem("players", JSON.stringify(players));
};

const playerForm = document.querySelector("#player__form");
playerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const player = {
    name: document.getElementById("o-player-name").value,
    nationalite: document.getElementById("o-player-nationalite").value,
    club: document.getElementById("o-player-club").value,
    league: document.getElementById("o-player-league").value,
    position: document.getElementById("o-player-position").value,
    pace: document.getElementById("o-player-pace").value,
    passing: document.getElementById("o-player-passing").value,
    dribbling: document.getElementById("o-player-dribbling").value,
    defending: document.getElementById("o-player-defending").value,
    physical: document.getElementById("o-player-physical").value,
    rating: document.getElementById("o-player-rating").value,
  };

  const existingPlayerIndex = players.findIndex(
    (p) => p.name === player.name
  );

  if (existingPlayerIndex !== -1) {
    players[existingPlayerIndex] = player;
  } else {
    players.push(player);
  }

  savePlayers();
  showPlayerCard();
  playerForm.reset();
});

const showPlayerCard = () => {
  const substitute = document.querySelector("#substitutes__list");
  substitute.innerHTML = "";

  const positions = document.querySelectorAll(".squad__position");
  positions.forEach((pos) => {
    pos.classList.remove("active");
    pos.innerHTML = "";
  });

  players.forEach((player) => {
    let playerCard = document.createElement("div");
    playerCard.className = "player__card-pic";
    playerCard.setAttribute("draggable", "true");
    playerCard.innerHTML = `
      <img
                    src="./images/card-templates/template-4.png"
                    width="120px"
                    alt=""
                  />
                  <div class="player__stats">
                    <div class="player__picture">
                      <img src="./images/players-pics/benzema.webp" alt="" />
                    </div>
                    <div class="player__rating">
                      <div class="player__rating-rate">${player.rating}</div>
                      <div class="player__rating-position">${player.position}</div>
                    </div>
                    <div class="player__infos">
                      <div class="player__infos-name">
                        <span>${player.name}</span>
                      </div>
                      <div class="player__infos-stats">
                        <ul>
                          <li><span>PAC</span><span>${player.pace}</span></li>
                          <li><span>SHO</span><span>${player.passing}</span></li>
                          <li><span>PAS</span><span>${player.dribbling}</span></li>
                          <li><span>DRI</span><span>${player.defending}</span></li>
                          <li><span>DEF</span><span>${player.physical}</span></li>
                          <li><span>PHY</span><span>${player.rating}</span></li>
                        </ul>
                      </div>
                      <div class="player__infos-row">
                        <ul>
                          <li>
                            <img
                              src=./images/flags/countries/${player.nationalite}.png
                              alt=""
                              id="player__infos-nationalite"
                            />
                          </li>
                          <li>
                            <img
                              src="./images/flags/leagues/${player.league}.png"
                              alt=""
                              id="player__infos-league"
                            />
                          </li>
                          <li>
                            <img
                              src="./images/flags/clubs/${player.club}.png"
                              alt=""
                              id="player__infos-club"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
    `;

    const subPlayerCard = document.createElement("div");
    subPlayerCard.className = "sub__list-item";
    subPlayerCard.setAttribute("draggable", "true");
    subPlayerCard.innerHTML = `
     <div class="sub__right-part">
            <div class="player__id-pic">
                <img src="./images/players-pics/vini.png" alt="" />
            </div>
            <div class="player__id-rating">
                <span>${player.rating}</span>
                <span>${player.position}</span>
            </div>
            </div>
            <div class="sub__left-part">
            <div class="player__id-name">
                <span>${player.name}</span>
            </div>
            <div class="player__sub-stats">
                <ul>
                <li><span>PAC</span><span>${player.pace}</span></li>
                <li><span>SHO</span><span>${player.passing}</span></li>
                <li><span>PAS</span><span>${player.dribbling}</span></li>
                <li><span>DRI</span><span>${player.defending}</span></li>
                <li><span>DEF</span><span>${player.physical}</span></li>
                <li><span>PHY</span><span>${player.rating}</span></li>
                </ul>
            </div>
            <div class="player__sub-row">
        <ul>
        <li>
        <img
            src=./images/flags/countries/${player.nationalite}.png
            alt=""
            id="player__infos-nationalite"
        />
        </li>
        <li>
        <img
            src="./images/flags/leagues/${player.league}.png"
            alt=""
            id="player__infos-league"
        />
        </li>
        <li>
        <img
            src="./images/flags/clubs/${player.club}.png"
            alt=""
            id="player__infos-club"
        />
        </li>
    </ul>
        </div>
            </div>      
    `;

    const playerPosition = (positionId, playerCard, subPlayerCard) => {
      const positionElement = document.getElementById(positionId);

      if (positionElement.classList.contains("active")) {
        // const currentPlayerCard = positionElement.querySelector(".player__card-pic");
        // if (currentPlayerCard) {
        //   // const subCard = document.createElement("div");
        //   // subCard.className = "sub__list-item";
        //   // subCard.innerHTML = currentPlayerCard.innerHTML;
        //   // substitute.appendChild(subCard);
        // }
        substitute.appendChild(subPlayerCard);
      } else {
        positionElement.classList.add("active");
        positionElement.innerHTML = "";
        positionElement.appendChild(playerCard);
      }
    };

    switch (player.position) {
      case "gk":
        playerPosition("squad__gk", playerCard, subPlayerCard);
        break;
      case "clb":
        playerPosition("squad__clb", playerCard, subPlayerCard);
        break;
      case "crb":
        playerPosition("squad__crb", playerCard, subPlayerCard);
        break;
      case "lb":
        playerPosition("squad__lb", playerCard, subPlayerCard);
        break;
      case "rb":
        playerPosition("squad__rb", playerCard, subPlayerCard);
        break;
      case "rcm":
        playerPosition("squad__rcm", playerCard, subPlayerCard);
        break;
      case "lcm":
        playerPosition("squad__lcm", playerCard, subPlayerCard);
        break;
      case "am":
        playerPosition("squad__cdm", playerCard, subPlayerCard);
        break;
      case "lw":
        playerPosition("squad__lat", playerCard, subPlayerCard);
        break;
      case "rw":
        playerPosition("squad__rat", playerCard, subPlayerCard);
        break;
      case "cf":
        playerPosition("squad__fat", playerCard, subPlayerCard);
        break;
      default:
        substitute.appendChild(subPlayerCard);
        break;
    }
  });
};

getPlayerData();
showPlayerCard();
