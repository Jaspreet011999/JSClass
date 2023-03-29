function getTripData() {
  const tripDataJSON = localStorage.getItem("tripData");
  if (tripDataJSON !== null) {
    return JSON.parse(tripDataJSON);
  } else {
    return [];
  }
}

function saveTripData(MY_TRIP_COST) {
  localStorage.setItem("tripData", JSON.stringify(MY_TRIP_COST));
}

export { getTripData, saveTripData };
