//update the DOM

const myMPG = []
const myTripCost = []

 const updateDOM = (input) => {
  const divEl = document.querySelector('#output')
  const j = document.createElement('div')
  j.textContent=input
  divEl.appendChild(j)  

}


const trackMPGandCost = (miles ,gallons, price ) => {
  const MPG = miles/gallons
  const tripCost = MPG * price
  myMPG.push(MPG)
   myTripCost.push(tripCost)

  updateDOM(`Your MPG is ${myMPG} miles per gallon and your trip cost is $${myTripCost}`);
 

}
const calculateMPGAvg = () => {
  let sumMPG = 0
 
    // const avgMPG = (myMPG[0] + myMPG[2])/2
    // updateDOM(`Average Miles per gallon is ${avgMPG}`)
    for(let i = 0;i < myMPG.length ; i++){
    sumMPG =sumMPG + myMPG[i]

   
    }
    let avgMPG = sumMPG/myMPG.length
    
    updateDOM (`Average MPG is ${avgMPG}`)
   

}
const calculateAvg = () => {
  let sumMPG = 0
  let sumTripCost = 0
  for(let i = 0;i < myTripCost.length ; i++){
    sumMPG =sumMPG + myMPG[i]
    sumTripCost = sumTripCost + myTripCost[i]
  }
let avgMPG = Math.round (sumMPG/myMPG.length)
let avgTripCost = Math.round (sumTripCost/myTripCost.length)
updateDOM(`Average MPG is ${avgMPG}`)
updateDOM(`Average TripCost is ${avgTripCost}`)

}


const calculateAvgValue = () => {
  let valueCost = 0
for( let i = 0 ; i < myTripCost. length; i++)
valueCost += myTripCost [i]
let avgValue = valueCost/myTripCost.length
updateDOM(`Average ValueCost is ${avgValue}`)


}






trackMPGandCost(200,20,4.59)
trackMPGandCost(300,10,3.59)
trackMPGandCost(500,30,2.59)
trackMPGandCost(800,70,1.59)
trackMPGandCost(600,40,6.59)
trackMPGandCost(800,90,9.59)
calculateAvgValue()

