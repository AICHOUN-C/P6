let headerTitle = document.getElementById('headerTitle');

setTimeout(function () {
  headerTitle.textContent = "C'est la guerre !!!";
}, 2000);

//Fighter animation demo right and left to the middle
let fighterLeft = document.getElementById("fighterLeft");
let fighterRight = document.getElementById("fighterRight");
let fighterSection = document.getElementById("fighterSection");
let speed = 5; // Movement value in pixel

// Block diameter conversion in number value (value form "XXpx")
let figtherSectionWidth = parseFloat(getComputedStyle(fighterSection).width);
let moveRight = null;
let moveLeft = null;

// Move the tank from the left to the middle
function moveLeftFighter() {
  // Convert left tank position in number value (value form "XXpx")
  let xFigtherLeft = parseFloat(getComputedStyle(fighterLeft).left);
  // Convert width in number value (value form "XXpx")
  let xMax = ((parseFloat(getComputedStyle(fighterSection).width))/2) -130;
  if (xFigtherLeft <= xMax) {
    fighterLeft.style.left = (xFigtherLeft + speed) + "px";
    // Ask the web browser to call moveLeftFighter asap
    moveRight = requestAnimationFrame(moveLeftFighter);
  } else {
    // Cancel the animation
    cancelAnimationFrame(moveRight);
  }
}

// Move the tank from the right to the middle
function moveRightFighter() {
  // Convert right tank position in number value (value form "XXpx")
  let xFigtherRight = parseFloat(getComputedStyle(fighterRight).right);
  // Convert width in number value (value form "XXpx")
  let xMax = ((parseFloat(getComputedStyle(fighterSection).width))/2) -130;
  if (xFigtherRight <= xMax) {
    fighterRight.style.right = (xFigtherRight + speed) + "px";
    // Ask the web browser to call moveRightFighter asap
    moveLeft = requestAnimationFrame(moveRightFighter);
  } else {
    // Cancel the animation
    cancelAnimationFrame(moveLeft);
  }
}

moveRight = requestAnimationFrame(moveLeftFighter); // Start to move to the right
moveLeft = requestAnimationFrame(moveRightFighter); // Start to move to the left


// Player on avatar selection
$('.avatarOne').on({
  'click': function(){
    if (this.src === playerTwoAvatar.src){
      let nameTwo = playerTwoName.textContent;
      alert(`Cet avatar est déjà utilisé par ${nameTwo}`)
    } else {
      $('#playerOneAvatar').attr('src', this.src);
      playerOne.skin = this.src;
    }
  }
});

// Player two avatar selection
$('.avatarTwo').on({
  'click': function(){
    if (this.src === playerOneAvatar.src){
      let nameOne = playerOneName.textContent;
      alert(`Cet avatar est déjà utilisé par ${nameOne}`)
    } else {
      $('#playerTwoAvatar').attr('src', this.src);
      playerTwo.skin = this.src;
    }
  }
});

// Player one name choice
$('#inputNameOne').on('input',function(e){
  $("#playerOneName").html($(this).val());
  playerOne.name = document.getElementById("inputNameOne").value;
  document.getElementById("turnPlayerOne").textContent = `Tour de ${playerOne.name}`;
});

// Player two name choice
$('#inputNameTwo').on('input',function(e){
  $("#playerTwoName").html($(this).val());
  playerTwo.name = document.getElementById("inputNameTwo").value;
  document.getElementById("turnPlayerTwo").textContent = `Tour de ${playerTwo.name}`; 
});

function appendLogToDom(log, color) {
  // create a new para element 
	let para = document.createElement("P"); 
	// and give it some content 
	para.innerHTML = log;
	//Append <p> to <div> with id="complexQuote.display"
  if (color === 'red') {
  para.setAttribute('class', 'redMessage');
	document.getElementById('message').appendChild(para);
  } else if (color === 'victory') {
  para.setAttribute('class', 'victoryMessage');
  document.getElementById('message').appendChild(para);
  } else {
  para.setAttribute('class', 'blueMessage');
  document.getElementById('message').appendChild(para);  
  }
}

function clearLog() {
  const element = document.getElementById('message');
  //remove each quote one bye one from the message div until it's empty
  while (element.firstChild) {
      element.removeChild(element.firstChild);
  }
}