let input = document.querySelector("#name");
let output = document.querySelector("#output");

input.addEventListener("input", function () {
  output.textContent = input.value;
});