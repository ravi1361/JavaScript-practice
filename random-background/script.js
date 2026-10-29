
const button = document.getElementById("changeBtn");
const colorCode = document.getElementById("colorCode");

button.addEventListener("click", function () {
    const color = "#" + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    document.body.style.backgroundColor = color;
    colorCode.textContent = "Color: " + color;
});
