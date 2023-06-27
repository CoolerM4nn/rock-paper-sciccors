function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(roundOfRPS());
  }
}

function roundOfRPS() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  switch (playerChoice) {
    case 'ROCK':
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
      break;
    case 'PAPER':
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
      break;

    case 'SCICCORS':
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
      break;

    default:
      console.log('Only Rock, Paper or Scissors are allowed!');
      break;
  }
}

function getPlayerChoice() {
  return prompt().toUpperCase();
}

function getComputerChoice() {
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
}

game();