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
        fight();
      } else {
        activePlayer.index = activePlayer.index - lenght;
        positionXY = positionXY - lenght;
        activePlayer.steps--;
        map.squareList[activePlayer.index].type = 'player';
        map.squareList[activePlayer.index].object = activePlayer;
        }
    } else {
      if (map.squareList[activePlayer.index + lenght].type === 'player') {
        fight();
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
  
  attack(activePlayer, target) {
    let damage = activePlayer.power - target.def;
    target.life = target.life - damage;
    log = `${activePlayer.name} a attaqué ${target.name} et lui a infligé ${damage} point de dégats!`;
      if (activePlayer === playerOne){
        appendLogToDom(log, 'red');
      } else {
        appendLogToDom(log, 'blue');
        }
    target.def = 0;
    refreshPlayers();
    if (target.life <= 0){
      alert(`${target.name}, n'a plus de points de vie, ${activePlayer.name} a gagné! La partie est terminée`);
    }
    switchPlayerTurn()
  }
  
  defend(activePlayer, target) {
    activePlayer.def = Math.floor(target.power/2);
    log = `${activePlayer.name} choisit de se défendre, ses prochains dégats subits seront réduit de ${activePlayer.def}.`;
    if (activePlayer === playerOne){
      appendLogToDom(log, 'red');
    } else {
      appendLogToDom(log, 'blue');
    }
    switchPlayerTurn()
  } 
}
