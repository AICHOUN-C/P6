// Choix aléatoire d'un entier
function randomNb(x) {
  return Math.floor(Math.random() * x);
}

// Fonction renvoyant la largeur à l'objet map en fonction du choix de l'utilisateur
function MapWidth() {
  const listSizeElem = document.getElementById('mapSize');
  let listSize = listSizeElem.selectedIndex;
  let mapWidth;
    
  if (listSize === 0) {
    mapWidth = 10;
  } else if (listSize === 1) {
    mapWidth = 12;
  } else if (listSize === 2) {
    mapWidth = 14;
  }
  return mapWidth;
}

// Fonction renvoyant le nombre de mur en fonction de la taille de la map
function WallNumber() {
  const listSizeElem = document.getElementById('mapSize');
  let listSize = listSizeElem.selectedIndex;
  let wallNumber;
    
  if (listSize === 0) {
    wallNumber = 10;
  } else if (listSize === 1) {
    wallNumber = 15;
  } else if (listSize === 2) {
    wallNumber = 20;
  }
  return wallNumber;
}

// Reglage de la taille des cases de la map en fonction de la taille choisis
function SquareSize() {
  const listSizeElem = document.getElementById('mapSize');
  let listSize = listSizeElem.selectedIndex;
  let squareSize;
    
  if (listSize === 0) {
    squareSize = 30;
  } else if (listSize === 1) {
    squareSize = 25;
  } else if (listSize === 2) {
    squareSize = 21.4;
  }
  return squareSize;
}

// Check de la conditions de distance entre les deux joueurs
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

// Check du placement des armes et des joueurs afin qu'ils ne soient pas bloqués par les murs
function checkWallCondition (elt, k, width) {
  let wallCondition = false;
  //console.log ('elt =' + elt);
  console.log ('k = ' + k);
  console.log ('width =' + width);
  
  if ((width < k) &&
      (k < ((width * width) - (width +1))) &&
      ((k % width) !== 0) &&
      ((k % width) !== (width-1))) { // correspond a la map moins les cases en bordures
    if ((elt[k+1].type !== 'wall') &&
        (elt[k-1].type !== 'wall') &&
        (elt[k+width].type !== 'wall') &&
        (elt[k-width].type !== 'wall')) {
        wallCondition = true;
        console.log('condition 1');
    }
  } else if ((k > 0) &&
             (k < (width - 1))) { // correspond à la première ligne moins sa première et dernière case
      if (elt[k+width].type !== 'wall') {
        wallCondition = true;
        console.log('condition 2');
      }
  } else if ((k > ((width * width) - width)) &&
            (k < ((width * width) - 1))) { // correspond à la dernière ligne moins sa première et dernière case
      if (elt[k-width].type !== 'wall') {
        wallCondition = true;
        console.log('condition 3');
      }
  } else if ((k % width) === 0) { // correspond à la première colonne
      if (elt[k+1].type !== 'wall') {
        wallCondition = true;
        console.log('condition 4');
      }
  } else if ((k % width) === (width-1)) { // correspond à la dernière colonne
      if (elt[k-1].type !== 'wall') {
        wallCondition = true;
        console.log('condition 5');
      }    
  } return wallCondition;
}
 
// Fonction choisissant aléatoirement le joueur actif pour débuter la partie
function selectActivePlayer() {
  let index = randomNb(players.length);
  activePlayer = players[index];
  activePlayer.status = true;
  if (activePlayer === playerOne) {
    playerOneBorder.style.border = '5px outset red';
  } else {
    playerTwoBorder.style.border = '5px outset blue';
    }
  return activePlayer;
}

// Changement de joueur actif
function switchPlayer() {
    if (activePlayer === playerOne) {
        activePlayer = playerTwo;
        playerOneBorder.style.border = 'hidden'; 
        playerTwoBorder.style.border = '5px outset blue';  
    } else if (activePlayer === playerTwo) {
        activePlayer = playerOne;
        playerTwoBorder.style.border = 'hidden'; 
        playerOneBorder.style.border = '5px outset red'; 
    } console.log(`C'est le tour de ` + activePlayer.name);
      activePlayer.steps = 3;
      return activePlayer;
}

// Mise à jour des info joueur
function refreshPlayers() {
  // joueur 1
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
  // joueur 2
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

// Changement d'arme

function switchWeapon() {
  let dropWeapon = activePlayer.weapon;
  activePlayer.weapon = map.squareList[activePlayer.index].weapon;
  map.squareList[activePlayer.index].weapon = dropWeapon;
  activePlayer.power = activePlayer.weapon.damage;
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
  if (activePlayer === playerOne) {
        activePlayer = playerTwo;
        playerOneBorder.style.border = 'hidden'; 
        playerTwoBorder.style.border = '5px outset blue';  
    } else if (activePlayer === playerTwo) {
        activePlayer = playerOne;
        playerTwoBorder.style.border = 'hidden'; 
        playerOneBorder.style.border = '5px outset red'; 
    }
  menuOne.classList.toggle('hidden');
  menuTwo.classList.toggle('hidden'); 
}

//Désactivation des touches de déplacement :
function disableKeyboard(event) {
  window.onkeydown = function(event){
  // On récupère le code de la touche
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