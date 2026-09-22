let count = 0;

let countElement = document.querySelector("#count");
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let reset = document.querySelector("#reset");

increase.addEventListener("click", function () {
  count++;
  countElement.textContent = count;
});

decrease.addEventListener("click", function () {
  count--;
  countElement.textContent = count;
});

reset.addEventListener("click", function () {
  count = 0;
  countElement.textContent = count;
});