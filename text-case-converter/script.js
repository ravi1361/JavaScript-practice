let text = document.querySelector("#text");

let upper = document.querySelector("#upper");
let lower = document.querySelector("#lower");
let clear = document.querySelector("#clear");

upper.addEventListener("click", function () {
  text.value = text.value.toUpperCase();
});

lower.addEventListener("click", function () {
  text.value = text.value.toLowerCase();
});

clear.addEventListener("click", function () {
  text.value = "";
});