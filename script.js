let rockBtn = document.createElement("button");
let paperBtn = document.createElement("button");
let scissorsBtn = document.createElement("button");
let resetBtn = document.createElement("button");

rockBtn.classList.add("play-button");
paperBtn.classList.add("play-button");
scissorsBtn.classList.add("play-button");

rockBtn.textContent = "rock";
paperBtn.textContent = "paper";
scissorsBtn.textContent = "scissors";
resetBtn.textContent = "reset";

document.body.appendChild(rockBtn);
document.body.appendChild(paperBtn);
document.body.appendChild(scissorsBtn);
document.body.appendChild(resetBtn);

let results = document.createElement("div");
document.body.appendChild(results);

let humanScore = 0;
let computerScore = 0;

resetBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  document
    .querySelectorAll(".play-button")
    .forEach((btn) => btn.removeAttribute("disabled"));
  results.textContent = "";
});

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

document.body.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    let choice = "";
    switch (e.target.textContent) {
      case "rock":
        choice = "rock";
        playRound(choice, getComputerChoice());
        break;
      case "paper":
        choice = "paper";
        playRound(choice, getComputerChoice());
        break;
      case "scissors":
        choice = "scissors";
        playRound(choice, getComputerChoice());
        break;
    }
  }
});

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
    (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
    (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    results.textContent = `You win! ${
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    } beats ${computerChoice}! \nTotal score: Human: ${humanScore}, Computer: ${computerScore}`;
  }

  if (
    (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") ||
    (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") ||
    (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    results.textContent = `You lose! ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    } beats ${humanChoice}! \nTotal score: Human: ${humanScore}, Computer: ${computerScore}`;
  }

  if (humanChoice.toLowerCase() === computerChoice) {
    results.textContent = `It's a draw! Both players drew ${computerChoice}! \nTotal score: Human: ${humanScore}, Computer: ${computerScore}`;
  }

  if (humanScore >= 5) {
    results.textContent = `You win the set! The humanity thrives! \nTotal score: Human: ${humanScore}, Computer: ${computerScore}`;
    document
      .querySelectorAll(".play-button")
      .forEach((btn) => btn.setAttribute("disabled", true));
  }

  if (computerScore >= 5) {
    results.textContent = `You lose the set! The machines reign supreme! \nTotal score: Human: ${humanScore}, Computer: ${computerScore}`;
    document
      .querySelectorAll(".play-button")
      .forEach((btn) => btn.setAttribute("disabled", true));
  }
}
