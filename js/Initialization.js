// Weapon objet creation
const weapon0 = new Weapon('Taser défensif',
                           10,
                           'img/smallWeapon1.png',
                           'img/mediumWeapon1.png');
const weapon1 = new Weapon('Couteau de combat',
                           20,
                           'img/smallWeapon2.png',
                           'img/mediumWeapon2.png');
const weapon2 = new Weapon('Desert Eagle',
                           30,
                           'img/smallWeapon3.png',
                           'img/mediumWeapon3.png');
const weapon3 = new Weapon('AK47',
                           40,
                           'img/smallWeapon4.png',
                           'img/mediumWeapon4.png');
const weapon4 = new Weapon('Bazooka',
                           50,
                           'img/smallWeapon5.png',
                           'img/mediumWeapon5.png');

// Player object creation
const playerOne = new Player('Joueur 1');
const playerTwo = new Player('Joueur 2');

// Player table
const players = [playerOne, playerTwo];
let activePlayer ;

// Canvas variable
let canvas = null;
let context = null;

// Map setting variable declaration
let customMapWidth = null;
let customWallNumber = null;
let customSquareSize = null;
let map = null;

// Player border
const playerOneBorder = document.getElementById("playerOneAvatar");
const playerTwoBorder = document.getElementById("playerTwoAvatar");

// First weaponSwitch message variable
let weaponSwitchMessage = 0;

// Fight log variable
let log = null;
let menuOne = document.getElementById('playerOneMenu');
let menuTwo = document.getElementById('playerTwoMenu');
let playerOneTurn = document.getElementById('playerOneTurn');
let playerTwoTurn = document.getElementById('playerTwoTurn');

function createMap() {
if ((playerOne.skin === null) || (playerTwo.skin === null)){
	alert (`Veuillez choisir un avatar pour chaque joueur`);
  } else if (playerOneName.textContent === 'Joueur 1' ||
            playerOneName.textContent === '' ||
            playerTwoName.textContent === 'Joueur 2' ||
            playerTwoName.textContent === '' ||
            playerOneName.textContent === playerTwoName.textContent) {
    alert (`Veuillez choisir un pseudonyme different pour chaque joueur`);
    } else {
// Map object creation
  customMapWidth = MapWidth();
  customWallNumber = WallNumber();
  customSquareSize = SquareSize();
  map = new Map (customMapWidth * customMapWidth, customMapWidth, customWallNumber, customSquareSize);
	map.fillEmpty();
	map.addWall(customWallNumber);
  map.addWeapon(4);
  map.addPlayerOne();
	map.addPlayerTwo(); 
	map.display();
	selectActivePlayer();
  alert(`La partie commence, c'est le tour de ${activePlayer.name}!

    Pour vous déplacez utliser les touches :
    - Flèche haut, z ou w pour aller vers le haut.
    - Flèche bas ou s pour le bas.
    - Flèche gauche, q ou a pour la gauche.
    - Flèche droite ou d pour la droite.
    
    Pour ramasser une arme il suffit de passer dessus, le combat se déclenche dès que les joueurs sont sur des cases adjacentes.`);
  movePlayer(map);
	}
} 