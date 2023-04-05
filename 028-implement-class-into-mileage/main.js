import { renderTable } from "./render.js";
import { getTripData, saveTripData } from "./storage.js";
import { trackMPGandCost, calculateAverages } from "./calculations.js";
import { Trip } from "./trip.js";

const FORM = document.getElementById("form-input");
const ERR = document.getElementById("err");

const MY_TRIP_COST = getTripData();
renderTable(MY_TRIP_COST);

//update the DOM

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
  const miles = parseFloat(e.target.miles.value);
  const gallons = parseFloat(e.target.gallons.value);
  const price = parseFloat(e.target.price.value);

  const isValid = isFormValid(miles, gallons, price);
  if (isValid) {
    ERR.textContent = "";
    const trip = new Trip(miles, gallons, price);
    MY_TRIP_COST.push(trip);
    saveTripData(MY_TRIP_COST);
    renderTable(MY_TRIP_COST);
    calculateAverages(MY_TRIP_COST);
  }

  FORM.reset();
});
