// Randomize a number
function randomNb(x) {
  return Math.floor(Math.random() * x);
}

// User map width choice
function MapWidth() {
  const listSizeElem = document.getElementById('mapSize');
  let listSize = listSizeElem.selectedIndex;
  let mapWidth;   
  if (listSize === 0) {
    mapWidth = 10;
  } else if (listSize === 1) {
    mapWidth = 12;
  }
  return mapWidth;
}

// Return wall number depending on map width
function WallNumber() {
  const listSizeElem = document.getElementById('mapSize');
  let listSize = listSizeElem.selectedIndex;
  let wallNumber;  
  if (listSize === 0) {
    wallNumber = 10;
  } else if (listSize === 1) {
    wallNumber = 15;
  }
  return wallNumber;
}

// Adjust square size depending on map width
function SquareSize() {
  const listSizeElem = document.getElementById('mapSize');
  let listSize = listSizeElem.selectedIndex;
  let squareSize;  
  if (listSize === 0) {
    squareSize = 30;
  } else if (listSize === 1) {
    squareSize = 25;
  }
  return squareSize;
}

// Check distance between the two players
function checkPlayerCondition (player, elt, i) {
  let playerCondition = false;
  if (((player.positionX !== (elt[i].positionX) - 1) && (player.positionY !== (elt[i].positionY) - 1)) &&
        ((player.positionX !== elt[i].positionX) && (player.positionY !== (elt[i].positionY) - 1)) &&
        ((player.positionX !== (elt[i].positionX) + 1) && (player.positionY !== (elt[i].positionY) - 1)) &&
        ((player.positionX !== (elt[i].positionX) - 1) && (player.positionY !== elt[i].positionY)) &&
        ((player.positionX !== (elt[i].positionX) + 1) && (player.positionY !== elt[i].positionY)) &&
        ((player.positionX !== (elt[i].positionX) - 1) && (player.positionY !== (elt[i].positionY) + 1)) &&      
        ((player.positionX !== elt[i].positionX) && (player.positionY !== (elt[i].positionY) + 1)) &&
        ((player.positionX !== (elt[i].positionX) + 1) && (player.positionY !== (elt[i].positionY) + 1))) {
          playerCondition = true;
  }
  return playerCondition;
}

// Check walls around players and weapons
function checkWallCondition (elt, k, width) {
  let wallCondition = false;
  if ((width < k) &&
      (k < ((width * width) - (width +1))) &&
      ((k % width) !== 0) &&
      ((k % width) !== (width-1))) { // Match the whole map without the border squares
    if ((elt[k+1].type !== 'wall') &&
        (elt[k-1].type !== 'wall') &&
        (elt[k+width].type !== 'wall') &&
        (elt[k-width].type !== 'wall')) {
        wallCondition = true;
    }
  } else if ((k > 0) &&
             (k < (width - 1))) { // Match the first row without the first and last square
      if (elt[k+width].type !== 'wall') {
        wallCondition = true;
      }
  } else if ((k > ((width * width) - width)) &&
            (k < ((width * width) - 1))) { // Match the last row without the first and last square
      if (elt[k-width].type !== 'wall') {
        wallCondition = true;
      }
  } else if ((k % width) === 0) { // Match the first column
      if (elt[k+1].type !== 'wall') {
        wallCondition = true;
      }
  } else if ((k % width) === (width-1)) { // Match the last column
      if (elt[k-1].type !== 'wall') {
        wallCondition = true;
      }    
  } return wallCondition;
}
 
// Randomize the starting player
function selectActivePlayer() {
  let index = randomNb(players.length);
  activePlayer = players[index];
  if (activePlayer === playerOne) {
    playerOneBorder.style.border = '5px outset red';
  } else {
    playerTwoBorder.style.border = '5px outset blue';
    }
  return activePlayer;
}

// Switch the active player
function switchPlayer() {
    if (activePlayer === playerOne) {
      playerOneTurn.classList.add('hidden');
      activePlayer = playerTwo;
      playerOneBorder.style.border = 'hidden'; 
      playerTwoBorder.style.border = '5px outset blue';  
    } else if (activePlayer === playerTwo) {
				playerTwoTurn.classList.add('hidden');
        activePlayer = playerOne;
        playerTwoBorder.style.border = 'hidden'; 
        playerOneBorder.style.border = '5px outset red'; 
      } 
  activePlayer.steps = 3;
  refreshPlayers();
  return activePlayer;
}

// Players info refresh
function refreshPlayers() {
  document.getElementById('playerOneDamage').textContent = playerOne.power;
  document.getElementById('playerOneLife').textContent = playerOne.life;
  document.getElementById('playerOneStep').textContent = playerOne.steps;
  document.getElementById('playerOneWeaponName').textContent = playerOne.weapon.name;
  document.getElementById('playerOneWeaponImg').src = playerOne.weapon.skin2;
  if (playerOne.steps === 0) {
    document.getElementById('playerOneStepImg').src = 'img/smallNoStep.png';
  } else {
    document.getElementById('playerOneStepImg').src = 'img/smallStep.png';
    }
  document.getElementById('playerTwoDamage').textContent = playerTwo.power;
  document.getElementById('playerTwoLife').textContent = playerTwo.life;
  document.getElementById('playerTwoStep').textContent = playerTwo.steps;
  document.getElementById('playerTwoWeaponName').textContent = playerTwo.weapon.name;
  document.getElementById('playerTwoWeaponImg').src = playerTwo.weapon.skin2;
    if (playerTwo.steps === 0) {
    document.getElementById('playerTwoStepImg').src = 'img/smallNoStep.png';
  } else {
    document.getElementById('playerTwoStepImg').src = 'img/smallStep.png';
    }
}

// Weapon switch
function switchWeapon() {
  let dropWeapon = activePlayer.weapon;
  activePlayer.weapon = map.squareList[activePlayer.index].weapon;
  map.squareList[activePlayer.index].weapon = dropWeapon;
  activePlayer.power = activePlayer.weapon.damage;
  let weaponSwitch = new Audio('sounds/weaponSwitch.wav');
  weaponSwitch.play();
  if (weaponSwitchMessage === 0){
  alert(`Bravo, vous venez de ramasser votre première arme, 
        il vous suffit en effet de passer sur une case contenant une arme,
        pour la prendre et déposer celle que vous possédée!`);
    weaponSwitchMessage = 1;
    return weaponSwitchMessage;
  }
}
    
function target() {
  let target = null;
  if (activePlayer === playerOne) {
    target = playerTwo;
  } else {
    target = playerOne;
    }
  return target;
}    
 
function switchPlayerTurn() {
  menuOne.classList.toggle('hidden');
  menuTwo.classList.toggle('hidden');
}

function endTurnDisplay() {
	if (activePlayer === playerOne){
		playerOneTurn.classList.remove('hidden');
	} else {
		playerTwoTurn.classList.remove('hidden');
	}
}

// Cancel moving key
function disableKeyboard(event) {
  window.onkeydown = function(event){
  let e = event || window.event;
  let key = e.which || e.keyCode;
    if ((key < 41 &&
        key > 36) ||
        key === 65 ||
        key === 68 ||
        key === 81 ||
        key === 83 ||
        key === 87 ||
        key === 90 ||
        key === 97 ||
        key === 100 ||
        key === 113 ||
        key === 115 ||
        key === 119 ||
        key === 122
       ) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}

function victory(winner) {
  let gameOver = new Audio('sounds/gameOver.wav');
      log = (`${winner.name} a gagné! La partie est terminée`);
      clearLog();
      appendLogToDom(log, 'victory');
      gameOver.play();
      setTimeout("location.reload(true);",2500);
}