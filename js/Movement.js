class Player {
    constructor(name, skin) {
        this.name = document.getElementById('name').textContent;
        this.skin = document.getElementById('skin').src;
        this.power = 10;
        this.def = 0;
        this.life = 100;
        this.steps = 3;
        this.weapon = null;
    }
}

class Weapon {
    constructor (name, damage, skin) {
        this.name = name;
        this.damage = damage;
        this.skin = skin;
        this.exist = false;
    }
}

const playerOne = new Player (name, skin);
const playerTwo = new Player (name, skin);

const weapon1 = new Weapon ('arme1', 20, skin );
const weapon2 = new Weapon ('arme2', 25, skin);
const weapon3 = new Weapon ('arme3', 35, skin1);
const weapon4 = new Weapon ('arme4', 50, skin1);
