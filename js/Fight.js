function fight() {
  $('.gameMap').remove();
  $('canvas').remove();
  $(fightMenu).removeClass('hidden');
  selectActivePlayer();
  alert(`Le combat commence, ${activePlayer.name} a l'initiative`);
  if (activePlayer === playerOne) {
    menuTwo.classList.add("hidden");
  } else {
    menuOne.classList.add("hidden");
  }
}