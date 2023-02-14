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
    playerSelection = prompt("Choose your weapon!");
    computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        return "Tie!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection != "scissors") {
        return "You lose..";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection != "rock") {
        return "You lose..";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection != "paper") {
        return "You lose.."
    } else if (playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors") {
        return "Please select a valid weapon!"
    } else {
        return "You win!"
    }
}

function game() {
    let playerFinalScore = 0;
    let computerFinalScore = 0;
    for (let i = 0; i < 5; i++) {
      gameResult = gameRound();
      console.log(gameResult)
        if (gameResult == "You win!") {
          playerFinalScore++;
        } else if (gameResult == "You lose..") {
          computerFinalScore++
        }
      console.log("Player Score = " + playerFinalScore)
      console.log("Computer Score = " + computerFinalScore)
    }
    scoreReporter(playerFinalScore, computerFinalScore)
}

function scoreReporter(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log('You win the game!')
    } else if (playerScore < computerScore) {
        console.log("You lost the game!")
    } else {
        console.log("The game is a tie!")
    }
}
