// Declare the global variables

const money = 100;
const missingGroceries = ["vegetables", "fruits", "snacks"];

function buyGroceries(
  itemPrice,
  quantity,
  discount,
  discountStore,
  isFresh,
  expiryDate
) {
  let decision;

  if (money >= 100 && missingGroceries.length !== 0) {
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

buyGroceries(90, 10, 15, true, true, 6);
buyGroceries(90, 10, 15, true, false, 6);
buyGroceries(90, 10, 15, true, true, 1);
