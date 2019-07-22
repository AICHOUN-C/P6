function movePlayer() {
  window.onkeydown = function(event){
  // On récupère le code de la touche
  let e = event || window.event;
  let key = e.which || e.keyCode;
    
    switch(key) {
      case 38 : case 122 : case 119 : case 90 : case 87 : // Flèche haut, z, w, Z, W
        if (activePlayer.index < map.width || map.squareList[activePlayer.index - map.width].type === 'wall') {
          console.log(`Déplacement impossible`);
          return false;
        } else {
          activePlayer.move(activePlayer.positionY, 'less', map.width)
          }
        break;
      case 40 : case 115 : case 83 : // Flèche bas, s, S
        if (activePlayer.index >= ((map.width * map.width) - map.width) || map.squareList[activePlayer.index + map.width].type === 'wall') {
          console.log(`Déplacement impossible`);
          return false;
        } else {
            activePlayer.move(activePlayer.positionY, 'more', map.width)
          }
        break;
      case 37 : case 113 : case 97 : case 81 : case 65 : // Flèche gauche, q, a, Q, A
        if (activePlayer.index % map.width === 0 || map.squareList[activePlayer.index - 1].type === 'wall') {
          console.log(`Déplacement impossible`);
          return false;
        } else {
            activePlayer.move(activePlayer.positionX, 'less', 1);
          }
        break;
      case 39 : case 100 : case 68 : // Flèche droite, d, D
        if (activePlayer.index % map.width === (map.width - 1) || map.squareList[activePlayer.index + 1].type === 'wall') {
          console.log(`Déplacement impossible`);
          return false;
        } else {
            activePlayer.move(activePlayer.positionX, 'more', 1)
          }
        break;
      default : 
        //alert(key);
        // Si la touche ne nous sert pas, nous n'avons aucune raison de bloquer son comportement normal.
        return true;
    }
    return false;
  }
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
