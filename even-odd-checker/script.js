function checkNumber() {
    let num = Number(document.getElementById("number").value);
    let result = document.getElementById("result");

    if (document.getElementById("number").value === "") {
        result.textContent = "Please enter a number";
    } else if (num % 2 === 0) {
        result.textContent = num + " is Even";
    } else {
        result.textContent = num + " is Odd";
    }
}