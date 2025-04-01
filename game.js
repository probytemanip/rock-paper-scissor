let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const chosen = choices[parseInt(Math.random() * 3)];
  return chosen;
}

function getHumanChoice() {
  const choice = prompt("What do you choose rock,paper or scissors?");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  switch (true) {
    case (computerChoice === "rock" && humanChoice == "scissors") ||
      (computerChoice === "scissors" && humanChoice === "paper") ||
      (computerChoice === "paper" && humanChoice === "rock"):
      computerScore += 1;
      break;
    case (computerChoice === "scissors" && humanChoice == "rock") ||
      (computerChoice === "paper" && humanChoice === "scissors") ||
      (computerChoice === "rock" && humanChoice === "paper"):
      humanScore += 1;
      break;
    default:
  }
  console.log(`Human:${humanScore} Computer:${computerScore}`);
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore > computerScore) {
    console.log("Human wins");
  } else if (computerScore > humanScore) {
    console.log("Computer wins");
  } else {
    console.log("Its a draw");
  }
}
playGame();
