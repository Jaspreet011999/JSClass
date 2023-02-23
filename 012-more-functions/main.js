//update the DOM

const updateDOM = (input) => {
  const divEl = document.querySelector('#output')
  const j = document.createElement('div')
  j.textContent=input
  divEl.appendChild(j)  

}
//const  calculateSpeed = ( distance, time ,speed = 65) => distance/time * speed
//updateDOM(calculateSpeed(50 ,20 ,65))

const calculateSpeed = ( distance,time) => {
  const DTS = distance/time
  return DTS
}




const myDTS = calculateSpeed(300,20)

updateDOM("My speed is " +myDTS + " km/h")



