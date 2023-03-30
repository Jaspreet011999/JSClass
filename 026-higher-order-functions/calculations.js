const AVG_OUTPUT = document.getElementById("avg_output");

function updateDOM(input) {
  const divEl = document.querySelector("#output");
  const j = document.createElement("div");
  j.textContent = input;
  divEl.appendChild(j);
}

function trackMPGandCost(miles, gallons, price) {
  const MPG = Number((miles / gallons).toFixed(2));
  const tripCost = Number((gallons * price).toFixed(2));
  //updateDOM(`Miles per gallon is ${MPG} and trip cost ${tripCost}`, `#output`);
  return {
    miles: miles,
    gallons: gallons,
    price: price,
    MPG: MPG,
    tripCost: tripCost,
  };
}

function calculateAverages(MY_TRIP_COST) {
  AVG_OUTPUT.innerHTML = "";
  const totals = MY_TRIP_COST.reduce(function (sum, obj) {
    return {
      MPG: sum.MPG + obj.MPG,
      tripCost: sum.tripCost + obj.tripCost,
    };
  });
  console.log(totals);
  const averageMPG = Number((totals.MPG / MY_TRIP_COST.length).toFixed(2));
  const averageTripCost = Number(
    (totals.tripCost / MY_TRIP_COST.length).toFixed(2)
  );
  updateDOM(`Average MPG is ${averageMPG}`);
  updateDOM(`Average Trip Cost is ${averageTripCost}`);
}

export { updateDOM, trackMPGandCost, calculateAverages };
