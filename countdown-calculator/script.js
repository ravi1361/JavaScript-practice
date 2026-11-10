function calculateDays() {
    let selectedDate = document.getElementById("targetDate").value;
    let result = document.getElementById("result");

    if (selectedDate === "") {
        result.textContent = "Please select a date.";
        return;
    }

    let today = new Date();
    let target = new Date(selectedDate + "T00:00:00");

    today.setHours(0, 0, 0, 0);

    let difference = target - today;
    let days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    if (days > 0) {
        result.textContent = days + " days remaining!";
    } else if (days === 0) {
        result.textContent = "The selected date is today!";
    } else {
        result.textContent = "This date has already passed.";
    }
}