
let text = document.querySelector("#text");
let wordCount = document.querySelector("#wordCount");
let charCount = document.querySelector("#charCount");
let clear = document.querySelector("#clear");

text.addEventListener("input", function () {
  let value = text.value;

  // Count characters
  charCount.textContent = value.length;

  // Count words
  let words = value.trim().split(/\s+/);
  wordCount.textContent = value.trim() === "" ? 0 : words.length;
});

// Clear text
clear.addEventListener("click", function () {
  text.value = "";
  wordCount.textContent = 0;
  charCount.textContent = 0;
});