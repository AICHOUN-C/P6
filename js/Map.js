class Weapon {
  constructor (name, damage, skin, description) {
      this.name = name;
      this.damage = damage;
      this.description = description;
      this.skin = skin;
      this.exist = false;
  }
}

class Player {
    constructor() {
        this.name = null;
        this.skin = null;
        this.positionX = null;
        this.positionY = null;
        this.power = 10;
        this.def = 0;
        this.life = 100;
        this.steps = 3;
        this.weapon = null;
    }
}

// Création des armes
const weapon1 = new Weapon('Couteau de combat', 20, 'img/smallWeapon2.png', 'Une lame aiguisée');
const weapon2 = new Weapon('Desert Eagle', 30, 'img/smallWeapon3.png', 'Pistoler 9mm');
const weapon3 = new Weapon('AK47', 35, 'img/smallWeapon4.png', 'Fusil automtique très fiable et équipé d\'un chargeur haute capacité');
const weapon4 = new Weapon('Bazooka', 40, 'img/smallWeapon5.png', 'L\'arme la plus puissante de l\'arsenal de l\'infanterie');

// Création des joueurs
const playerOne = new Player();
const playerTwo = new Player();


// Création de la classe map   
  class Map {
    constructor (size, width, wallNumber, squareSize){
      this.size = size;
      this.width = width;
      this.wallNumber = wallNumber;
      this.squareSize = squareSize;
      this.squareList = [];
    }
      
    fillEmpty() {
        for(let i=0; i < this.size; i++){
          this.squareList[i] = {
            squareNumber: i,
            type: 'empty',
            positionX: (i % this.width) +1,
            positionY: Math.trunc(i / this.width) + 1
          };
        } console.log (this.squareList);
    }
      
    getEmptySquare() {
      return this.squareList.filter(square => square.type === 'empty');
    }
    
    addElement(type, number) {
      for (let i = 0; i < number; i++ ){
        let square = this.getEmptySquare();
        let index = randomNb(square.length);
        square[index].type = type;       
        console.log(`${type} ajouté a lindex ${square[index].positionX} ${square[index].positionY}`);
        if (type === 'playerOne'){
          playerOne.positionX = square[index].positionX;
          playerOne.positionY = square[index].positionY;
        }
      }
    }

    addPlayerTwo() {
      for (let i = 0; i < 1; i++ ){
        let square = this.getEmptySquare();
        let index = randomNb(square.length);
          if (((playerOne.positionX != (square[index].positionX) - 1) && (playerOne.positionY != (square[index].positionY) - 1)) &&
          ((playerOne.positionX != square[index].positionX) && (playerOne.positionY != (square[index].positionY) - 1)) &&
          ((playerOne.positionX != (square[index].positionX) + 1) && (playerOne.positionY != (square[index].positionY) - 1)) &&
          ((playerOne.positionX != (square[index].positionX) - 1) && (playerOne.positionY != square[index].positionY)) &&
          ((playerOne.positionX != (square[index].positionX) + 1) && (playerOne.positionY != square[index].positionY)) &&
          ((playerOne.positionX != (square[index].positionX) - 1) && (playerOne.positionY != (square[index].positionY) + 1)) &&      
          ((playerOne.positionX != square[index].positionX) && (playerOne.positionY != (square[index].positionY) + 1)) &&
          ((playerOne.positionX != (square[index].positionX) + 1) && (playerOne.positionY != (square[index].positionY) + 1))) {
            console.log(`playerTwo ajouté a lindex ${square[index].positionX} ${square[index].positionY}`);
            playerTwo.positionX = square[index].positionX;
            playerTwo.positionY = square[index].positionY;
            square[index].type = 'playerTwo';
          } else i--;
      }
    }

    display() {
      //  Masquage de l'en-tête et da div de séléction de l'avatar
      $('header').addClass('hidden');
      $('div.avatarsSection').addClass('hidden');
      $('canvas').removeClass('hidden');

      // Création d'un élément canvas en 2D sans transparence pour accueillir la map  
      let canvas = document.getElementById('battleMap');
      let context = canvas.getContext('2d');
      const wallSrc = "img/smallWall.png";
      const weaponSrc =[weapon1.skin, weapon2.skin, weapon3.skin, weapon4.skin];
      var j = 0;
      
      context.fillStyle = '#b6d369';
      context.fillRect(0, 0, this.squareSize * this.width, this.squareSize * this.width);
      for (var i = 0; i < this.size; i++) {    
            context.strokeStyle = 'white';
            context.strokeRect((this.squareList[i].positionX - 1) * this.squareSize, (this.squareList[i].positionY -1) * this.squareSize, this.squareSize, this.squareSize);
                if (this.squareList[i].type === "wall") {
                    let canvasSquare = new Image();
                    canvasSquare.src = wallSrc;
                    const positionX = this.squareList[i].positionX;
                    const positionY = this.squareList[i].positionY;
                    const squareSize = this.squareSize;
                    canvasSquare.addEventListener('load', function() {
                    context.drawImage(canvasSquare, (positionX - 1) * squareSize + 1, (positionY -1 ) * squareSize, squareSize -2 , squareSize);
                    });
                } else if (this.squareList[i].type === "weapon") {
                    let canvasSquare = new Image();
                    canvasSquare.src = weaponSrc[j];
                    console.log(`Image arme ${weaponSrc[j]} définie`);
                    const positionX = this.squareList[i].positionX;
                    const positionY = this.squareList[i].positionY;
                    const squareSize = this.squareSize;
                    canvasSquare.addEventListener('load', function() {
                    context.drawImage(canvasSquare, (positionX - 1) * squareSize + 1, (positionY -1 ) * squareSize, squareSize -2 , squareSize);
                    });
                    j++;
                } else if (this.squareList[i].type === 'playerOne') {
                    let canvasSquare = new Image();
                    canvasSquare.src = playerOne.skin;
                    console.log(`Image joueur 1 ${playerOne} définie`);
                    const positionX = this.squareList[i].positionX;
                    const positionY = this.squareList[i].positionY;
                    const squareSize = this.squareSize;
                    canvasSquare.addEventListener('load', function() {
                    context.drawImage(canvasSquare, (positionX - 1) * squareSize + 1, (positionY -1 ) * squareSize, squareSize -2 , squareSize);
                    });
                } else if (this.squareList[i].type === 'playerTwo') {
                    let canvasSquare = new Image();
                    canvasSquare.src = playerTwo.skin;
                    console.log(`Image joueur 2 ${playerTwo} définie`);
                    const positionX = this.squareList[i].positionX;
                    const positionY = this.squareList[i].positionY;
                    const squareSize = this.squareSize;
                    canvasSquare.addEventListener('load', function() {
                    context.drawImage(canvasSquare, (positionX - 1) * squareSize + 1, (positionY -1 ) * squareSize, squareSize -2 , squareSize);
                    });
                  }
             }
    }
  }		
    
function createMap() {
    // Création de variable pour contenir le choix de l'utilisateur sur le choix de la taille de map
    let customMapWidth = MapWidth();
    let customWallNumber = WallNumber();
    let customSquareSize = SquareSize();
  
    const map = new Map (customMapWidth * customMapWidth, customMapWidth, customWallNumber, customSquareSize);

    map.fillEmpty();
    map.addElement('wall', customWallNumber);
    map.addElement('weapon', 4);
    map.addElement('playerOne', 1);
    map.addPlayerTwo(); 
    map.display();
    console.log(Object.values(playerOne));
    console.log(Object.values(playerTwo));
}      
