let secret = 0;
const resetBtn = document.querySelector('.reset')
const secretClick = document.querySelector('.secret');
const playerField = document.querySelector('.playerField');
const compField = document.querySelector('.compField');
const conField = document.querySelector('.contextBox');
const rockSelec = document.querySelector('#rock');
const paperSelec = document.querySelector('#paper');
const scissorsSelec = document.querySelector('#scissors');
const playerTally = document.querySelector('.playerTally');
const compTally = document.querySelector('.compTally');

function getComputerChoice() {
    let rng = Math.floor(Math.random() * 3);
    if (rng == 1) {
        return "rock";
    } else if (rng == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function gameRound(playerSelection, computerSelection) {
    if (secret == 1) {
        return 'winAlways';
    } else if (playerSelection == computerSelection) {
        return 'tie';
    } else if (playerSelection == "rock" && computerSelection != "scissors") {
        return 'loss';
    } else if (playerSelection == "paper" && computerSelection != "rock") {
        return 'loss';
    } else if (playerSelection == "scissors" && computerSelection != "paper") {
        return 'loss';
    } else {
        return 'win'
    }
}

function fieldManipulator(result) {
    playerField.style.backgroundColor = '#e0ddd5';
    compField.style.backgroundColor = '#e0ddd5';
    if (result == 'tie') {
        conField.innerHTML = '<h4>Player and Computer Tie!</h4>';
        playerField.style.backgroundColor = '#283d70';
        compField.style.backgroundColor = '#c6934b';
    } else if (result == 'win') {
        conField.innerHTML = '<h4>You Won!</h4>';
        playerField.style.backgroundColor = '#283d70';
        playerScore++;
        playerTally.innerHTML = '<h1>' + playerScore + '</h1';
    } else if (result == 'loss') {
        conField.innerHTML = '<h4>You Lost!</h4>';
        compField.style.backgroundColor = '#c6934b';
        compScore++;
        compTally.innerHTML = '<h1>' + compScore + '</h1'
    } else if (result == 'winAlways') {
        conField.innerHTML = '<h4>You Won! Cheater..</h4>';
        playerField.style.backgroundColor = '#283d70';
        playerScore++;
        playerTally.innerHTML = '<h1>' + playerScore + '</h1';
    }
}

let playerScore = 0;
let compScore = 0;

function fullGame(selection) {
    result = gameRound(selection, getComputerChoice());
    if (playerScore < 5 && compScore < 5) {
        fieldManipulator(result);
    }
}

function reset() {
    playerField.style.backgroundColor = '#e0ddd5';
    compField.style.backgroundColor = '#e0ddd5';
    playerScore = 0;
    compScore = 0;
    secret = 0;
    conField.innerHTML = ''
    playerTally.innerHTML = ''
    compTally.innerHTML = ''
}



rockSelec.addEventListener('click', () => {
    fullGame('rock');
});

paperSelec.addEventListener('click', () => {
    fullGame('paper');
});

scissorsSelec.addEventListener('click', () => {
    fullGame('scissors');
});

secretClick.addEventListener('click', () => {
    secret = 1;
    conField.innerHTML = '<h4>Nice Find..</h4>';
});

resetBtn.addEventListener('click', () => {
    reset();
}) 