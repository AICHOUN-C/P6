// Création des armes
const weapon0 = new Weapon('Taser défensif', 10, 'img/smallWeapon1.png', 'Arme par défaut du joueur');
const weapon1 = new Weapon('Couteau de combat', 20, 'img/smallWeapon2.png', 'Une lame aiguisée');
const weapon2 = new Weapon('Desert Eagle', 30, 'img/smallWeapon3.png', 'Pistoler 9mm');
const weapon3 = new Weapon('AK47', 35, 'img/smallWeapon4.png', 'Fusil automtique très fiable et équipé d\'un chargeur haute capacité');
const weapon4 = new Weapon('Bazooka', 40, 'img/smallWeapon5.png', 'L\'arme la plus puissante de l\'arsenal de l\'infanterie');

// Attribution de l'attribut true a l'amr par défaut
weapon0.holdByPlayer = true;

// Création des joueurs
const playerOne = new Player('Joueur 1');
const playerTwo = new Player('Joueur 2');

// Création de variable pour contenir le choix de l'utilisateur sur le choix de la taille de map
let customMapWidth = MapWidth();
let customWallNumber = WallNumber();
let customSquareSize = SquareSize();

function createMap() {

if ((playerOne.skin === null) || (playerTwo.skin === null)){
	alert (`Veuillez choisir un avatar pour chaque joueur`);
	console.log (`check erreur`);

} else {
	// Création de l'objet map
	const map = new Map (customMapWidth * customMapWidth, customMapWidth, customWallNumber, customSquareSize);

	  map.fillEmpty();
	  map.addElement('wall', customWallNumber);
	  map.addElement('weapon', 4);
	  map.addElement('playerOne', 1);
	  map.addPlayerTwo(); 
	  map.display();
	  console.log(Object.values(playerOne));
	  console.log(Object.values(playerTwo));
	  console.log(Object.values(weapon0));
	  console.log(Object.values(weapon1));
	  console.log(Object.values(weapon2));
	  console.log(Object.values(weapon3));
	  console.log(Object.values(weapon4));

	}
} 