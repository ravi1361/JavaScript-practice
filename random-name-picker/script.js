
const names = ["Ravi", "Amit", "Rahul", "Priya", "Neha"];

const pickBtn = document.getElementById("pickBtn");
const result = document.getElementById("result");

pickBtn.addEventListener("click", function () {
    const index = Math.floor(Math.random() * names.length);
    result.textContent = names[index];
});
