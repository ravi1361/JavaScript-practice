
let quote = document.querySelector("#quote");
let newQuote = document.querySelector("#newQuote");

let quotes = [
  "Believe in yourself!",
  "Never stop learning.",
  "Small steps lead to big results.",
  "Every day is a fresh start.",
  "Practice makes progress.",
  "Dream big and work hard.",
  "Keep going, you can do it!"
];

newQuote.addEventListener("click", function () {
  let index = Math.floor(Math.random() * quotes.length);

  quote.textContent = quotes[index];
});
