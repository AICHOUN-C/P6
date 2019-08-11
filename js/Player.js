class Player {
  constructor(name) {
    this.name = name;
    this.skin = null;
    this.positionX = null;
    this.positionY = null;
    this.index = null;
    this.weapon = weapon0;
    this.power = this.weapon.damage;
    this.def = 0;
    this.life = 100;
    this.steps = 3;
  }
  
  move(position, operator, lenght) {
    map.squareList[activePlayer.index].type = 'empty';
    map.squareList[activePlayer.index].object = null;
		let origin = activePlayer.index;
    if (operator === 'less') { // Moving to the left or upwards 
      if (map.squareList[activePlayer.index - lenght].type === 'player') {
        fight();
        return;
      } else {
        activePlayer.index = activePlayer.index - lenght;
        activePlayer.steps--;
        map.squareList[activePlayer.index].type = 'player';
        map.squareList[activePlayer.index].object = activePlayer;
          if (position === 'positionX') {
            activePlayer.positionX = activePlayer.positionX - 1;
          } else { activePlayer.positionY = activePlayer.positionY - 1 }
        }
    } else { // Moving to the right or downwards
      if (map.squareList[activePlayer.index + lenght].type === 'player') {
        fight();
        return;
      } else {
        activePlayer.index = activePlayer.index + lenght;
        activePlayer.steps--;   
        map.squareList[activePlayer.index].type = 'player';
        map.squareList[activePlayer.index].object = activePlayer;
          if (position === 'positionX') {
            activePlayer.positionX = activePlayer.positionX + 1;
          } else { activePlayer.positionY = activePlayer.positionY + 1 }
        }
      }
		 	let next = activePlayer.index
      if (map.squareList[activePlayer.index].weapon !== null){
        map.refreshBackGround(next);
        switchWeapon();
      }
      map.refreshBackGround(origin);
      map.refreshWeapon(origin);
      map.refreshPlayer(next);
			if (activePlayer.steps < 3) {
				endTurnDisplay();
			}
      if (activePlayer.steps === 0){
        switchPlayer();
      }
        refreshPlayers();  
  }
}
