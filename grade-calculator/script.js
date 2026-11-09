function calculateGrade() {
    let marks = Number(document.getElementById("marks").value);
    let result = document.getElementById("result");

    if (document.getElementById("marks").value === "") {
        result.textContent = "Please enter your marks.";
    } else if (marks < 0 || marks > 100) {
        result.textContent = "Enter marks between 0 and 100.";
    } else if (marks >= 90) {
        result.textContent = "Grade: A";
    } else if (marks >= 75) {
        result.textContent = "Grade: B";
    } else if (marks >= 60) {
        result.textContent = "Grade: C";
    } else if (marks >= 40) {
        result.textContent = "Grade: D";
    } else {
        result.textContent = "Grade: F";
    }
}