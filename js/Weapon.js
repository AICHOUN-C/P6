// Définition de la classe arme
class Weapon {
  constructor (name, damage, skin, skin2, description) {
    this.name = name;
    this.skin = skin;
    this.skin2 = skin2;
    this.positionX = null;
    this.positionY = null;
    this.damage = damage;
    this.description = description;
  }
}