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

function calculateAverages(MY_TRIP_COST) {
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

export { trackMPGandCost, calculateAverages };
