// function getWeather() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("SLIGHT RAIN");
//     }, 100);
//   });
// }

// function getWeatherIcon(weather) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       switch (weather) {
//         case "Sunny":
//           resolve("🏖️");
//           break;
//         case "Cloudy":
//           resolve("⛅");
//           break;
//         case "Rainy":
//           resolve("☔");
//           break;
//         default:
//           reject("NO ICON FOUND");
//       }
//     }, 100);
//   });
// }

// function onSuccess(data) {
//   console.log("Success", data);
// }
// function onError(error) {
//   console.log("Error", error);
// }
// getWeather()
// .then(getWeatherIcon)
// .then(onSuccess)
// .catch(onError)

function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Good data");
    }, 100);
  });
}

function fun2() {
  console.log("function 2");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("200");
    }, 100);
  });
}

function onSuccess(data) {
  console.log("Success", data);
}
function onError(errorCode) {
  console.log("Error", errorCode);
}
function onFInally() {
  console.log("FINALLY IN THE END");
}

fun1().then(fun2).then(onSuccess).catch(onError).finally(onFInally);
