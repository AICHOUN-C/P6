// Définition de la classe joueur
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
  
  move(positionXY, operator, lenght) {
    map.squareList[activePlayer.index].type = 'empty';
    map.squareList[activePlayer.index].object = null;
    if (operator === 'less') {
      if (map.squareList[activePlayer.index - lenght].type === 'player') {
        alert('Le combat commence !');
        // fight();
      } else {
        activePlayer.index = activePlayer.index - lenght;
        positionXY = positionXY - lenght;
        activePlayer.steps--;
        map.squareList[activePlayer.index].type = 'player';
        map.squareList[activePlayer.index].object = activePlayer;
        }
    } else {
      if (map.squareList[activePlayer.index + lenght].type === 'player') {
        alert('Le combat commence !');
        // fight();
      } else {
        activePlayer.index = activePlayer.index + lenght;
        positionXY = positionXY + lenght;
        activePlayer.steps--;
        map.squareList[activePlayer.index].type = 'player';
        map.squareList[activePlayer.index].object = activePlayer;
        }
      }
      if (map.squareList[activePlayer.index].weapon !== null){
        switchWeapon();
      }

      if (activePlayer.steps === 0){
        switchPlayer();
      }
        refreshPlayers();
        map.refresh();
  }
}
