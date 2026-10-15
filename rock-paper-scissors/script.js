
let choices = document.querySelectorAll(".choice");
let result = document.querySelector("#result");
let moves = document.querySelector("#moves");
let userScoreDisplay = document.querySelector("#userScore");
let computerScoreDisplay = document.querySelector("#computerScore");
let reset = document.querySelector("#reset");

let userScore = 0;
let computerScore = 0;

choices.forEach(function (button) {
  button.addEventListener("click", function () {
    let userChoice = button.dataset.choice;

    let options = ["rock", "paper", "scissors"];
    let computerChoice =
      options[Math.floor(Math.random() * options.length)];

    moves.textContent =
      `You chose ${userChoice}. Computer chose ${computerChoice}.`;

    if (userChoice === computerChoice) {
      result.textContent = "It's a draw!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      result.textContent = "You win this round! 🎉";
      userScore++;
    } else {
      result.textContent = "Computer wins this round!";
      computerScore++;
    }

    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
  });
});

reset.addEventListener("click", function () {
  userScore = 0;
  computerScore = 0;

  userScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;

  result.textContent = "Choose your move!";
  moves.textContent = "";
});
