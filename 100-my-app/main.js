const FORM = document.getElementById("form");

// Declare the global variabconst 
const MONEY = 100;
const MISSING_GROCERIES = ["vegetables", "fruits", "snacks"];

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
    itemPrice: itemPrice,
    discountStore: discountStore,
    discount: discount,
    isFresh: isFresh,
    expiryDate: expiryDate,
    total: total,
    decision: decision,
  };

  return groceriesData;
}

FORM.addEventListener("submit", function (event) {
  event.preventDefault();
  const itemPrice = parseInt(document.querySelector("#itemPrice").value);
  const quantity = parseInt(document.querySelector("#quantity").value);
  const discount = parseInt(document.querySelector("#discount").value);
  const discountStore = document.querySelector("#discountStore").checked;
  const isFresh = document.querySelector("#isFresh").checked;
  const expiryDate = parseInt(document.querySelector("#expiryDate").value);

  // store the inputs in formData object
  const formData = {
    itemPrice: itemPrice,
    quantity: quantity,
    discount: discount,
    discountStore: discountStore,
    isFresh: isFresh,
    expiryDate: expiryDate,
  };

  // Log the input data to the console
  console.log(formData);
});
