
const input = document.getElementById("wordInput");
const button = document.getElementById("reverseBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
    const word = input.value;

    if (!word.trim()) {
        result.textContent = "Please enter a word!";
        return;
    }

    const reversed = [...word].reverse().join("");

    result.textContent = "Reversed: " + reversed;
});
