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
  
  moveLeft() {
  if (activePlayer.index % map.width === 0 || map.squareList[activePlayer.index - 1].type === 'wall') {
    console.log(`Déplacement impossible`);
    return false;
    } else if (map.squareList[activePlayer.index - 1].type === 'player') {
      alert('Le combat commence !');
      // fight();
      } else {
        map.squareList[activePlayer.index].type = 'empty';
        map.squareList[activePlayer.index].object = null;
        activePlayer.index--;
        activePlayer.positionX--;
        activePlayer.steps--;
        map.squareList[activePlayer.index].type = 'player';
        map.squareList[activePlayer.index].object = activePlayer;
        console.log('Deplacement vers la gauche de ' + activePlayer.name);
        }
      if (activePlayer.steps === 0){
      switchPlayer();
      }
  }

  moveUp() {
  if (activePlayer.index < map.width || map.squareList[activePlayer.index - map.width].type === 'wall') {
    console.log(`Déplacement impossible`);
    return false;
    } else if (map.squareList[activePlayer.index - map.width].type === 'player') {
      alert('Le combat commence !');
      // fight();
      } else {
      map.squareList[activePlayer.index].type = 'empty';
      map.squareList[activePlayer.index].object = null;
      activePlayer.index = activePlayer.index - map.width;
      activePlayer.positionY--;
      activePlayer.steps--;
      map.squareList[activePlayer.index].type = 'player';
      map.squareList[activePlayer.index].object = activePlayer;
      console.log('Deplacement vers le haut de ' + activePlayer.name);
      }
    //refreshPlayerInfo()
      if (activePlayer.steps === 0){
        switchPlayer();
        }
 }

  moveRight() {
  if (activePlayer.index % map.width === (map.width - 1) || map.squareList[activePlayer.index + 1].type === 'wall') {
    console.log(`Déplacement impossible`);
    return false;
    } else if (map.squareList[activePlayer.index + 1].type === 'player') {
      alert('Le combat commence !');
      // fight();
      } else {
    map.squareList[activePlayer.index].type = 'empty';
    map.squareList[activePlayer.index].object = null;
    activePlayer.index++;
    activePlayer.positionX++;
    activePlayer.steps--;
    map.squareList[activePlayer.index].type = 'player';
    map.squareList[activePlayer.index].object = activePlayer;
    console.log('Deplacement vers la droite de ' + activePlayer.name);
    }
    //refreshPlayerInfo()
    if (activePlayer.steps === 0){
    switchPlayer();
    }
  }

  moveDown() {
  if (activePlayer.index >= ((map.width * map.width) - map.width) || map.squareList[activePlayer.index + map.width].type === 'wall') {
    console.log(`Déplacement impossible`);
    return false;
    } else if (map.squareList[activePlayer.index + map.width].type === 'player') {
      alert('Le combat commence !');
      // fight();
      } else {
      console.log('Deplacement vers le bas de ' + activePlayer.name);
      map.squareList[activePlayer.index].type = 'empty';
      map.squareList[activePlayer.index].object = null;
      activePlayer.index = activePlayer.index + map.width;
      activePlayer.positionY = activePlayer.positionY + 1;
      activePlayer.steps--;
      map.squareList[activePlayer.index].type = 'player';
      map.squareList[activePlayer.index].object = activePlayer;
      }
    //refreshPlayerInfo();
    if (activePlayer.steps === 0){
    switchPlayer();
    }
  }
}