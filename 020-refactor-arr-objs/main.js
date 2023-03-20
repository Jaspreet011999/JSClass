const FORM = document.getElementById("form-input");
const ERR = document.getElementById("err");
const AVG_OUTPUT = document.getElementById("avg_output");

const MY_TRIP_COST = [];

//update the DOM

const updateDOM = (input) => {
  const divEl = document.querySelector("#output");
  const j = document.createElement("div");
  j.textContent = input;
  divEl.appendChild(j);
};

const trackMPGandCost = (obj) => {
  const MPG = obj.miles / obj.gallons;
  const tripCost = obj.gallons * obj.price;
  updateDOM(`Miles per gallon is ${MPG} and trip cost ${tripCost}`, `#output`);
  obj.MPG = MPG;
  obj.tripCost = tripCost;
  return obj;
};

//const calculateSum = (arr) => {
//let sum = 0
//for (let i=0; i < arr.length;i++) {
//sum = sum + arr[i]

//}
//arr.array.forEach(element => {
// sum += element

//});
//for (value of arr) {
//sum += value
//}
//return sum
//}

const calculateAvgValue = () => {
  let valueCost = 0;
  for (let i = 0; i < MY_TRIP_COST.length; i++) valueCost += MY_TRIP_COST[i];
  let avgValue = valueCost / MY_TRIP_COST.length;
  updateDOM(`Average ValueCost is ${avgValue}`);
};

const calculateAverages = () => {
  let totalMPG = 0;
  let totalTripCost = 0;
  MY_TRIP_COST.forEach((obj) => {
    totalMPG += obj.MPG;
    totalTripCost += obj.tripCost;
  });
  const averageMPG = Math.round(totalMPG / MY_TRIP_COST.length);
  const averageTripCost = Math.round(totalTripCost / MY_TRIP_COST.length);
  updateDOM(`Average MPG is ${averageMPG}`);
  updateDOM(`Average Trip Cost is ${averageTripCost}`);
};

const isFormValid = (miles, gallons, price) => {
  const errMsg = [];
  if (miles === 0 || gallons === 0 || price === 0) {
    errMsg.push("check the input number but not 0!!");
  }
  if (price > 10000) {
    errMsg.push(
      "Make sure!!!??? I think this should be error... please check it again"
    );
    setTimeout(() => {
      ERR.textContent = "";
    }, 3000);
  }
  if (errMsg.length > 0) {
    ERR.textContent = errMsg;
    return false;
  } else {
    return true;
  }
};

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  //const errMsg = [];
  const miles = parseInt(e.target.miles.value);
  const gallons = parseInt(e.target.gallons.value);
  const price = parseInt(e.target.price.value);

  const isValid = isFormValid(miles, gallons, price);
  if (isValid) {
    const brand_newDataObj = {
      miles: miles,
      gallons: gallons,
      price: price,
    };
    ERR.textContent = "";
    AVG_OUTPUT.textContent = "";
    const updateDataObj = trackMPGandCost(brand_newDataObj);
    MY_TRIP_COST.push(updateDataObj);
    calculateAverages();
  }
  FORM.reset();
});
