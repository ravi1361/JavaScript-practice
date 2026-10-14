
let form = document.querySelector("#billForm");
let itemName = document.querySelector("#itemName");
let price = document.querySelector("#price");
let quantity = document.querySelector("#quantity");
let itemList = document.querySelector("#itemList");
let total = document.querySelector("#total");
let clear = document.querySelector("#clear");

let totalBill = 0;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = itemName.value.trim();
  let itemPrice = Number(price.value);
  let itemQuantity = Number(quantity.value);

  if (
    name === "" ||
    !Number.isFinite(itemPrice) ||
    itemPrice <= 0 ||
    !Number.isInteger(itemQuantity) ||
    itemQuantity <= 0
  ) {
    return;
  }

  let subtotal = itemPrice * itemQuantity;

  let item = document.createElement("li");
  item.textContent =
    `${name} × ${itemQuantity} = ₹${subtotal.toFixed(2)}`;

  itemList.appendChild(item);

  totalBill += subtotal;
  total.textContent = totalBill.toFixed(2);

  form.reset();
});

clear.addEventListener("click", function () {
  itemList.innerHTML = "";
  totalBill = 0;
  total.textContent = "0.00";
});
