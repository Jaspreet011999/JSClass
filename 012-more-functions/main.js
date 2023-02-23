//update the DOM

const myArr= []

const updateDOM = (input) => {
  const divEl = document.querySelector('#output')
  const j = document.createElement('div')
  j.textContent=input
  divEl.appendChild(j)  

}
//const  calculateSpeed = ( distance, time ,speed = 65) => distance/time * speed
//updateDOM(calculateSpeed(50 ,20 ,65))

const calculateSpeed = ( distance,time,speed) => {
  const DTS = distance/time
  const carMiles = DTS * speed
  myArr.push( DTS,carMiles)
}




const myDTS = calculateSpeed(300,20)

updateDOM("My speed is " +myDTS + " km/h")




updateDOM(calculateSpeed(400,15,5.50))
updateDOM( calculateSpeed (420,11,6))






