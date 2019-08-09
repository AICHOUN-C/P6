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
  return activePlayer;
}