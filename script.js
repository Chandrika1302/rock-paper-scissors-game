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
      playerSelectn.innerHTML = "Player Selection is" + " " + buttonInnerHTML;
      computerSelectn.innerHTML =
        "computer selection is" + " " + computerplay();
      let computerSelection = computerplay();
      console.log(singleround(computerSelection, playerSelection));
      console.log(gameWinner());
    });
}

let playercount = 0;
let computercount = 0;
function singleround(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    console.log("Tie");
    // console.log(
    //   "computer selection:" + " " + computerSelection + " ",
    //   "player selection:" + " " + playerSelection
    // );
    // console.log("player score is" + " " + playercount++);
  } else if (computerSelection == "Rock" && playerSelection == "Paper") {
    // console.log(
    //   "computer selection:" + " " + computerSelection + " ",
    //   "player selection:" + " " + playerSelection
    // );
    // console.log("computer score is" + " " + computercount++);
    computercount++;
    computerScore.textContent = "computer score is" + " " + computercount;
  } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
    // console.log(
    //   "computer selection:" + " " + computerSelection + " ",
    //   "player selection:" + " " + playerSelection
    // );
    //  console.log("player score is" + " " + playercount++);
    playercount++;
    playerScore.textContent = "player score is" + " " + playercount;
  } else if (computerSelection == "Paper" && playerSelection == "Rock") {
    // console.log(
    //   "computer selection:" + " " + computerSelection + " ",
    //   "player selection:" + " " + playerSelection
    // );
    // console.log("player score is" + " " + playercount++);
    playercount++;
    playerScore.textContent = "player score is" + " " + playercount;
  } else if (computerSelection == "Paper" && playerSelection == "Scissors") {
    // console.log(
    //   "computer selection:" + " " + computerSelection + " ",
    //   "player selection:" + " " + playerSelection
    // );
    //  console.log("computer score is" + " " + computercount++);
    computercount++;
    computerScore.textContent = "computer score is" + " " + computercount;
  } else if (computerSelection == "Scissors" && playerSelection == "Rock") {
    // console.log(
    //   "computer selection:" + " " + computerSelection + " ",
    //   "player selection:" + " " + playerSelection
    // );
    //  console.log("computer score is" + " " + computercount++);
    computercount++;
    computerScore.textContent = "computer score is" + " " + computercount;
  } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
    // console.log(
    //   "computer selection:" + " " + computerSelection + " ",
    //   "player selection:" + " " + playerSelection
    // );
    //  console.log("player score is" + " " + playercount++);
    playercount++;
    playerScore.textContent = "player score is" + " " + playercount;
  }
}
function gameWinner() {
  if (computercount > playercount) {
    result.textContent = "computer Wins!!";
  } else if (playercount > computercount) {
    result.textContent = "Player Wins!!";
  } else result.textContent = "Draw!!";
}
// button.addEventListener("click", game);

// // function game() {
// //   for (let mouseClick = 0; mouseClick < 5; mouseClick++) {
// //     let playerSelection = prompt("choose Rock or Paper or Scissors");
// //     console.log(singleround(computerSelection, playerSelection));
// //     if (mouseClick == 4) {
// //       console.log(gameWinner());
// //       break;
// //     }
// //   }
// // }
