// Création de la classe map   
class Map {
  constructor (size, width, wallNumber, squareSize){
    this.size = size;
    this.width = width;
    this.wallNumber = wallNumber;
    this.squareSize = squareSize;
    this.squareList = [];
    this.arsenal = [weapon0, weapon1, weapon2, weapon3, weapon4];
  }
      
  fillEmpty() {
    for(let i=0; i < this.size; i++){
      this.squareList[i] = {
        squareNumber: i,
        type: 'empty',
        object: null,
        weapon: null,
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
    let j = 1;
    
    for (let i = 0; i < number; i++ ){  
      let index = randomNb(square.length);
      let wallCondition = checkWallCondition (square, index, customMapWidth);
      if ((square[index].type === 'empty') && (wallCondition === true)){
        square[index].type = 'weapon';
        square[index].weapon = this.arsenal[j];
        this.arsenal[j].positionX = square[index].positionX;
        this.arsenal[j].positionY = square[index].positionY;
        console.log(`${this.arsenal[j].name} ajouté a l'indice ${square[index].positionX} , ${square[index].positionY}`)
        j++;
      } else i--;
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
        square[index].type = 'player';
        square[index].object = playerOne;
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
        square[index].type = 'player';
        square[index].object = playerTwo;
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
  $('div.mapSelection').addClass('hidden');

  // Création d'un élément canvas en 2D sans transparence pour accueillir la map  
  canvas = document.getElementById('battleMap');
  context = canvas.getContext('2d');
  const wallSrc = "img/smallWall.png";

  context.fillStyle = '#b6d369';
  context.fillRect(0, 0, this.squareSize * this.width, this.squareSize * this.width);
    for (var i = 0; i < this.size; i++) {    
      context.strokeStyle = 'white';
      context.strokeRect((this.squareList[i].positionX - 1) * this.squareSize, (this.squareList[i].positionY -1) * this.squareSize, this.squareSize, this.squareSize);
      let canvasSquare = new Image();
        
      if (this.squareList[i].type === 'wall') {
        canvasSquare.src = wallSrc;
      } else if (this.squareList[i].weapon !== null) {
        canvasSquare.src = this.squareList[i].weapon.skin;
        this.squareList[i].weapon.index = i;
        console.log(`Image ${this.squareList[i].weapon.name} définie à l'index ${this.squareList[i].weapon.index}`);
      } else if (this.squareList[i].type === 'player') {
        canvasSquare.src = this.squareList[i].object.skin;
        this.squareList[i].object.index = i;
        console.log(`Image ${this.squareList[i].object.name} définie à l'index ${this.squareList[i].object.index}`);
      }
      const positionX = this.squareList[i].positionX;
      const positionY = this.squareList[i].positionY;
      const squareSize = this.squareSize;
      canvasSquare.addEventListener('load', function() {
      context.drawImage(canvasSquare, (positionX - 1) * squareSize + 1, (positionY -1 ) * squareSize, squareSize -2 , squareSize);
      });
    } return context;
  }
  
    refresh() {
  // Création d'un élément canvas en 2D sans transparence pour accueillir la map  
  canvas = document.getElementById('battleMap');
  context = canvas.getContext('2d');
  const wallSrc = "img/smallWall.png";

  context.fillStyle = '#b6d369';
  context.fillRect(0, 0, this.squareSize * this.width, this.squareSize * this.width);
    for (var i = 0; i < this.size; i++) {    
      context.strokeStyle = 'white';
      context.strokeRect((this.squareList[i].positionX - 1) * this.squareSize, (this.squareList[i].positionY -1) * this.squareSize, this.squareSize, this.squareSize);
      let canvasSquare = new Image();
        
      if (this.squareList[i].type === 'wall') {
        canvasSquare.src = wallSrc;
      } else if (this.squareList[i].weapon !== null) {
        canvasSquare.src = this.squareList[i].weapon.skin;
        this.squareList[i].weapon.index = i;
      } else if (this.squareList[i].type === 'player') {
        canvasSquare.src = this.squareList[i].object.skin;
        this.squareList[i].object.index = i;
      }
      const positionX = this.squareList[i].positionX;
      const positionY = this.squareList[i].positionY;
      const squareSize = this.squareSize;
      canvasSquare.addEventListener('load', function() {
      context.drawImage(canvasSquare, (positionX - 1) * squareSize + 1, (positionY -1 ) * squareSize, squareSize -2 , squareSize);
      });
    }
  }

  refreshOrigin(origin) {
  let canvasSquare = new Image();

    if (this.squareList[origin].weapon === null) {
      canvasSquare.src = 'img/empty.png';
    } else {
      canvasSquare.src = this.squareList[origin].weapon.skin;
      this.squareList[origin].weapon.index = i;
      console.log(`Image ${this.squareList[origin].weapon.name} définie à l'index ${this.squareList[origin].weapon.index}`);
    }
    const positionX = this.squareList[origin].positionX;
    const positionY = this.squareList[orgin].positionY;
    const squareSize = this.squareSize;
    canvasSquare.addEventListener('load', function() {
    context.drawImage(canvasSquare, (positionX - 1) * squareSize + 1, (positionY -1 ) * squareSize, squareSize -2 , squareSize);
    });
  }

  refreshTarget(target) {
    let canvasSquare = new Image();

    if (this.squareList[target].weapon === null) {
      canvasSquare.src = this.squareList[target].object.skin;
      this.squareList[target].object.index = i;
      console.log(`Image ${this.squareList[target].object.name} définie à l'index ${this.squareList[target].object.index}`);
    } else {

    }
    const positionX = this.squareList[target].positionX;
    const positionY = this.squareList[target].positionY;
    const squareSize = this.squareSize;
    canvasSquare.addEventListener('load', function() {
    context.drawImage(canvasSquare, (positionX - 1) * squareSize + 1, (positionY -1 ) * squareSize, squareSize -2 , squareSize);
    });
  }
}