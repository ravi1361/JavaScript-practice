
const input = document.getElementById("sentence");
const button = document.getElementById("findBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
    const words = input.value.trim().split(/\s+/);

    if (!input.value.trim()) {
        result.textContent = "Please enter a sentence!";
        return;
    }

    let longestWord = "";

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    result.textContent = "Longest word: " + longestWord;
});
