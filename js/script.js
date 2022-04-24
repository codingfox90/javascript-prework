var computerMove;
var playerMove, playerInput;
var randomNumber;
var buttonRock, buttonPaper, buttonScissors;
var argButtonName;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
function buttonClicked(argButtonName){
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    playerMove = argButtonName;
function displayResults(playerMove, computerMove){
    if(playerMove != 'nieznany ruch'){

        if (playerMove == 'kamień' && computerMove == 'papier'){
            printMessage('Przegrywasz :(');
        }
        else if(playerMove == 'kamień' && computerMove == 'nożyce'){
            printMessage('Wygrywasz! :)');
        }
        else if(playerMove == 'papier' && computerMove == 'kamień'){
            printMessage('Wygrywasz! :)');
        }
        else if(playerMove == 'papier' && computerMove == 'nożyce'){
            printMessage('Przegrywasz :(');
        }
        else if(playerMove == 'nożyce' && computerMove == 'kamień'){
            printMessage('Przegrywasz :(');
        }
        else if(playerMove == 'nożyce' && computerMove == 'papier'){
            printMessage('Wygrywasz! :)');
        }
        else {
            printMessage('Remis! ;)');
        }
    }
    else{
        printMessage('podaj poprawny ruch!');
    }
}


/*
if (playerInput == '1' || playerInput == 'kamień'){
    playerMove = 'kamień';
}
else if(playerInput == '2' || playerInput == 'papier'){
    playerMove = 'papier';
}
else if(playerInput == '2' || playerInput == 'nożyce'){
    playerMove = 'nożyce';
}
else {
    playerMove= 'nieznany ruch';
}
*/
printMessage('Twój ruch: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1'){
    computerMove = 'kamień';
}
else if(randomNumber == '2'){
    computerMove = 'papier';
}
else{
    computerMove = 'nożyce';
}
printMessage('Zagrałem ' + computerMove);
displayResults(playerMove, computerMove);
}
buttonRock.addEventListener('click', function(){
    buttonClicked('kamień')

});
buttonPaper.addEventListener('click', function(){
    buttonClicked('papier')
    
    });
buttonScissors.addEventListener('click', function(){
    buttonClicked('nożyce')
        
    });