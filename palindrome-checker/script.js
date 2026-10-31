
const word = document.getElementById("word");
const button = document.getElementById("checkBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
    const text = word.value.toLowerCase().replace(/\s/g, "");
    const reversed = text.split("").reverse().join("");

    if (text && text === reversed) {
        result.textContent = "Yes! It's a Palindrome 🎉";
    } else {
        result.textContent = "No, it's not a Palindrome!";
    }
});
