const FormEL = document.getElementById('form-input')


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
    //for (let i=0; i < arr.length;i++) {
     // sum = sum + arr[i]
  
    //}
    //arr.array.forEach(element => {
     // sum += element
      
   // });
    for (value of arr) {
      sum += value
    }
    return sum
  }


  const calculateAvgValue = () => {
    let valueCost = 0
  for( let i = 0 ; i < MY_TRIP_COST. length; i++)
  valueCost += MY_TRIP_COST [i]
  let avgValue = valueCost/MY_TRIP_COST.length
  updateDOM(`Average ValueCost is ${avgValue}`)
  
  
  }
  
  
  
  FormEL.addEventListener('submit',(e) =>{
     console.log(e)

  })
  
  
  //trackMPGandCost(200,20,4.59)
  //trackMPGandCost(300,10,3.59)
  //trackMPGandCost(500,30,2.59)
  //trackMPGandCost(800,70,1.59)
  //trackMPGandCost(600,40,6.59)
  //trackMPGandCost(800,90,9.59)
  //calculateAvgValue()