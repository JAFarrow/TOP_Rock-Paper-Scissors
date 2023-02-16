const playerField = document.querySelector('.playerField');
const compField = document.querySelector('.compField');
const rockSelec = document.querySelector('#rock')
const paperSelec = document.querySelector('#paper')
const scissorsSelec = document.querySelector('#scissors')

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
    if (playerSelection == computerSelection) {
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

function fieldManipulator (result) {
    playerField.style.backgroundColor = '#e0ddd5';
    compField.style.backgroundColor = '#e0ddd5';
    if (result == 'tie') {
        console.log('tie');
        playerField.style.backgroundColor = '#283d70';
        compField.style.backgroundColor = '#c6934b';
    } else if (result == 'win') {
        console.log('win');
        playerField.style.backgroundColor = '#283d70';
    } else if (result == 'loss') {
        console.log('loss');
        compField.style.backgroundColor = '#c6934b';
    }
}

function fullGame (selection) {
    result = gameRound(selection, getComputerChoice());
    fieldManipulator(result);
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