
const input = document.getElementById("items");
const button = document.getElementById("removeBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
    const values = input.value.split(",").map(item => item.trim());

    const uniqueValues = [...new Set(values)].filter(Boolean);

    result.textContent = uniqueValues.length
        ? uniqueValues.join(", ")
        : "Please enter some items!";
});
