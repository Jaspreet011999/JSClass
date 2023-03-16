const FORM_EL = document.getElementById("form-input");
const ERR = document.getElementById("err");

//update the DOM

const mpgObj = {
  myMPG: [],
  myTripCost: [],
  trackMPGandCost: function (miles, gallons, price) {
    const MPG = miles / gallons;
    const tripCost = MPG * price;
    mpgObj.myMPG.push(MPG);
    mpgObj.myTripCost.push(tripCost);
    mpgObj.updateDOM(
      `Your MPG is ${mpgObj.myMPG} miles per gallon and your trip cost is ${mpgObj.myTripCost}`
    );
  },
  updateDOM: function (input) {
    const divEl = document.querySelector("#output");
    const j = document.createElement("div");
    j.textContent = input;
    divEl.appendChild(j);
  },
  calculateSum: function (carTracker) {
    let sum = 0;
    for (let i = 0; i < carTracker.length; i++) {
      sum = sum + carTracker[i];
    }
    carTracker.forEach((element) => {
      sum += element;
    });
    for (value of carTracker) {
      sum += value;
    }
    return sum;
  },
  calculateAvgValue: function () {
    let valueCost = 0;
    let totalMPG = 0;
    for (let i = 0; i < mpgObj.myTripCost.length; i++) {
      totalMPG += mpgObj.myMPG[i];
      valueCost += mpgObj.myTripCost[i];
    }

    let avgValue = valueCost / mpgObj.myTripCost.length;
    let avgMPG = totalMPG / mpgObj.myMPG.length;
    mpgObj.updateDOM(`Average ValueCost is ${avgValue}`);
    mpgObj.updateDOM(`Average totalMPG is ${avgMPG}`);
  },
};

FORM_EL.addEventListener("submit", (e) => {
  e.preventDefault();
  const errMsg = [];
  const miles = parseInt(e.target.miles.value);
  const gallons = parseInt(e.target.gallons.value);
  const price = parseInt(e.target.price.value);
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
  } else {
    mpgObj.trackMPGandCost(miles, gallons, price);
    ERR.textContent = "";
    mpgObj.calculateAvgValue();
  }
});
