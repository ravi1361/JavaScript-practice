
let roll = document.querySelector("#roll");
let result = document.querySelector("#result");

roll.addEventListener("click", function () {
  let number = Math.floor(Math.random() * 6) + 1;

  result.textContent = "You rolled: " + number;
});