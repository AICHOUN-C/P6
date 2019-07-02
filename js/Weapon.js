// Définition de la classe arme
class Weapon {
  constructor (name, damage, skin, description) {
    this.name = name;
    this.skin = skin;
    this.positionX = null;
    this.positionY = null;
    this.damage = damage;
    this.description = description;
    this.holdByPlayer = false; // True si portée par un joueur, false si présent sur la map
  }
}