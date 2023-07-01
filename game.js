const getRandomInt = (max) => Math.floor(Math.random() * max);

const getPlayerChoice = () => prompt().toUpperCase();

const getComputerChoice = () => {
  switch (getRandomInt(3)) {
    case 0:
      return 'ROCK';

    case 1:
      return 'PAPER';

    case 2:
      return 'SCICCORS';

    default:
      break;
  }
};

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(roundOfRPS());
  }
}

function roundOfRPS() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  return playerMakesChoice(playerChoice, computerChoice);
}

function playerMakesChoice(playerChoice, computerChoice) {
  switch (playerChoice) {
    case 'ROCK':
      return selectedRock(computerChoice);

    case 'PAPER':
      return selectedPaper(computerChoice);

    case 'SCICCORS':
      return selectedSiccors(computerChoice);

    default:
      console.log('Only Rock, Paper or Scissors are allowed!');
      break;
  }
}

function selectedSiccors(computerChoice) {
  switch (computerChoice) {
    case 'ROCK':
      return 'Rock beats Sciccors, you lose.';
    case 'PAPER':
      return 'Sciccors beat Rock, you win.';
    case 'SCICCORS':
      return 'Draw';

    default:
      break;
  }
}

function selectedPaper(computerChoice) {
  switch (computerChoice) {
    case 'ROCK':
      return 'Paper beats Rock, you win.';
    case 'PAPER':
      return 'Draw';
    case 'SCICCORS':
      return 'Sciccors beat Paper, you lose.';

    default:
      break;
  }
}

function selectedRock(computerChoice) {
  switch (computerChoice) {
    case 'ROCK':
      return 'Draw';
    case 'PAPER':
      return 'Paper beats Rock, you lose.';
    case 'SCICCORS':
      return 'Rock beats Sciccors, you win.';

    default:
      break;
  }
}

game();
