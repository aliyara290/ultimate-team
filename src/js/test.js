// let substitution = JSON.parse(localStorage.getItem("substitution")) || [];
//   const substitute = document.querySelector("#substitutes__list");

//   const positions = document.querySelectorAll(".squad__position");
//   positions.forEach((pos) => {
//     pos.classList.remove("active");
//     pos.innerHTML = "";
//   });

//   players.forEach((player) => {
//     let playerCard = document.createElement("div");
//     playerCard.className = "player__card-pic";
//     playerCard.setAttribute("draggable", "true");
//     playerCard.innerHTML = `
//       <img
//                     src="./images/card-templates/template-4.png"
//                     width="120px"
//                     alt=""
//                   />
//                   <div class="player__stats">
//                     <div class="player__picture">
//                       <img src="./images/players-pics/benzema.webp" alt="" />
//                     </div>
//                      <div class="player__setting">
//                       <div class="setting__icon">
//                         <svg
//                           id="Layer_1"
//                           data-name="Layer 1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 170.75 181.2"
//                           width="30px"
//                         >
//                           <defs>
//                             <style>
//                               .cls-1 {
//                                 fill: #4e28eb;
//                                 stroke: #fff;
//                                 stroke-width: 7px;
//                               }
//                               .cls-1,
//                               .cls-2 {
//                                 stroke-miterlimit: 10;
//                               }
//                               .cls-2,
//                               .cls-3 {
//                                 fill: #fff;
//                               }
//                               .cls-2 {
//                                 stroke: #231f20;
//                               }
//                             </style>
//                           </defs>
//                           <polygon
//                             class="cls-1"
//                             points="3.5 33.73 85.37 3.73 167.25 33.73 167.25 147.47 85.37 177.47 3.5 147.47 3.5 33.73"
//                           />
//                           <path
//                             class="cls-2"
//                             d="M100,68.13"
//                             transform="translate(-14.63 -9.4)"
//                           />
//                           <circle class="cls-3" cx="85.37" cy="62.6" r="9.18" />
//                           <circle class="cls-3" cx="85.37" cy="90.6" r="9.18" />
//                           <circle
//                             class="cls-3"
//                             cx="85.37"
//                             cy="118.6"
//                             r="9.18"
//                           />
//                         </svg>
//                       </div>
//                       <div class="edit__player-icon st__icon" data-id=${player.id}>
//                         <svg
//                           id="Layer_1"
//                           data-name="Layer 1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 106.05 105.56"
//                           width="13px"
//                         >
//                           <defs>
                          
