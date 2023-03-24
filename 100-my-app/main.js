// Declare the variables
const money = 100;
const missingGroceries = ['vegetables', 'fruits', 'snacks'];
// const affordableGrocery = ['Walmart', 'Costco','Dollar tree'];
const discountStore = true; 
const isFresh = true;
const expiryDate = 1; //number of days before it expires
const total = 0;
const discount = 0.1;
const itemPrice = 10


if(money >= 100 && missingGroceries.length !== 0){
     console.log("I am going to the grocery store");

     if(discountStore){
         console.log("We are going to this grocery store because groceries will be affordable")

         if(isFresh && expiryDate >= 5){
         total = (itemPrice * quantity) * (1-discount)
         console.log("Let's proceed and buy groceries")

         }
         else{
            console.log("I will not buy from this store because food is not fresh or is expiring soon")
         }
     }
     else{
        console.log("I will find a store with discount")
     }
 }
 else{
  console.log("I am not going to the grocery store");
 }