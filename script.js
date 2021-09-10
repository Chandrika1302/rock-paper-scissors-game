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
      playerSelectn.innerHTML = "Player Selection:" + " " + buttonInnerHTML;
      computerSelectn.innerHTML = "Computer Selection:" + " " + computerplay();
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
    computerScore.innerHTML =
      "<i class='fas fa-robot text-4xl'></i>" +
      " " +
      "Computer score:" +
      " " +
      computercount;
  } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
    computercount++;
    computerScore.innerHTML =
      "<i class='fas fa-robot text-4xl'></i>" +
      " " +
      "Computer score:" +
      " " +
      computercount;
  } else if (computerSelection == "Paper" && playerSelection == "Rock") {
    playercount++;
    playerScore.innerHTML =
      "<i class='fas fa-user text-4xl'></i>" +
      " " +
      "Player score:" +
      " " +
      playercount;
  } else if (computerSelection == "Paper" && playerSelection == "Scissors") {
    playercount++;
    playerScore.innerHTML =
      "<i class='fas fa-user text-4xl'></i>" +
      " " +
      "Player score:" +
      " " +
      playercount;
  } else if (computerSelection == "Scissors" && playerSelection == "Rock") {
    playercount++;
    playerScore.innerHTML =
      "<i class='fas fa-user text-4xl'></i>" +
      " " +
      "Player score:" +
      " " +
      playercount;
  } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
    computercount++;
    computerScore.innerHTML =
      "<i class='fas fa-robot text-4xl'></i>" +
      " " +
      "Computer score:" +
      " " +
      computercount;
  }
}
function gameWinner() {
  if (computercount > playercount) {
    result.innerHTML = "Computer Wins!!";
  } else if (playercount > computercount) {
    result.innerHTML = "Player Wins!!";
  } else result.innerHTML = "Draw!!";
}
function resetGame() {
  playercount = 0;
  computercount = 0;
  playerSelectn.innerHTML = "Player Selection: None";
  computerSelectn.innerHTML = "Computer Selection: None";
  playerScore.innerHTML =
    "<i class='fas fa-user text-4xl'></i>" + " " + "Player score: 0";
  computerScore.innerHTML =
    "<i class='fas fa-robot text-4xl'></i>" + " " + "Computer score: 0";
  result.innerHTML = "";
}
