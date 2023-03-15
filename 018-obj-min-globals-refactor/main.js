// created a variable called FORM and assigned it to the form elemt
const FORM = document.getElementById("form-input");
// created a variable called ERR and assigned it to the element with the id of err
const ERR = document.getElementById("err");
// created a variable AVG_OUTPUT and assigned it to the element with the id of avg_output
const AVG_OUTPUT = document.getElementById("avg_output");

// created an object to hold all the methods and variables
const mpgObj = {
  //created an empty array for each the MPG and trip cost
  myMPG: [],
  myTripCost: [],
  // created a method to update the DOM
  updateDOM: (input, id) => {
    // created a variable and assigned it to the element with the id of output
    const divEl = document.querySelector("#output");
    // created a variable and assigned it to a new div element
    const j = document.createElement("div");
    // assigned the text content of the new div element to the input
    j.textContent = input;
    // appended the new div element to the div element with the id of output
    divEl.appendChild(j);
  },
  // created a method to calculate
  trackMPGandCost: function (miles, gallons, price) {
    // created a variable called MPG and assigned it to the miles divided by the gallons
    const MPG = Math.round(miles / gallons);
    // created a variable called tripCost and assigned it to the gallons multiplied by the price
    const tripCost = Math.round(gallons * price);
    // created the updateDOM method and passed in the MPG and tripCost variables
    this.updateDOM(`miles per gallon is ${MPG}and trip cost is ${tripCost}`);
    this.myMPG.push(MPG);
    this.myTripCost.push(tripCost);
  },
  calculateSUM: (arr) => {
    let sum = 0;
    for (value of arr) {
      sum += value;
    }
    return sum;
  },
  calculateAvgValue: function () {
    const sumMPG = this.calculateSUM(this.myMPG);
    const sumTripCost = this.calculateSUM(this.myTripCost);
    const avgMPG = Math.round(sumMPG / this.myMPG.length);
    const avgTripCost = Math.round(sumTripCost / this.myTripCost.length);
    this.updateDOM(`Average MPG is${avgMPG}`, `#output-avg`);
    this.updateDOM(`Average Trip Cost is ${avgTripCost}`, `#output-avg`);
  },
  validateForm: function (e) {
    const errMsg = [];
    const miles = parseInt(e.target.miles.value);
    const gallons = parseInt(e.target.gallons.value);
    const price = parseInt(e.target.price.value);
    if (miles === 0 || gallons === 0 || price === 0) {
      errMsg.push(`please put another number not zero`);
    }
    if (price > 1000) {
      errMsg.push(`i am thinking this is in error`);
    }
    if (errMsg.lenght > 0) {
      ERR.textContent = errMsg;
    } else {
      ERR.textContent = "";
      AVG_OUTPUT.textContent = "";
      this.trackMPGandCost(miles, gallons, price);
      this.calculateAvgValue();
    }
    FORM.reset();
  },
};
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  mpgObj.validateForm(e);
});
