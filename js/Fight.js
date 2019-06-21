function displayMap2(){
    
//  Suppression des deux div de séléction d'avatars et création de la carte 
    $('div.avatarsSection').remove();
    $('canvas').removeClass('hidden');

// Création d'un élément canvas en 2D sans transparence    
    let canvas = document.getElementById('battleMap', {alpha: false});
    let context = canvas.getContext('2d');
    
// Stockage des paramètres dans des constante
    const squareSize = 30;
    const mapWidth = 10;
    const wallNumber = 10;
    const squareLimit = mapWidth * mapWidth;
    const squareList = []; // Tableaux visant à contenir les cases

// On créé une fonction pour crée chaque case de la map+
function createMap() {
    let col = 0;
    let row = 0; 

    context.fillStyle = '#b6d369';
    context.fillRect(0, 0, 300, 300);

// Création des cases de la map :
  for (var i = 0; i < squareLimit; i++) {
      
// On crée une bordure blanche tout autour de chaques cases
    context.strokeStyle = 'white';
    context.strokeRect(squareSize * col, squareSize * row, squareSize, squareSize);

// On ajoute un objet à chaque case avec un id et les positions
    squareList[i] = {
      squareNumber: i,
      id: "empty",
      positionX: squareSize * col + 1,
      positionY: squareSize * row + 1
    };
// Après avoir créé la case, on passe à la colonne suivante
    col++;

// Passage à la ligne suivante lorsque le nombre de colonnes est égale à la largeur de la map
    if (col === mapWidth) {
      col = 0;
      row++
    }
  }
}

    createMap();

// Création des murs en attribuant l'id "wall" à 10 cases aléatoires de la map
    for (let i = 0; i < wallNumber; i++) {
      let randomSquare = Math.floor(Math.random() * (squareLimit - 1));
      if (squareList[randomSquare].id !== "wall") {
        squareList[randomSquare].id = "wall";
      } 
    }
    
// Création joueur 1
    for(let i = 0; i < squareLimit; i++) {
        let randomSquare = Math.floor(Math.random() * (squareLimit - 1));
            if (squareList[randomSquare].id === "empty") {
            squareList[randomSquare].id = "playerOne";
            i = squareLimit;
        }
    }
    
// Création joueur 2
    for(let i = 0; i < squareLimit; i++) {
        let randomSquare = Math.floor(Math.random() * (squareLimit - 1));
            if (squareList[randomSquare].id === "empty") {
            squareList[randomSquare].id = "playerTwo";
            i = squareLimit;
        }
    }

// création arme 1
    for(let i = 0; i < squareLimit; i++) {
        let randomSquare = Math.floor(Math.random() * (squareLimit - 1));
            if (squareList[randomSquare].id === "empty") {
            squareList[randomSquare].id = "weaponOne";
            break;
        }
    }

// création arme 2
    for(let i = 0; i < squareLimit; i++) {
        let randomSquare = Math.floor(Math.random() * (squareLimit - 1));
            if (squareList[randomSquare].id === "empty") {
            squareList[randomSquare].id = "weaponTwo";
            i = squareLimit;
        }
    }    
    
// création arme 3
    for(let i = 0; i < squareLimit; i++) {
        let randomSquare = Math.floor(Math.random() * (squareLimit - 1));
            if (squareList[randomSquare].id === "empty") {
            squareList[randomSquare].id = "weaponThree";
            i = squareLimit;
        }
    }
    
// création arme 4
    for(let i = 0; i < squareLimit; i++) {
        let randomSquare = Math.floor(Math.random() * (squareLimit - 1));
            if (squareList[randomSquare].id === "empty") {
            squareList[randomSquare].id = "weaponFour";
            i = squareLimit;
        }
    }  
    
// Attribution des images en fonction des id des cases
    for (let i = 0; i < squareLimit; i++) {
      (function(i) {
        if (squareList[i].id === "wall") {
          let canvas = new Image();
          canvas.src = "img/smallWall.png";
          canvas.addEventListener('load', function() {
            context.drawImage(canvas, squareList[i].positionX, squareList[i].positionY,28 ,30);
          }, false);
        } else if (squareList[i].id === "playerOne") {
          let canvas = new Image();
          canvas.src = "img/smallAvatar1.png";
          canvas.addEventListener('load', function() {
            context.drawImage(canvas, squareList[i].positionX, squareList[i].positionY,28 ,28);
          }, false);
        } else if (squareList[i].id === "playerTwo") {
          let canvas = new Image();
          canvas.src = "img/smallAvatar2.png";
          canvas.addEventListener('load', function() {
            context.drawImage(canvas, squareList[i].positionX, squareList[i].positionY,28 ,28);
          }, false);
        } else if (squareList[i].id === "weaponOne") {
          let canvas = new Image();
          canvas.src = "img/smallWeapon1.png";
          canvas.addEventListener('load', function() {
            context.drawImage(canvas, squareList[i].positionX, squareList[i].positionY,28 ,28);
          }, false);
        } else if (squareList[i].id === "weaponTwo") {
          let canvas = new Image();
          canvas.src = "img/smallWeapon2.png";
          canvas.addEventListener('load', function() {
            context.drawImage(canvas, squareList[i].positionX, squareList[i].positionY,28 ,28);
          }, false);
        } else if (squareList[i].id === "weaponThree") {
          let canvas = new Image();
          canvas.src = "img/smallWeapon3.png";
          canvas.addEventListener('load', function() {
            context.drawImage(canvas, squareList[i].positionX, squareList[i].positionY,28 ,28);
          }, false);
        } else if (squareList[i].id === "weaponFour") {
          let canvas = new Image();
          canvas.src = "img/smallWeapon4.png";
          canvas.addEventListener('load', function() {
            context.drawImage(canvas, squareList[i].positionX, squareList[i].positionY,28 ,28);
          }, false);
        }
      })(i);
    }   
}