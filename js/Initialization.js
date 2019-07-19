// Déclaration des variables inhérentes au canvas
let canvas = null;
let context = null;

// Création des armes
const weapon0 = new Weapon('Taser défensif',
                           10,
                           'img/smallWeapon1.png',
                           'img/mediumWeapon1.png',
                           'Arme par défaut du joueur');
const weapon1 = new Weapon('Couteau de combat',
                           20,
                           'img/smallWeapon2.png',
                           'img/mediumWeapon2.png',
                           'Une lame aiguisée');
const weapon2 = new Weapon('Desert Eagle',
                           30,
                           'img/smallWeapon3.png',
                           'img/mediumWeapon3.png',
                           'Pistoler 9mm');
const weapon3 = new Weapon('AK47',
                           40,
                           'img/smallWeapon4.png',
                           'img/mediumWeapon4.png',
                           'Fusil automtique très fiable et équipé d\'un chargeur haute capacité');
const weapon4 = new Weapon('Bazooka',
                           50,
                           'img/smallWeapon5.png',
                           'img/mediumWeapon5.png',
                           'L\'arme la plus puissante de l\'arsenal de l\'infanterie');

// Attribution de l'attribut true à l'arme par défaut
weapon0.holdByPlayer = true;

// Création des joueurs
const playerOne = new Player('Joueur 1');
const playerTwo = new Player('Joueur 2');

// Tableau contenant les joueurs
const players = [playerOne, playerTwo];
let activePlayer ;

// Création de variable pour contenir le choix de l'utilisateur sur le choix de la taille de map
let customMapWidth = MapWidth();
let customWallNumber = WallNumber();
let customSquareSize = SquareSize();
let map = null;

console.log (customMapWidth * customMapWidth);

function createMap() {

if ((playerOne.skin === null) || (playerTwo.skin === null)){
	alert (`Veuillez choisir un avatar pour chaque joueur`);
	console.log (`Au moins un des deux avatar est NULL`);

} else {
// Création de l'objet map
  map = new Map (customMapWidth * customMapWidth, customMapWidth, customWallNumber, customSquareSize);
	map.fillEmpty();
	map.addWall(customWallNumber);
    map.addWeapon(4);
    map.addPlayerOne();
	map.addPlayerTwo(); 
	map.display();
	selectActivePlayer();
	console.log(Object.values(playerOne));
	console.log(Object.values(playerTwo));
	console.log(Object.values(weapon0));
	console.log(Object.values(weapon1));
	console.log(Object.values(weapon2));
	console.log(Object.values(weapon3));
	console.log(Object.values(weapon4));
    alert(`La partie commence, c'est le tour de ` + activePlayer.name);
    movePlayer(map);
	}
} 