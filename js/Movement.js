function movePlayer() {
  window.onkeydown = function(event){
  let e = event || window.event;
  let key = e.which || e.keyCode;
    
    switch(key) {
      case 38 : case 122 : case 119 : case 90 : case 87 : // Up arrow, z, w, Z, W
        if (activePlayer.index < map.width || map.squareList[activePlayer.index - map.width].type === 'wall') {
          console.log(`Déplacement impossible`);
          return false;
        } else {
          activePlayer.move('positionY', 'less', map.width)
          }
        break;
      case 40 : case 115 : case 83 : // Down arrow, s, S
        if (activePlayer.index >= ((map.width * map.width) - map.width) || map.squareList[activePlayer.index + map.width].type === 'wall') {
          console.log(`Déplacement impossible`);
          return false;
        } else {
            activePlayer.move('positionY', 'more', map.width)
          }
        break;
      case 37 : case 113 : case 97 : case 81 : case 65 : // Left arrow, q, a, Q, A
        if (activePlayer.index % map.width === 0 || map.squareList[activePlayer.index - 1].type === 'wall') {
          console.log(`Déplacement impossible`);
          return false;
        } else {
            activePlayer.move('positionX', 'less', 1);
          }
        break;
      case 39 : case 100 : case 68 : // Right arrow, d, D
        if (activePlayer.index % map.width === (map.width - 1) || map.squareList[activePlayer.index + 1].type === 'wall') {
          console.log(`Déplacement impossible`);
          return false;
        } else {
            activePlayer.move('positionX', 'more', 1)
          }
        break;
      default : 
        return true;
    }
    return false;
  }
}
