
const button = document.getElementById("generateBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    result.textContent = randomNumber;
});
