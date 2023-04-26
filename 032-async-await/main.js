function getData() {
    return new Promise(function (resolve,reject){
        setTimeout(() => {
            reject('Something went wrong')
        }, 1)
    })
}

function onSuccess(){
    console.log(`Success: $(result)`);
}
function onError(){
    console.log(`ERROR: $(error)`);
}

async function start(){
    try{
        const result = await getData()
       onSuccess()
    } catch(error){
        onError()
    }
}
// async function start2(){
//     try{
//         const result = await getData()
//     } catch(error){
//         console.log(`ERROR: $(error)`);
//     }
// }
start()
// start2()

// async function start(){
// const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
// const result = await data.json()
// console.log(result.properties.periods[1].shortForecast);
// }

// async function start2(){
//     fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
//     .then(data => data.json())
//     .then(result => {
//         console.log(result.properties.periods[1].shortForecast);
//     })
// }

// start()