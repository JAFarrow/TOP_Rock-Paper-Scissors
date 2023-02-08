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

function playerSelection() {
   let selection = prompt("Choose your weapon!");
   return selection;
}

function gameRound(playerSelection, computerSelection) {
    console.log(computerSelection)
    if (playerSelection == computerSelection) {
        return "Tie!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection != "scissors") {
        return "You lose..";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection != "rock") {
        return "You lose..";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection != "paper") {
        return "You lose.."
    } else {
        return "You win!"
    }
}

console.log(gameRound(playerSelection(), getComputerChoice()))