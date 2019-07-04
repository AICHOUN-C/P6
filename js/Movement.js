function movePlayer () {
  window.onkeydown = function(event) {
  // On récupère le code de la touche
  var e = event || window.event;
  var key = e.which || e.keyCode;

  switch(key) {
    case 38 : case 122 : case 119 : case 90 : case 87 : // Flèche haut, z, w, Z, W
      moveUp(activePlayer);
      map.display();
      break;
    case 40 : case 115 : case 83 : // Flèche bas, s, S
      moveDown(activePlayer);
      map.display();
      break;
    case 37 : case 113 : case 97 : case 81 : case 65 : // Flèche gauche, q, a, Q, A
      moveLeft(activePlayer);
      map.display();
      break;
    case 39 : case 100 : case 68 : // Flèche droite, d, D
      moveRight(activePlayer);
      map.display();
      break;
    default : 
      //alert(key);
      // Si la touche ne nous sert pas, nous n'avons aucune raison de bloquer son comportement normal.
      return true;
  }

  return false;
  }
}