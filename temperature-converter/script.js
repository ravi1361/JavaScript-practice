
let celsius = document.querySelector("#celsius");
let convert = document.querySelector("#convert");
let result = document.querySelector("#result");

convert.addEventListener("click", function () {
  if (celsius.value.trim() === "") {
    result.textContent = "Please enter a temperature.";
    return;
  }

  let fahrenheit = (Number(celsius.value) * 9 / 5) + 32;

  result.textContent = "Fahrenheit: " + fahrenheit.toFixed(1) + "°F";
});
