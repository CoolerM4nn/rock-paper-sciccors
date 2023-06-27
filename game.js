function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  switch (getRandomInt(3)) {
    case 0:
      return 'Rock';

    case 1:
      return 'Paper';

    case 2:
      return 'Sciccors';

    default:
      break;
  }
}

