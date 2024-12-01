document.querySelector(".add__player-btn").addEventListener("click", function (e) {
    e.preventDefault();
  
    // Fetching input fields
    const playerName = document.getElementById("o-player-name").value.trim();
    const playerRating = document.getElementById("o-player-rating").value.trim();
    const playerPace = document.getElementById("o-player-pace").value.trim();
    const playerShooting = document.getElementById("o-player-shooting").value.trim();
    const playerPassing = document.getElementById("o-player-passing").value.trim();
    const playerDribbling = document.getElementById("o-player-dribbling").value.trim();
    const playerDefending = document.getElementById("o-player-defending").value.trim();
    const playerPhysical = document.getElementById("o-player-physical").value.trim();
  
    // Fetching dropdowns
    const playerNationality = document.getElementById("o-player-nationalite").value;
    const playerClub = document.getElementById("o-player-club").value;
    const playerLeague = document.getElementById("o-player-league").value;
    const playerPosition = document.getElementById("o-player-position").value;
  
    let isValid = true;
  
    // Validate name
    if (!validateName(playerName)) {
      alert("Player name should only contain letters and spaces.");
      isValid = false;
    }
  
    // Validate rating
    if (!validateRating(playerRating)) {
      alert("Rating should be a number between 1 and 100.");
      isValid = false;
    }
  
    // Validate dropdowns
    if (!validateDropdown(playerNationality, "Nationalite") ||
        !validateDropdown(playerClub, "Club") ||
        !validateDropdown(playerLeague, "League") ||
        !validateDropdown(playerPosition, "Position")) {
      alert("Please select a valid option for nationality, club, league, and position.");
      isValid = false;
    }
  
    // Validate attributes
    const attributes = [
      { value: playerPace, name: "Pace" },
      { value: playerShooting, name: "Shooting" },
      { value: playerPassing, name: "Passing" },
      { value: playerDribbling, name: "Dribbling" },
      { value: playerDefending, name: "Defending" },
      { value: playerPhysical, name: "Physical" },
    ];
  
    for (const attribute of attributes) {
      if (!validateAttribute(attribute.value)) {
        alert(`${attribute.name} should be a number between 1 and 100.`);
        isValid = false;
        break;
      }
    }
  
    // If all validations pass
    if (isValid) {
      alert("Player added successfully!");
      // Optionally, submit the form here
      // this.submit();
    }
  });
  
  // Validation functions
  function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
  }
  
  function validateRating(rating) {
    const ratingRegex = /^[1-9][0-9]?$|^100$/; // 1-100
    return ratingRegex.test(rating);
  }
  
  function validateDropdown(value, placeholder) {
    return value !== placeholder;
  }
  
  function validateAttribute(attribute) {
    const attributeRegex = /^[1-9][0-9]?$|^100$/; // 1-100
    return attributeRegex.test(attribute);
  }
  