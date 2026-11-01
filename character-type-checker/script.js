
const input = document.getElementById("charInput");
const button = document.getElementById("checkBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
    const char = input.value;

    if (!char) {
        result.textContent = "Please enter a character!";
    } else if (/[a-z]/i.test(char)) {
        result.textContent = "It's an Alphabet!";
    } else if (/[0-9]/.test(char)) {
        result.textContent = "It's a Number!";
    } else {
        result.textContent = "It's a Special Character!";
    }
});
