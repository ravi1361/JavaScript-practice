const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Grapes",
    "Pineapple",
    "Watermelon",
    "Papaya",
    "Guava",
    "Strawberry"
];

const search = document.getElementById("search");
const fruitList = document.getElementById("fruitList");

function displayFruits(items) {
    fruitList.innerHTML = "";

    if (items.length === 0) {
        fruitList.innerHTML = "<li>No fruits found</li>";
        return;
    }

    items.forEach((fruit) => {
        const li = document.createElement("li");
        li.textContent = fruit;
        fruitList.appendChild(li);
    });
}

search.addEventListener("input", () => {
    const searchValue = search.value.toLowerCase().trim();

    const filteredFruits = fruits.filter((fruit) =>
        fruit.toLowerCase().includes(searchValue)
    );

    displayFruits(filteredFruits);
});

displayFruits(fruits);