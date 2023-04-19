function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("SLIGHT RAIN");
    }, 100);
  });
}

function getWeatherIcon(weather) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      switch (weather) {
        case "Sunny":
          resolve("🏖️");
          break;
        case "Cloudy":
          resolve("⛅");
          break;
        case "Rainy":
          resolve("☔");
          break;
        default:
          reject("NO ICON FOUND");
      }
    }, 100);
  });
}

function onSuccess(data) {
  console.log("Success", data);
}
function onError(error) {
  console.log("Error", error);
}
getWeather().then(getWeatherIcon).then(onSuccess, onError);
