function computerplay() {
    let random = ["Rock", "Paper", "Scissors"];
    return random[Math.floor(Math.random() * 3)];
  }
  
  function singleround(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
      return "Draw";
    } else if (computerSelection == "Rock" && playerSelection == "Paper") {
      return "You lose";
    } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
      return "You win";
    } else if (computerSelection == "Paper" && playerSelection == "Rock") {
      return "You win";
    } else if (computerSelection == "Paper" && playerSelection == "Scissors") {
      return "You lose";
    } else if (computerSelection == "Scissors" && playerSelection == "Rock") {
      return "You lose";
    } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
      return "You win";
    }
  }
  
  let playerSelection = "Rock";
  let computerSelection = computerplay();
  console.log(singleround(computerSelection, playerSelection));
  