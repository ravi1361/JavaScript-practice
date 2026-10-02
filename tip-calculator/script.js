let bill = document.querySelector("#bill");
let tip = document.querySelector("#tip");
let calculate = document.querySelector("#calculate");

let tipAmount = document.querySelector("#tipAmount");
let totalAmount = document.querySelector("#totalAmount");

calculate.addEventListener("click", function () {
  let billValue = Number(bill.value);
  let tipValue = Number(tip.value);

  let tipPrice = (billValue * tipValue) / 100;
  let total = billValue + tipPrice;

  tipAmount.textContent = `Tip: ₹${tipPrice}`;
  totalAmount.textContent = `Total: ₹${total}`;
});