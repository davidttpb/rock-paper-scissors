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

function playRound(playerSelection, computerSelection) {
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

function game() {
    let playerWinCounter = 0;
    let computerWinCounter = 0;

    for (i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your weapon of choice - rock, paper, or scissors!").toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerWinCounter++;
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerWinCounter++;
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerWinCounter++;
        } else {
            computerWinCounter++;
        }
    }
    console.log(`You won ${playerWinCounter} and computer won ${computerWinCounter}`);
}

game();