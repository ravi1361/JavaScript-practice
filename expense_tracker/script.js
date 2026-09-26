let form = document.querySelector("#expenseForm");
let expenseName = document.querySelector("#expenseName");
let expenseAmount = document.querySelector("#expenseAmount");
let expenseList = document.querySelector("#expenseList");
let total = document.querySelector("#total");

let expenses = [];

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  let expense = {
    name: expenseName.value,
    amount: Number(expenseAmount.value)
  };

  expenses.push(expense);

  expenseList.innerHTML = "";

  let totalAmount = 0;

  expenses.forEach(function (expense) {
    let li = document.createElement("li");

    li.textContent = `${expense.name} - ₹${expense.amount}`;

    expenseList.appendChild(li);

    totalAmount += expense.amount;
  });

  total.textContent = totalAmount;

  form.reset();
});