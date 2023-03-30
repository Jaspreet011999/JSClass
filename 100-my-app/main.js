const FORM = document.getElementById("form");

// Declare the global variabconst
const MONEY = 100;
const MISSING_GROCERIES = ["vegetables", "fruits", "snacks"];

let inputData = [];

function buyGroceries(
  itemPrice,
  quantity,
  discount,
  discountStore,
  isFresh,
  expiryDate
) {
  let decision;

  if (MONEY >= 100 && MISSING_GROCERIES.length !== 0) {
    decision = "I am going to the grocery store";

    if (discountStore) {
      decision =
        "We are going to this grocery store because groceries will be affordable";

      if (isFresh) {
        if (expiryDate >= 5) {
          total = itemPrice * quantity * ((100 - discount) / 100);
          decision = "Let's proceed and buy groceries";
        } else {
          decision =
            "I will not buy from this store groceries are expriring soon";
        }
      } else {
        decision = "I will not buy from this store because food is not fresh";
      }
    } else {
      decision = "I will find a store with discount";
    }
  } else {
    decision = "I am not going to the grocery store";
  }
  const groceriesData = {
    quantity: quantity,
    itemPrice: itemPrice,
    discountStore: discountStore,
    discount: discount,
    isFresh: isFresh,
    expiryDate: expiryDate,
  };

  return groceriesData;
}

FORM.addEventListener("submit", function (event) {
  event.preventDefault();
  const itemPrice = parseFloat(document.getElementById("itemPrice").value);
  const quantity = parseInt(document.getElementById("quantity").value);
  const discount = parseInt(document.getElementById("discount").value);
  const discountStore = document.getElementById("discountStore").checked;
  const isFresh = document.getElementById("isFresh").checked;
  const expiryDate = document.getElementById("expiryDate").value;

  if (
    !itemPrice ||
    itemPrice <= 0 ||
    !quantity ||
    quantity <= 0 ||
    !discount ||
    discount < 0 ||
    discount > 100 ||
    expiryDate <= 0
  ) {
    alert("Please fill in all required fields with valid values.");
    return;
  }

  const groceriesData = buyGroceries(
    itemPrice,
    quantity,
    discount,
    discountStore,
    isFresh,
    expiryDate
  );

  inputData.push(groceriesData);
  console.log("Grocery list:", inputData);
  updateDOM("Here is the data you input:");
  updateDOM(` Itemprice: ${inputData[0].itemPrice}`);
  updateDOM(` Quantity: ${inputData[0].quantity}`);
  updateDOM(`Discount: ${inputData[0].discount}`);
  updateDOM(` Discount Store: ${inputData[0].discountStore}`);
  updateDOM(` Fresh: ${inputData[0].isFresh}`);
  updateDOM(` Expiry Date: ${inputData[0].expiryDate}`);
  clearForm();
});

function updateDOM(input) {
  const divEl = document.querySelector("#output");
  const j = document.createElement("div");
  j.textContent = input;
  divEl.appendChild(j);
}

function clearForm() {
  FORM.reset();
}
