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
