function computerplay() {
  let random = ["Rock", "Paper", "Scissors"];
  return random[Math.floor(Math.random() * 3)];
}
const numOfButtons = document.querySelectorAll(".button").length;
const playerSelectn = document.querySelector(".player-selectn");
const computerSelectn = document.querySelector(".computer-selectn");
const result = document.querySelector(".gameResult");
const playerScore = document.querySelector(".p-score");
const computerScore = document.querySelector(".c-score");

for (let i = 0; i < numOfButtons; i++) {
  document
    .querySelectorAll(".button")
    [i].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      let playerSelection = buttonInnerHTML;
      playerSelectn.innerHTML = "Player Selection is:" + " " + buttonInnerHTML;
      computerSelectn.innerHTML =
        "Computer Selection is:" + " " + computerplay();
      let computerSelection = computerplay();
      singleround(computerSelection, playerSelection);
      gameWinner();
    });
}
let playercount = 0;
let computercount = 0;
function singleround(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    console.log("Tie");
  } else if (computerSelection == "Rock" && playerSelection == "Paper") {
    computercount++;
    computerScore.textContent = "computer score is:" + " " + computercount;
  } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
    playercount++;
    playerScore.textContent = "player score is:" + " " + playercount;
  } else if (computerSelection == "Paper" && playerSelection == "Rock") {
    playercount++;
    playerScore.textContent = "player score is:" + " " + playercount;
  } else if (computerSelection == "Paper" && playerSelection == "Scissors") {
    computercount++;
    computerScore.textContent = "computer score is:" + " " + computercount;
  } else if (computerSelection == "Scissors" && playerSelection == "Rock") {
    computercount++;
    computerScore.textContent = "computer score is:" + " " + computercount;
  } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
    playercount++;
    playerScore.textContent = "player score is:" + " " + playercount;
  }
}
function gameWinner() {
  if (computercount > playercount) {
    result.textContent = "computer Wins!!";
  } else if (playercount > computercount) {
    result.textContent = "Player Wins!!";
  } else result.textContent = "Draw!!";
}
function resetGame(){
  playercount=0;
  computercount=0;
  playerSelectn.textContent="Player Selection is: None";
  computerSelectn.textContent="Computer Selection is: None";
  playerScore.textContent="player score is: 0";
  computerScore.textContent="computer score is: 0";
  result.remove();
}
