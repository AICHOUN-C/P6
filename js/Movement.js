function movePlayer() {
  window.onkeydown = function(event){
  // On récupère le code de la touche
  let e = event || window.event;
  let key = e.which || e.keyCode;
  let player = activePlayer;

    switch(key) {
      case 38 : case 122 : case 119 : case 90 : case 87 : // Flèche haut, z, w, Z, W
        moveToUp();
        //map.display();
        break;
      case 40 : case 115 : case 83 : // Flèche bas, s, S
        moveToDown();
        //map.display();
        break;
      case 37 : case 113 : case 97 : case 81 : case 65 : // Flèche gauche, q, a, Q, A
        moveToLeft();
        //map.display();
        break;
      case 39 : case 100 : case 68 : // Flèche droite, d, D
        moveToRight();
        //map.display();
        break;
      default : 
        //alert(key);
        // Si la touche ne nous sert pas, nous n'avons aucune raison de bloquer son comportement normal.
        return true;
    }
    return false;
  }
}

//Fonction de déplacement
function moveToLeft() {
  if (activePlayer.index % customMapWidth === 0) {
    return false;
  }
  activePlayer.index--;
  activePlayer.positionX--;
  return activePlayer.positionX;
}

function moveToUp() {
  if (activePlayer.index < customMapWidth) {
    return false;
  }
  activePlayer.index = activePlayer.index - customMapWidth;
  activePlayer.positionY--;
  return activePlayer.positionY;
}

function moveToRight() {
  if (activePlayer.index % customMapWidth === (customMapWidth - 1)) {
    return false;
  }
  activePlayer.index++;
  activePlayer.positionX++;
  return activePlayer.positionX;
}

function moveToDown() {
  if (activePlayer.index){
    return false;
  }
  activePlayer.index = activePlayer.index + customMapWidth;
  activePlayer.positionY = activePlayer.positionY + 1;
  return activePlayer.positionY;
}
    
 // fonction de rafraichissement de la map après déplacement
function refreshMap(originSquare, targetSquare, map) {
		
}

//Coordonnée de la case suivant le déplacement
function nextSquare(){
  let nextPosition = {
    'x' : this.positionX,
    'y' : this.positionY
  };
  
  switch(direction) {
		case direction.down : 
			nextPosition.y++;
			break;
		case direction.left : 
			nextPosition.x--;
			break;
		case direction.right : 
			nextPosition.x++;
			break;
		case direction.up : 
			nextPosition.y--;
			break;
	} return nextPosition;
}
