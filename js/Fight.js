function fight() {
  $('.gameMap').remove();
  $('canvas').remove();
  $(fightMenu).removeClass('hidden');
  disableKeyboard();
  selectActivePlayer();
	playerOneTurn.classList.add('hidden');
	playerTwoTurn.classList.add('hidden');
  alert(`Le combat commence, ${activePlayer.name} a l'initiative`);
  if (activePlayer === playerOne) {
    menuTwo.classList.add("hidden");
  } else {
    menuOne.classList.add("hidden");
  }
}