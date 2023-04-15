// let pizza;

// function orderPizza() {
//   console.log("Order pizza");
//   setTimeout(() => {
//     pizza = "🍕";
//     console.log(`${pizza} is ready`);
//   }, 2000);
//   console.log("Pizza was ordered");
// }
// orderPizza();
// console.log('Call Qoli');
// console.log(`Eat ${pizza}`);

function orderPizza(callback) {
  setTimeout(() => {
    const pizza = "🍕";
    callback(pizza);
  }, 2000);
}

function pizzaReady(pizza) {
  console.log(`Eat ${pizza}`);
}

orderPizza(pizzaReady);
console.log("Call Qoli");


function thing1(callback) {
    //call pizza shop
    callback()
}
function thing1(callback) {
    //orderpizza
    callback()
}
function thing1(callback) {
    //eat pizza
    callback()
}