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
    var i = 0;
    do {
      let square = this.getEmptySquare();
      let index = randomNb(square.length);
      let playerCondition = checkPlayerCondition (playerOne, square, index);
      let wallCondition = checkWallCondition (square, index, customMapWidth);
      
      if ((playerCondition === 'true') && (wallCondition === 'true')) {
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
  const arsenal =[weapon1, weapon2, weapon3, weapon4];
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
        canvasSquare.src = arsenal[j].skin;
        arsenal[j].positionX = this.squareList[i].positionX;
        arsenal[j].positionY = this.squareList[i].positionY;
        console.log(`Image arme ${arsenal[j].name} définie`);
        j++;
      } else if (this.squareList[i].type === 'playerOne') {
        canvasSquare.src = playerOne.skin;
        console.log(`Image ${playerOne.name} définie`);
      } else if (this.squareList[i].type === 'playerTwo') {
        canvasSquare.src = playerTwo.skin;
        console.log(`Image ${playerTwo.name} définie`);
      }
      const positionX = this.squareList[i].positionX;
      const positionY = this.squareList[i].positionY;
      const squareSize = this.squareSize;
      canvasSquare.addEventListener('load', function() {
      context.drawImage(canvasSquare, (positionX - 1) * squareSize + 1, (positionY -1 ) * squareSize, squareSize -2 , squareSize);
      });
    }
  }
}