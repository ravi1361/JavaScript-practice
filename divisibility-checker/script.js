function checkDivisibility() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = document.getElementById("result");

    if (num1 === "" || num2 === "") {
        result.textContent = "Please enter both numbers!!";
    } else if (Number(num2) === 0) {
        result.textContent = "Cannot divide by zero.";
    } else if (Number(num1) % Number(num2) === 0) {
        result.textContent = num1 + " is divisible by " + num2;
    } else {
        result.textContent = num1 + " is not divisible by " + num2;
    }
}
