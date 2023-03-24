import { renderTable } from "./render.js";

const FORM = document.getElementById("form-input");
const ERR = document.getElementById("err");
const AVG_OUTPUT = document.getElementById("avg_output");

function getTripData() {
  const tripDataJSON = localStorage.getItem("tripData");
  if (tripDataJSON !== null) {
    return JSON.parse(tripDataJSON);
  } else {
    return [];
  }
}

function saveTripData() {
  localStorage.setItem("tripData", JSON.stringify(MY_TRIP_COST));
}

const MY_TRIP_COST = getTripData();
renderTable(MY_TRIP_COST);

//update the DOM

function updateDOM(input) {
  const divEl = document.querySelector("#output");
  const j = document.createElement("div");
  j.textContent = input;
  divEl.appendChild(j);
}

function trackMPGandCost(miles, gallons, price) {
  const MPG = Math.round(miles / gallons);
  const tripCost = Math.round(gallons * price);
  //updateDOM(`Miles per gallon is ${MPG} and trip cost ${tripCost}`, `#output`);
  return {
    miles: miles,
    gallons: gallons,
    price: price,
    MPG: MPG,
    tripCost: tripCost,
  };
}

function calculateAverages() {
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
}

function isFormValid(miles, gallons, price) {
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
}

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  //const errMsg = [];
  const miles = parseInt(e.target.miles.value);
  const gallons = parseInt(e.target.gallons.value);
  const price = parseInt(e.target.price.value);

  const isValid = isFormValid(miles, gallons, price);
  if (isValid) {
    ERR.textContent = "";
    AVG_OUTPUT.textContent = "";
    const updateDataObj = trackMPGandCost(miles, gallons, price);
    MY_TRIP_COST.push(updateDataObj);
    saveTripData();
    renderTable(MY_TRIP_COST);
    calculateAverages();
  }

  FORM.reset();
});
