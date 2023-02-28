//update the DOM

const myMPG = []
const myTripCost = []

 const updateDOM = (input) => {
  const divEl = document.querySelector('#output')
  const j = document.createElement('div')
  j.textContent=input
  divEl.appendChild(j)  

}


const trackMPGCost = (miles ,gallons, price ) => {
  const MPG = miles/gallons
  const tripCost = MPG * price
  myMPG.push(MPG)
   myTripCost.push(tripCost)

  updateDOM(`Your MPG is ${myMPG} miles per gallon and your trip cost is $${myTripCost}`);
 

}
const calculateAvg = () => {
  let totalMPG = 0
    // const avgMPG = (myMPG[0] + myMPG[2])/2
    // updateDOM(`Average Miles per gallon is ${avgMPG}`)
    for(let i = 0;i < myMPG.length ; i++){
    totalMPG = totalMPG + myMPG[i]
    }
    let avgMPG = totalMPG/myMPG.length 
    updateDOM (`Average MPG is ${avgMPG}`)

}



trackMPGCost(200,20,4.59)
trackMPGCost(300,10,3.59)
trackMPGCost(500,30,2.59)
trackMPGCost(800,70,1.59)
trackMPGCost(600,40,6.59)
trackMPGCost(800,90,9.59)
calculateAvg()

