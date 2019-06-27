let headerTitle = document.getElementById('headerTitle');

setTimeout(function () {
            headerTitle.textContent = "C'est la guerre !!!";
        }, 2000);

//Fighter animation demo right and left to the middle
var fighterLeft = document.getElementById("fighterLeft");
var fighterRight = document.getElementById("fighterRight");
var fighterSection = document.getElementById("fighterSection");
var speed = 5; // Valeur du déplacement en pixels

// Conversion en nombre du diamètre du bloc (valeur de la forme "XXpx")
var figtherSectionWidth = parseFloat(getComputedStyle(fighterSection).width);
var moveRight = null; // Identifiant de l'animation vers la droite
var moveLeft = null; // Identifiant de l'animation vers la gauche

// Déplace le combattant de gauche vers la droite jusqu'au millieu du cadre
function moveLeftFighter() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xFigtherLeft = parseFloat(getComputedStyle(fighterLeft).left);
    // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
    var xMax = ((parseFloat(getComputedStyle(fighterSection).width))/2) -130;
    if (xFigtherLeft <= xMax) { // Si le bloc n'est pas encore au bout du cadre
        // Déplacement du bloc
        fighterLeft.style.left = (xFigtherLeft + speed) + "px";
        // Demande au navigateur d'appeler moveLeftFighter dès que possible
        moveRight = requestAnimationFrame(moveLeftFighter);
    } else {
        // Annulation de l'animation
        cancelAnimationFrame(moveRight);
    }
}

// Déplace le combattant de droite vers la gauche jusqu'au millieu du cadre
function moveRightFighter() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xFigtherRight = parseFloat(getComputedStyle(fighterRight).right);
    // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
    var xMax = ((parseFloat(getComputedStyle(fighterSection).width))/2) -130;
    if (xFigtherRight <= xMax) { // Si le bloc n'est pas encore au bout du cadre
        // Déplacement du bloc
        fighterRight.style.right = (xFigtherRight + speed) + "px";
        // Demande au navigateur d'appeler moveLeftFighter dès que possible
        moveLeft = requestAnimationFrame(moveRightFighter);
    } else {
        // Annulation de l'animation
        cancelAnimationFrame(moveLeft);
    }
}

moveRight = requestAnimationFrame(moveLeftFighter); // Début du déplacement vers la droite
moveLeft = requestAnimationFrame(moveRightFighter); // Début du déplacement vers la gauche


// Sélection Avatar joueur 1
$('.avatarOne').on({
     'click': function(){
         if (this.src === playerTwoAvatar.src){
             let nameTwo = playerTwoName.textContent;
             alert(`Cet avatar est déjà utilisé par ${nameTwo}`)
         } else
         $('#playerOneAvatar').attr('src', this.src);
         playerOne.skin = this.src;
     }
 });

// Sélection avatar joueur 2
$('.avatarTwo').on({
     'click': function(){
         if (this.src === playerOneAvatar.src){
             let nameOne = playerOneName.textContent;
             alert(`Cet avatar est déjà utilisé par ${nameOne}`)
         } else
         $('#playerTwoAvatar').attr('src', this.src);
         playerTwo.skin = this.src;
     }
 });

// Choix nom de personnage 1
$('#inputNameOne').on('input',function(e){
     $("#playerOneName").html($(this).val());
     playerOne.name = document.getElementById("inputNameOne").value;
 });

// Choix nom de personnage 2
$('#inputNameTwo').on('input',function(e){
     $("#playerTwoName").html($(this).val());
     playerTwo.name = document.getElementById("inputNameTwo").value; 
 });