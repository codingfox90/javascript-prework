let computerMove;
let playerInput;
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  const playerMove = argButtonName;
  function displayResults(playerMove, computerMove) {
    if (
      (playerMove == 'kamień' && computerMove == 'papier') ||
      (playerMove == 'papier' && computerMove == 'nożyce') ||
      (playerMove == 'nożyce' && computerMove == 'kamień')
    ) {
      printMessage('Przegrywasz :(');
    } else if (
      (playerMove == 'kamień' && computerMove == 'nożyce') ||
      (playerMove == 'papier' && computerMove == 'kamień') ||
      (playerMove == 'nożyce' && computerMove == 'papier')
    ) {
      printMessage('Wygrywasz! :)');
    } else {
      printMessage('Remis! ;)');
    }
  }

  printMessage('Twój ruch: ' + playerMove);
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  if (randomNumber == '1') {
    computerMove = 'kamień';
  } else if (randomNumber == '2') {
    computerMove = 'papier';
  } else {
    computerMove = 'nożyce';
  }
  printMessage('Zagrałem ' + computerMove);
  displayResults(playerMove, computerMove);
}
buttonRock.addEventListener('click', function () {
  buttonClicked('kamień');
});
buttonPaper.addEventListener('click', function () {
  buttonClicked('papier');
});
buttonScissors.addEventListener('click', function () {
  buttonClicked('nożyce');
});
