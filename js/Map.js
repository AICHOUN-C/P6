// Création de la classe map   
class Map {
  constructor (size, width, wallNumber, squareSize){
    this.size = size;
    this.width = width;
    this.wallNumber = wallNumber;
    this.squareSize = squareSize;
    this.squareList = [];
    this.arsenal = [weapon1, weapon2, weapon3, weapon4];
    this.tempo = [];
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
    
  addWall(number) {
    for (let i = 0; i < number; i++ ){
      let square = this.getEmptySquare();
      let index = randomNb(square.length);
      square[index].type = 'wall';       
      console.log(`un mur ajouté a lindex ${square[index].positionX} ${square[index].positionY}`);
      console.log(`avec pour indice ${square[index].squareNumber}`)
    }
  }

  addWeapon(number) {

    const square = this.squareList;
    for (let i = 0; i < number; i++ ){  
      let index = randomNb(square.length);
      let wallCondition = checkWallCondition (square, index, customMapWidth);
      if ((square[index].type === 'empty') && (wallCondition === true)){
          square[index].type = 'weapon';
          this.tempo[i % number] = index;
      } else i--;
    } 
    this.tempo.sort(function(a, b) {
      return a - b;
    });
    for (let j = 0; j < number; j++){
      this.arsenal[j % number].positionX = square[this.tempo[j]].positionX;
      this.arsenal[j % number].positionY = square[this.tempo[j]].positionY;
      console.log(`Arme ajouté a lindex ${square[this.tempo[j]].positionX} ${square[this.tempo[j]].positionY}`);
      console.log(`avec pour indice ${square[this.tempo[j]].squareNumber}`);
      console.log(Object.values(this.arsenal[j % number]));
    }  
    
  } 
  
  addPlayerOne() {
    var i = 0;
    do {
      let square = this.squareList;
      let index = randomNb(square.length);
      let wallCondition = checkWallCondition (square, index, this.width);
      
      if ((square[index].type === 'empty') && (wallCondition === true)){
        console.log(`playerOne ajouté a lindex ${square[index].positionX} ${square[index].positionY}`);
        playerOne.positionX = square[index].positionX;
        playerOne.positionY = square[index].positionY;
        square[index].type = 'playerOne';
        i = 1;
        console.log (index);
        }
      } while (i < 1);
  }
  
  addPlayerTwo() {
    var i = 0;
    do {
      let square = this.squareList;
      let index = randomNb(square.length);
      let playerCondition = checkPlayerCondition (playerOne, square, index);
      let wallCondition = checkWallCondition (square, index, this.width);
      
      if ((square[index].type === 'empty') && (playerCondition === true) && (wallCondition === true)){
        console.log(`playerTwo ajouté a lindex ${square[index].positionX} ${square[index].positionY}`);
        playerTwo.positionX = square[index].positionX;
        playerTwo.positionY = square[index].positionY;
        square[index].type = 'playerTwo';
        i = 1;
        console.log (index);
        }
      } while (i < 1);
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
  var j = 0;

  context.fillStyle = '#b6d369';
  context.fillRect(0, 0, this.squareSize * this.width, this.squareSize * this.width);
    for (var i = 0; i < this.size; i++) {    
      context.strokeStyle = 'white';
      context.strokeRect((this.squareList[i].positionX - 1) * this.squareSize, (this.squareList[i].positionY -1) * this.squareSize, this.squareSize, this.squareSize);
      let canvasSquare = new Image();
        
      switch (this.squareList[i].type) {
      	case 'wall' :
						canvasSquare.src = wallSrc;
						break;
				case 'weapon' :
						canvasSquare.src = this.arsenal[j].skin;
						console.log(`Image arme ${this.arsenal[j].name} définie`);
						j++;
						break;
				case 'playerOne':
						canvasSquare.src = playerOne.skin;
						playerOne.index = i;
						console.log(`Image ${playerOne.name} définie à l'index ${playerOne.index}`);
						break;
				case 'playerTwo':
						canvasSquare.src = playerTwo.skin;
						playerTwo.index = i;
						console.log(`Image ${playerTwo.name} définie à l'index ${playerTwo.index}`);
						break;
      }
      const positionX = this.squareList[i].positionX;
      const positionY = this.squareList[i].positionY;
      const squareSize = this.squareSize;
      canvasSquare.addEventListener('load', function() {
      context.drawImage(canvasSquare, (positionX - 1) * squareSize + 1, (positionY -1 ) * squareSize, squareSize -2 , squareSize);
      });
    }
  }

  getSquare (x, y) {
    
  }
}