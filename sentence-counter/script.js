
const input = document.getElementById("textInput");
const button = document.getElementById("countBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
    const text = input.value.trim();

    if (!text) {
        result.textContent = "Please enter some text!";
        return;
    }

    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim());

    result.textContent = "Total sentences: " + sentences.length;
});
