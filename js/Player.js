// Définition de la classe joueur
class Player {
  constructor(name) {
    this.name = name;
    this.skin = null;
    this.positionX = null;
    this.positionY = null;
		this.index = null;
    this.power = 10;
    this.def = 0;
    this.life = 100;
    this.steps = 3;
    this.weapon = null;
  }
}