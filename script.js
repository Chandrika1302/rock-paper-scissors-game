//better to keep these declarations up here for readibilty, this is subjective.

//no need of this line, read on below to find a better approach
//const numOfButtons = document.querySelectorAll('.button').length;


const buttons = document.querySelectorAll('.button');//this returns a nodelist, usually we want an array, but for this project, nodelist will work fine

//const buttons = Array.from(document.querySelectorAll('.button')); //  this returns an array from a array-like-structure, there are many of them, nodeList is one of them.
//const buttons = [...(document.querySelectorAll('.button')]; // you can also use this popular ES6 sytnax, it's called spread operator.

// changes in query selectors as per html changes
const playerSelection = document.querySelector('#player-selection');
const computerSelection = document.querySelector('#computer-selection');
const result = document.querySelector('#game-result');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const resetButton = document.querySelector('#reset-button');

//moved changing globals here, readibility purposes
let playercount = 0;
let computercount = 0;

//change numOfButtons to buttons.length;
for (let i = 0; i < buttons.length; i++) {
  //changes for readabilty purposes
  buttons[i].addEventListener('click', playRound);

  //---------------old logic-------------

  // document
  //   .querySelectorAll('.button')
  //   [i].addEventListener('click', function () {
  //     var buttonInnerHTML = this.innerHTML;
  //     let playerSelection = buttonInnerHTML;
  //     playerSelection.innerHTML = 'Player Selection:' + ' ' + buttonInnerHTML;
  //     computerSelection.innerHTML =
  //       'Computer Selection:' + ' ' + computerplay();
  //     let computerSelection = computerplay();
  //     singleround(computerSelection, playerSelection);
  //     // gameWinner();
  //   });
}

//add reset logic
resetButton.addEventListener('click', resetGame);

// new functions
// better to have functions declared in the end, this is subjective too.
function playRound(e) {
  const playerSelectionText = e.target.innerText;
  const computerSelectionText = computerplay();

  playerSelection.innerText = 'Player Selection: ' + playerSelectionText;
  computerSelection.innerText = 'Computer Selection: ' + computerSelectionText;

  const resultText = findResult(computerSelectionText, playerSelectionText);
  displayResult(resultText);
  updateScores(resultText);
}

function updateScores(text) {
  if (text == 'win') {
    playercount++;
  } else if (text == 'lose') {
    computercount++;
  }
  playerScore.innerText = playercount;
  computerScore.innerText = computercount;
}

function displayResult(text) {
  let displayResultText = null;
  if (text == 'win') {
    displayResultText = 'Player Won!';
  } else if (text == 'lose') {
    displayResultText = 'Player Lost!';
  } else {
    displayResultText = "It's a Draw!";
  }

  result.innerText = displayResultText;
}

function findResult(computer, player) {
  let result = null;

  switch (player) {
    case 'Paper':
      if (computer == 'Rock') {
        result = 'win';
      } else if (computer == 'Scissors') {
        result = 'lose';
      }
      break;

    case 'Scissors':
      if (computer == 'Paper') {
        result = 'win';
      } else if (computer == 'Rock') {
        result = 'lose';
      }
      break;

    case 'Rock':
      if (computer == 'Scissors') {
        result = 'win';
      } else if (computer == 'Paper') {
        result = 'lose';
      }
      break;
  }

  // if switch matches nothing above, and result is null
  if (!result) {  //read as--> if there's no result then result=draw
    result = 'draw';
  }

  return result;
}



function resetGame() {
  playercount = 0;
  computercount = 0;

  //stop using innerHTML when you can use innerText or textContent
  playerSelection.innerText = 'Player Selection: None';
  computerSelection.innerText = 'Computer Selection: None';

  // updated according to html changes
  playerScore.innerText = 'Player score: 0';
  computerScore.innerText = 'Computer score: 0';

  result.innerText = '';
}



function computerplay() {
  // use let when you know the variable will be reassigned
  const random = ['Rock', 'Paper', 'Scissors'];

  //don't be afraid of few extra variables for readabilty
  //you can also replace 3 with random.length+1 for a more inituative code, but since this random array has no scope of future extension 3 works fine
  const randomIndex = Math.floor(Math.random() * 3);

  return random[randomIndex];
}

//old function, see above the findResult Function


/*
function singleround(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    result.innerHTML = 'Draw!!';
  } else if (computerSelection == 'Rock' && playerSelection == 'Paper') {
    computercount++;
    computerScore.innerHTML =
      "<i class='fas fa-robot text-4xl'></i>" +
      ' ' +
      'Computer score:' +
      ' ' +
      computercount;
    result.innerHTML = 'Computer Wins!!';
  } else if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
    computercount++;
    computerScore.innerHTML =
      "<i class='fas fa-robot text-4xl'></i>" +
      ' ' +
      'Computer score:' +
      ' ' +
      computercount;
    result.innerHTML = 'Computer Wins!!';
  } else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
    playercount++;
    playerScore.innerHTML =
      "<i class='fas fa-user text-4xl'></i>" +
      ' ' +
      'Player score:' +
      ' ' +
      playercount;
    result.innerHTML = 'Player Wins!!';
  } else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
    playercount++;
    playerScore.innerHTML =
      "<i class='fas fa-user text-4xl'></i>" +
      ' ' +
      'Player score:' +
      ' ' +
      playercount;
    result.innerHTML = 'Player Wins!!';
  } else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
    playercount++;
    playerScore.innerHTML =
      "<i class='fas fa-user text-4xl'></i>" +
      ' ' +
      'Player score:' +
      ' ' +
      playercount;
    result.innerHTML = 'Player Wins!!';
  } else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
    computercount++;
    computerScore.innerHTML =
      "<i class='fas fa-robot text-4xl'></i>" +
      ' ' +
      'Computer score:' +
      ' ' +
      computercount;
    result.innerHTML = 'Computer Wins!!';
  }
} 
*/


//another old function

// function gameWinner() {
//   if (computercount > playercount) {
//     result.innerHTML = "Computer Wins!!";
//   } else if (playercount > computercount) {
//     result.innerHTML = "Player Wins!!";
//   } else result.innerHTML = "Draw!!";
// }