//                           </defs>
//                           <path
//                             class="cls-1"
//                             d="M99.86,68.07"
//                             transform="translate(-46.97 -47.22)"
//                           />
//                           <path
//                             d="M153,66.05a11.29,11.29,0,0,1-3.55,5.45c-2.87,2.78-5.67,5.65-8.51,8.48-.26.26-.54.52-.74.71L118.67,59.13c.12-.12.34-.37.57-.6l8.12-8.12c4.27-4.25,10-4.25,14.25,0,2.65,2.63,5.24,5.3,7.92,7.9a10.76,10.76,0,0,1,3.5,5.47Z"
//                             transform="translate(-46.97 -47.22)"
//                           />
//                           <path
//                             d="M79.79,140.83c-7.06-7-14.22-14.18-21.3-21.26L113,65.15l21.25,21.26Z"
//                             transform="translate(-46.97 -47.22)"
//                           />
//                           <path
//                             d="M52.36,125.6,73.77,147l-6.14,1.51-17,4.12c-2.7.65-4.12-.68-3.52-3.38Q49.72,137.42,52.36,125.6Z"
//                             transform="translate(-46.97 -47.22)"
//                           />
//                         </svg>
//                       </div>
//                       <div class="delete__player-icon st__icon" data-id=${player.id}>
//                         <svg
//                           id="Layer_1"
//                           data-name="Layer 1"
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 105.68 136.12"
//                           width="10px"
//                         >
//                           <path
//                             class="cls-1"
//                             d="M100,68.13"
//                             transform="translate(-47.16 -31.94)"
//                           />
//                           <circle
//                             class="cls-2"
//                             cx="52.84"
//                             cy="40.06"
//                             r="9.18"
//                           />
//                           <circle
//                             class="cls-2"
//                             cx="52.84"
//                             cy="68.06"
//                             r="9.18"
//                           />
//                           <circle
//                             class="cls-2"
//                             cx="52.84"
//                             cy="96.06"
//                             r="9.18"
//                           />
//                           <path
//                             d="M119.15,31.94c1.92,2,3.9,3.95,5.75,6a4.53,4.53,0,0,0,3.81,1.56c7.49-.08,15,0,22.46,0h1.67v15H47.16v-15H48.7c7.84,0,15.68,0,23.53,0a2.74,2.74,0,0,0,2.21-.89c1.87-2,3.81-3.83,5.72-5.75a9.27,9.27,0,0,0,.7-.92Z"
//                             transform="translate(-47.16 -31.94)"
//                           />
//                           <path
//                             d="M54.65,62.29h90.69c0,.51.06.94.06,1.38q0,44.25,0,88.5c0,7.81-4.55,13.79-11.78,15.48a17.51,17.51,0,0,1-3.82.39q-29.78,0-59.55,0c-9,0-15.61-6.44-15.62-15.43q-.09-44.66,0-89.31C54.61,63,54.63,62.7,54.65,62.29Z"
//                             transform="translate(-47.16 -31.94)"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                     <div class="player__rating">
//                       <div class="player__rating-rate">${player.rating}</div>
//                       <div class="player__rating-position">${player.position}</div>
//                     </div>
//                     <div class="player__infos">
//                       <div class="player__infos-name">
//                         <span>${player.name}</span>
//                       </div>
//                       <div class="player__infos-stats">
//                         <ul>
//                           <li><span>PAC</span><span>${player.pace}</span></li>
//                           <li><span>SHO</span><span>${player.passing}</span></li>
//                           <li><span>PAS</span><span>${player.dribbling}</span></li>
//                           <li><span>DRI</span><span>${player.defending}</span></li>
//                           <li><span>DEF</span><span>${player.physical}</span></li>
//                           <li><span>PHY</span><span>${player.rating}</span></li>
//                         </ul>
//                       </div>
//                       <div class="player__infos-row">
//                         <ul>
//                           <li>
//                             <img
//                               src=./images/flags/countries/${player.nationalite}.png
//                               alt=""
//                               id="player__infos-nationalite"
//                             />
//                           </li>
//                           <li>
//                             <img
//                               src="./images/flags/leagues/${player.league}.png"
//                               alt=""
//                               id="player__infos-league"
//                             />
//                           </li>
//                           <li>
//                             <img
//                               src="./images/flags/clubs/${player.club}.png"
//                               alt=""
//                               id="player__infos-club"
//                             />
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//     `;

//     const playerPosition = (positionId, playerCard) => {
//       const positionElement = document.getElementById(positionId);
//       if (positionElement.classList.contains("active")) {
//         substitution.push(player);
//         console.log("Substitution players:", substitution);
//         substitute.innerHTML = "";
//       } else {
//         positionElement.classList.add("active");
//         positionElement.innerHTML = "";
//         positionElement.appendChild(playerCard);
//       }
//     };

//     switch (player.position) {
//       case "gk":
//         playerPosition("squad__gk", playerCard);
//         break;
//       case "clb":
//         playerPosition("squad__clb", playerCard);
//         break;
//       case "crb":
//         playerPosition("squad__crb", playerCard);
//         break;
//       case "lb":
//         playerPosition("squad__lb", playerCard);
//         break;
//       case "rb":
//         playerPosition("squad__rb", playerCard);
//         break;
//       case "rcm":
//         playerPosition("squad__rcm", playerCard);
//         break;
//       case "lcm":
//         playerPosition("squad__lcm", playerCard);
//         break;
//       case "am":
//         playerPosition("squad__cdm", playerCard);
//         break;
//       case "lw":
//         playerPosition("squad__lat", playerCard);
//         break;
//       case "rw":
//         playerPosition("squad__rat", playerCard);
//         break;
//       case "cf":
//         playerPosition("squad__fat", playerCard);
//         break;
//     }
//   });

