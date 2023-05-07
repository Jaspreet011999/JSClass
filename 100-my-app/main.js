const FORM = document.getElementById("form");

// Declare the global variabconst
const MONEY = 100;
const MISSING_GROCERIES = ["vegetables", "fruits", "snacks"];

const ERR = document.getElementById("err");
const SHOW_DECISION = document.getElementById("decision");

let decision = "";
let inputData = [];

const savedInputData = localStorage.getItem("inputData");
if (savedInputData) {
  inputData = JSON.parse(savedInputData);
  renderGroceriesList();
}

const savedDecision = localStorage.getItem("decision");
if (savedDecision) {
  decision = savedDecision;
  renderDecision();
}

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

  // Save data to local storage
  localStorage.setItem("inputData", JSON.stringify(inputData));
  localStorage.setItem("decision", decision);
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

    // Render the edit and delete buttons
    const [editBtn, deleteBtn] = renderEditDeleteButtons(i);
    groceryItemEl.appendChild(editBtn);
    groceryItemEl.appendChild(deleteBtn);

    // Add the new element to the parent container
    divEl.appendChild(groceryItemEl);
  }
}

function renderEditDeleteButtons(i) {
  // Add an edit button to the grocery item
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    // When the edit button is clicked, update the input values for this grocery item
    document.getElementById("itemPrice").value = inputData[i].itemPrice;
    document.getElementById("quantity").value = inputData[i].quantity;
    document.getElementById("discount").value = inputData[i].discount;
    document.getElementById("discountStore").checked =
      inputData[i].discountStore;
    document.getElementById("isFresh").checked = inputData[i].isFresh;

    SHOW_DECISION.textContent = "";
    // Remove this grocery item from the list
    inputData.splice(i, 1);

    // Re-render the grocery list
    renderGroceriesList();
  });

  // Add a delete button to the grocery item
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    // Remove this grocery item from the list
    inputData.splice(i, 1);

    // Re-render the grocery list
    renderGroceriesList();
  });

  return [editBtn, deleteBtn];
}

function clearForm() {
  FORM.reset();
}
