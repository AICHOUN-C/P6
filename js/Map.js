function Map() {

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
      const playerSrc ="";
      const weaponSrc ="";
      
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
                }
      }
    }
}		
  // Création de variable pour contenir le choix de l'utilisateur sur le choix de la taille de map
		let customMapWidth = MapWidth();
		let customWallNumber = WallNumber();
		let customSquareSize = SquareSize();
  
    const map = new Map (customMapWidth * customMapWidth, customMapWidth, customWallNumber, customSquareSize);
    
    map.fillEmpty();
    map.addElement('wall', customWallNumber);
    map.addElement('weapon', 4);
    map.addElement('player', 2); 
    map.display();
}      
