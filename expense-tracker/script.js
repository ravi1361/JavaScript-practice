
let form = document.querySelector("#expenseForm");
let expenseName = document.querySelector("#expenseName");
let expenseAmount = document.querySelector("#expenseAmount");
let expenseList = document.querySelector("#expenseList");
let total = document.querySelector("#total");

let totalAmount = 0;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = expenseName.value.trim();
  let amount = Number(expenseAmount.value);

  if (name === "" || !Number.isFinite(amount) || amount <= 0) {
    return;
  }

  let item = document.createElement("li");
  item.textContent = `${name} - ₹${amount.toFixed(2)}`;

  expenseList.appendChild(item);

  totalAmount += amount;
  total.textContent = totalAmount.toFixed(2);

  form.reset();
});
