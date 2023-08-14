function getComputerChoice() {
    let computerChoice;
    computerChoice = Math.floor(Math.random() * (4 - 1) + 1);

    switch (computerChoice) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
    return computerChoice;
}

function playRound() {
    const playerSelection = prompt("Enter your weapon of choice - rock, paper, or scissors!").toLowerCase();
    const computerSelection = getComputerChoice();

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win!';
    } else {
        return 'You loose!';
    }
}
