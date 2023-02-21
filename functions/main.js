function salesTotal(price,quantity){
    let productPrice = price * quantity;
    let salesTotalValue = productPrice .toFixed(2);
    return salesTotalValue

}
let futurevalue = salesTotal(7.89,4)
console.log(futurevalue);
