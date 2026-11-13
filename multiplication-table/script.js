
function generateTable() {
    let number = document.getElementById("number").value;
    let result = document.getElementById("result");

    if (number === "") {
        result.textContent = "Please enter a number.";
        return;
    }

    result.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        let line = document.createElement("p");
        line.textContent = `${number} × ${i} = ${number * i}`;
        result.appendChild(line);
    }
}
