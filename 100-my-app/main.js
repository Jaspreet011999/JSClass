const FORM = document.getElementById("form");

// Declare the global variabconst
const MONEY = 100;
const MISSING_GROCERIES = ["vegetables", "fruits", "snacks"];

const ERR = document.getElementById("err");
const SHOW_DECISION = document.getElementById("decision");

let inputData = [];
let decision = "";

function buyGroceries(
  itemPrice,
  quantity,
  discount,
  discountStore,
  isFresh,
  expiryDate
) {
  if (MONEY >= 100 && MISSING_GROCERIES.length !== 0) {
    decision = "I am going to the grocery store";

    if (discountStore) {
      decision =
        "We are going to this grocery store because groceries will be affordable";

      if (isFresh) {
        decision = "Let's proceed and check expiry date before we buy";

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

  const errMsg = [];

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
    errMsg.push("Please fill in all required fields with valid values.");
    ERR.textContent = errMsg;
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

  renderDecision();
});

function updateDOM(input) {
  const divEl = document.querySelector("#output");
  const j = document.createElement("div");
  j.textContent = input;
  divEl.appendChild(j);
}

function renderDecision() {
  console.log(decision);
  const decisionMsg = [];
  decisionMsg.push("Here is the decision based on the data you input: ");
  decisionMsg.push(`${decision}`);
  SHOW_DECISION.textContent = decisionMsg;
}
function clearForm() {
  FORM.reset();
}
