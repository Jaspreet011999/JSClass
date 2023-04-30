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
  isFresh
  // expiryDate
) {
  if (MONEY >= 100 && MISSING_GROCERIES.length !== 0) {
    decision = "I am going to the grocery store";

    if (discountStore) {
      decision =
        "We are going to this grocery store because groceries will be affordable";

      if (isFresh) {
        decision = "Let's proceed and buy groceries";

        // if (expiryDate >= 5) {
        //   total = itemPrice * quantity * ((100 - discount) / 100);
        //   decision = "Let's proceed and buy groceries";
        // } else {
        //   decision =
        //     "I will not buy from this store groceries are expriring soon";
        // }
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
    // expiryDate: expiryDate,
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
  // const expiryDate = document.getElementById("expiryDate").value;

  const errMsg = [];

  if (
    !itemPrice ||
    itemPrice <= 0 ||
    !quantity ||
    quantity <= 0 ||
    !discount ||
    discount < 0 ||
    discount > 100
    // expiryDate <= 0
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
    isFresh
    // expiryDate
  );

  inputData.push(groceriesData);
  console.log("Grocery list:", inputData);
  // updateDOM("Here is the data you input:");
  // updateDOM(` Itemprice: ${inputData[0].itemPrice}`);
  // updateDOM(` Quantity: ${inputData[0].quantity}`);
  // updateDOM(`Discount: ${inputData[0].discount}`);
  // updateDOM(` Discount Store: ${inputData[0].discountStore}`);
  // updateDOM(` Fresh: ${inputData[0].isFresh}`);
  // updateDOM(` Expiry Date: ${inputData[0].expiryDate}`);
  clearForm();

  renderGroceriesList();
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
  decisionMsg.push(
    `Here is the decision based on the data you input: ${decision}`
  );
  SHOW_DECISION.textContent = decisionMsg;
}

function renderGroceriesList() {
  const divEl = document.querySelector("#groceriesList");

  // Remove all existing children elements to prevent duplication
  while (divEl.firstChild) {
    divEl.removeChild(divEl.firstChild);
  }

  for (let i = 0; i < inputData.length; i++) {
    const { quantity, itemPrice, discountStore, isFresh } = inputData[i];

    // Create a new HTML element to display the object
    const groceryItemEl = document.createElement("div");
    groceryItemEl.classList.add("grocery-item");

    const quantityEl = document.createElement("div");
    quantityEl.textContent = `Quantity: ${quantity}`;
    groceryItemEl.appendChild(quantityEl);

    const itemPriceEl = document.createElement("div");
    itemPriceEl.textContent = `Item Price: $${itemPrice.toFixed(2)}`;
    groceryItemEl.appendChild(itemPriceEl);

    const discountStoreEl = document.createElement("div");
    discountStoreEl.textContent = `Discount Store: ${
      discountStore ? "Yes" : "No"
    }`;
    groceryItemEl.appendChild(discountStoreEl);

    const isFreshEl = document.createElement("div");
    isFreshEl.textContent = `Fresh: ${isFresh ? "Yes" : "No"}`;
    groceryItemEl.appendChild(isFreshEl);

    // Add an edit button to the grocery item
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      // When the edit button is clicked, update the input values for this grocery item
      document.getElementById("itemPrice").value = itemPrice;
      document.getElementById("quantity").value = quantity;
      document.getElementById("discount").value = inputData[i].discount;
      document.getElementById("discountStore").checked = discountStore;
      document.getElementById("isFresh").checked = isFresh;

      SHOW_DECISION.textContent = "";
      // Remove this grocery item from the list
      inputData.splice(i, 1);

      // Re-render the grocery list
      renderGroceriesList();
    });
    groceryItemEl.appendChild(editBtn);

    // Add a delete button to the grocery item
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      // Remove this grocery item from the list
      inputData.splice(i, 1);

      // Re-render the grocery list
      renderGroceriesList();
    });
    groceryItemEl.appendChild(deleteBtn);

    //Display our decision
    // const renderDecision = document.createElement("div");
    // renderDecision.textContent = `Here is the decision based on the data you input: ${decision}`;
    // renderDecision.style.color = "green";
    // groceryItemEl.appendChild(renderDecision);

    // Add the new element to the parent container
    divEl.appendChild(groceryItemEl);
  }
}

function clearForm() {
  FORM.reset();
}
