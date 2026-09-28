let quotes = [
  "Keep learning, keep growing.",
  "Success comes from consistent effort.",
  "Small progress is still progress.",
  "Don't stop until you are proud.",
  "Practice makes you better."
];

let quote = document.querySelector("#quote");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * quotes.length);

  quote.textContent = quotes[randomIndex];
});