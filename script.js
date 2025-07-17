function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Choose your play.", "");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (
      (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
      (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
      (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(
        `You win! ${
          humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
        } beats ${computerChoice}! \nTotal score: Human: ${humanScore}, Computer: ${computerScore}`
      );
    }

    if (
      (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") ||
      (humanChoice.toLowerCase() === "paper" &&
        computerChoice === "scissors") ||
      (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock")
    ) {
      computerScore++;
      console.log(
        `You lose! ${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        } beats ${humanChoice}! \nTotal score: Human: ${humanScore}, Computer: ${computerScore}`
      );
    }

    if (humanChoice.toLowerCase() === computerChoice) {
      console.log(
        `It's a draw! Both players drew ${computerChoice}! \nTotal score: Human: ${humanScore}, Computer: ${computerScore}`
      );
    }
  }

  while (humanScore < 5 && computerScore < 5) {
    playRound();
  }

  if (humanScore === 5) {
    console.log("You win the set! Humanity keeps!");
  }

  if (computerScore === 5) {
    console.log("You lose the set! The machines reign supreme!");
  }
}

playGame();
