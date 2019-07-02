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

//Check de la conditions de distance entre les deux joueurs
function checkPlayerCondition (player, elt, i) {
  let playerCondition = 'false';
  if (((player.positionX != (elt[i].positionX) - 1) && (player.positionY != (elt[i].positionY) - 1)) &&
        ((player.positionX != elt[i].positionX) && (player.positionY != (elt[i].positionY) - 1)) &&
        ((player.positionX != (elt[i].positionX) + 1) && (player.positionY != (elt[i].positionY) - 1)) &&
        ((player.positionX != (elt[i].positionX) - 1) && (player.positionY != elt[i].positionY)) &&
        ((player.positionX != (elt[i].positionX) + 1) && (player.positionY != elt[i].positionY)) &&
        ((player.positionX != (elt[i].positionX) - 1) && (player.positionY != (elt[i].positionY) + 1)) &&      
        ((player.positionX != elt[i].positionX) && (player.positionY != (elt[i].positionY) + 1)) &&
        ((player.positionX != (elt[i].positionX) + 1) && (player.positionY != (elt[i].positionY) + 1))) {
          playerCondition = 'true';
  }
  return playerCondition;
}

// Check du placement des armes et des joueurs afin qu'ils ne soient pas bloqués par les murs
function checkWallCondition (elt, i, width) {
  let wallCondition = 'false';
  
  if ((width < i) && (i < ((width * width) - (width +1)))) { // correspond a la map moins les cases en bordures
    if ((elt[i+1].type != 'wall') &&
        (elt[i-1].type != 'wall') &&
        (elt[i+width].type != 'wall') &&
        (elt[i-width].type != 'wall')) {
          wallCondition = 'true';
    }
  } else if (0 < i < (width - 1)) { // correspond à la première ligne moins sa première et dernière case
      if (elt[i+width].type != 'wall'){
          wallCondition = 'true';
      }
  } else if (((width * width) - (width +1)) < i < ((width * width) - 1)) { // correspond à la dernière ligne moins sa première et dernière case
      if (elt[i-width].type != 'wall'){
          wallCondition = 'true';
      }
  } else if (i % width === 0) { // correspond à la première colonne
      if (elt[i+1].type != 'wall') {
          wallCondition = 'true';
      }
  } else if (i % width === (width-1)) { // correspond à la dernière colonne
      if (elt[i-1].type != 'wall') {
          wallCondition = 'true';
      }    
  } return wallCondition;
}
 
    
    
    
    
    
    
    
    
    