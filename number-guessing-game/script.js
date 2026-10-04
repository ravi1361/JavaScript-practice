let guess = document.querySelector("#guess");
let check = document.querySelector("#check");
let message = document.querySelector("#message");
let attemptsText = document.querySelector("#attempts");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

check.addEventListener("click", function () {
  let userGuess = Number(guess.value);

  attempts++;

  attemptsText.textContent = `Attempts: ${attempts}`;

  if (userGuess === randomNumber) {
    message.textContent = "Correct! 🎉";
  } else if (userGuess > randomNumber) {
    message.textContent = "Too high!";
  } else {
    message.textContent = "Too low!";
  }
});