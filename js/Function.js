// Choix aléatoire d'un entier
function randomNb(x) {
    return Math.floor(Math.random() * x);
}

// Fonction renvoyant la largeur à l'objet map en fonction du choix de l'utilisateur
function MapWidth() {
    const listSizeElem = document.getElementById('mapSize');
    let listSize = listSizeElem.selectedIndex;
    let mapWidth;
    
    if (listSize === 0) {
        mapWidth = 10;
    } else if (listSize === 1) {
        mapWidth = 12;
    } else if (listSize === 2) {
        mapWidth = 14;
    }
    return mapWidth;
}

// Fonction renvoyant le nombre de mur en fonction de la taille de la map
function WallNumber() {
    const listSizeElem = document.getElementById('mapSize');
    let listSize = listSizeElem.selectedIndex;
    let wallNumber;
    
    if (listSize === 0) {
        wallNumber = 10;
    } else if (listSize === 1) {
        wallNumber = 15;
    } else if (listSize === 2) {
        wallNumber = 20;
    }
    return wallNumber;
}

// Reglage de la taille des cases de la map en fonction de la taille choisis
function SquareSize() {
    const listSizeElem = document.getElementById('mapSize');
    let listSize = listSizeElem.selectedIndex;
    let squareSize;
    
    if (listSize === 0) {
        squareSize = 30;
    } else if (listSize === 1) {
        squareSize = 25;
    } else if (listSize === 2) {
        squareSize = 21.4;
    }
    return squareSize;
}

    
    
    
    
    
    
    
    
    
    