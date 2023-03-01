//update the DOM

const MY_MPG = []
const MY_TRIP_COST = []

 const updateDOM = (input) => {
  const divEl = document.querySelector('#output')
  const j = document.createElement('div')
  j.textContent=input
  divEl.appendChild(j)  

}


const trackMPGandCost = (miles ,gallons, price ) => {
  const MPG = miles/gallons
  const tripCost = MPG * price
  MY_MPG.push(MPG)
   MY_TRIP_COST.push(tripCost)

   

  updateDOM(`Your MPG is ${MY_MPG} miles per gallon and your trip cost is $${MY_TRIP_COST}`);
 

}

const calculateSum = (arr) => {
  let sum = 0
  for (let i=0; i < arr.length;i++) {
    sum = sum + arr[i]

  }
  return sum


}
const calculateMPGAvg = () => {
  let sumMPG = 0
 
    // const avgMPG = (MY_MPG[0] + MY_MPG[2])/2
    // updateDOM(`Average Miles per gallon is ${avgMPG}`)
    for(let i = 0;i < MY_MPG.length ; i++){
    sumMPG =sumMPG + MY_MPG[i]

   
    }
    let avgMPG = sumMPG/MY_MPG.length
    
    updateDOM (`Average MPG is ${avgMPG}`)
   

}
const calculateAvg = () => {
  let sumMPG = calculateSum(MY_MPG)
  let sumTripCost = Sum(MY_TRIP_COST)
let avgMPG = Math.round (sumMPG/MY_MPG.length)
let avgTripCost = Math.round (sumTripCost/MY_TRIP_COST.length)
updateDOM(`Average MPG is ${avgMPG}`)
updateDOM(`Average TripCost is ${avgTripCost}`)

}


const calculateAvgValue = () => {
  let valueCost = 0
for( let i = 0 ; i < MY_TRIP_COST. length; i++)
valueCost += MY_TRIP_COST [i]
let avgValue = valueCost/MY_TRIP_COST.length
updateDOM(`Average ValueCost is ${avgValue}`)


}






trackMPGandCost(200,20,4.59)
trackMPGandCost(300,10,3.59)
trackMPGandCost(500,30,2.59)
trackMPGandCost(800,70,1.59)
trackMPGandCost(600,40,6.59)
trackMPGandCost(800,90,9.59)
calculateAvgValue()

