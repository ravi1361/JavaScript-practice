let button = document.querySelector("#changeColor");
let colorCode = document.querySelector("#colorCode");

button.addEventListener("click", function () {

  let randomColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = randomColor;

  colorCode.textContent = "Background: " + randomColor;

});