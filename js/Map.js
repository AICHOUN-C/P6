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
    for (let i = 0; i < number; i++ ){
      let square = this.squareList;
      let index = randomNb(square.length);
      let wallCondition = checkWallCondition (square, index, customMapWidth);
      const arsenal = [weapon1, weapon2, weapon3, weapon4];
      let arsenalSkin = [];
      
      if ((square[index].type === 'empty') && (wallCondition === true)){
          square[index].type = 'weapon';
          arsenal[i % 4].positionX = square[index].positionX;
          arsenal[i % 4].positionY = square[index].positionY;
          console.log(`Arme ajouté a lindex ${square[index].positionX} ${square[index].positionY}`);
          console.log(`avec pour indice ${square[index].squareNumber}`);
          arsenalSkin.push(arsenal[i % 4].skin);
          console.log(Object.values(arsenal[i % 4]));
        console.log (arsenalSkin);
      } else i--;
    } return arsenalSkin;
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

      if (this.squareList[i].type === "wall") {
        canvasSquare.src = wallSrc;
      } else if (this.squareList[i].type === "weapon") {
        canvasSquare.src = arsenalSkin[j];
        console.log(`Image arme ${arsenal2[j].name} définie`);
        j++;
      } else if (this.squareList[i].type === 'playerOne') {
        canvasSquare.src = playerOne.skin;
        playerOne.index = i;
        console.log(`Image ${playerOne.name} définie à l'index ${playerOne.index}`);
      } else if (this.squareList[i].type === 'playerTwo') {
        canvasSquare.src = playerTwo.skin;
        playerTwo.index = i;
        console.log(`Image ${playerTwo.name} définie à l'index ${playerTwo.index}`);
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