//   substitution.forEach((subPlayer) => {
//     const subPlayerCard = document.createElement("div");
//     subPlayerCard.className = "sub__list-item";
//     subPlayerCard.setAttribute("draggable", "true");
//     subPlayerCard.innerHTML = `
//      <div class="sub__right-part">
//             <div class="player__id-pic">
//                 <img src="./images/players-pics/vini.png" alt="" />
//             </div>
//             <div class="player__id-rating">
//                 <span>${subPlayer.rating}</span>
//                 <span>${subPlayer.position}</span>
//             </div>
//             </div>
//             <div class="sub__left-part">
//             <div class="player__id-name">
//                 <span>${subPlayer.name}</span>
//             </div>
//             <div class="player__sub-stats">
//                 <ul>
//                 <li><span>PAC</span><span>${subPlayer.pace}</span></li>
//                 <li><span>SHO</span><span>${subPlayer.passing}</span></li>
//                 <li><span>PAS</span><span>${subPlayer.dribbling}</span></li>
//                 <li><span>DRI</span><span>${subPlayer.defending}</span></li>
//                 <li><span>DEF</span><span>${subPlayer.physical}</span></li>
//                 <li><span>PHY</span><span>${subPlayer.rating}</span></li>
//                 </ul>
//             </div>
//             <div class="player__sub-row">
//         <ul>
//         <li>
//         <img
//             src=./images/flags/countries/${subPlayer.nationalite}.png
//             alt=""
//             id="player__infos-nationalite"
//         />
//         </li>
//         <li>
//         <img
//             src="./images/flags/leagues/${subPlayer.league}.png"
//             alt=""
//             id="player__infos-league"
//         />
//         </li>
//         <li>
//         <img
//             src="./images/flags/clubs/${subPlayer.club}.png"
//             alt=""
//             id="player__infos-club"
//         />
//         </li>
//     </ul>
//         </div>
//             </div>      
//     `;
//     substitute.appendChild(subPlayerCard);
//     console.log("this is the sub players from the function last:", subPlayer);
//   });

document.addEventListener("DOMContentLoaded", function () {
    const containers = [
      ".defenders",
      ".midifielder",
      ".attackers",
      "#substitutes__list",
      ".goolkeeper"
    ];
  
    // Function to save player order
    function saveOrder() {
      const order = {};
      containers.forEach((selector) => {
        const container = document.querySelector(selector);
        if (container) {
          const players = [...container.querySelectorAll(".squad__player")];
          order[selector] = players.map((player) => player.dataset.id || player.id);
        }
      });
      localStorage.setItem("playerOrder", JSON.stringify(order));
    }
  
    // Function to restore player order
    function restoreOrder() {
      const savedOrder = JSON.parse(localStorage.getItem("playerOrder"));
      if (savedOrder) {
        Object.entries(savedOrder).forEach(([selector, playerIds]) => {
          const container = document.querySelector(selector);
          if (container) {
            playerIds.forEach((id) => {
              const player = document.querySelector(`[data-id="${id}"]`);
              if (player) {
                container.appendChild(player);
              }
            });
          }
        });
      }
    }
  
    // Initialize Sortable for all containers
    containers.forEach((selector) => {
      const container = document.querySelector(selector);
      if (container) {
        new Sortable(container, {
          animation: 350,
          chosenClass: "sortable-chosen",
          dragClass: "sortable-drag",
          group: "shared",
          swap: true,
          onSort: saveOrder, // Save order on sort
        });
      }
    });
  
    // Restore order on page load
    restoreOrder();
  
    
  });
  