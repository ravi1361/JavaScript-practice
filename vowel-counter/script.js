
const input = document.getElementById("textInput");
const button = document.getElementById("countBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
    const text = input.value.toLowerCase();
    let count = 0;

    for (let char of text) {
        if ("aeiou".includes(char)) {
            count++;
        }
    }

    result.textContent = "Total vowels: " + count;
});
