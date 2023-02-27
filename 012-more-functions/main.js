//update the DOM



const updateDOM = (input) => {
  const divEl = document.querySelector('#output')
  const j = document.createElement('div')
  j.textContent=input
  divEl.appendChild(j)  

}


const mileage = (miles ,gallons, price = 5.50) => miles/gallons * price 
  updateDOM(mileage(200,20,5.50));


 















