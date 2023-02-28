//update the DOM

const myArr = []

const updateDOM = (input) => {
  const divEl = document.querySelector('#output')
  const j = document.createElement('div')
  j.textContent=input
  divEl.appendChild(j)  

}


const trackMPGCost = (miles ,gallons, price ) => {
  const MPG = miles/gallons
  const tripCost = MPG * price
   myArr.push(MPG,tripCost)

  updateDOM(`Your MPG is ${myArr[0]} miles per gallon and your trip cost is $${myArr[1]}`);
 

}

trackMPGCost(200,20,4.59)
trackMPGCost(300,10,3.59)
updateDOM(myArr)



 















