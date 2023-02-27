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
  updateDOM (`DTS is ${DTS} and car Miles is ${carMiles}`)
  myArr.push( DTS,carMiles)
}

const calculateAvg = () => {
    const avgDTS = (myArr[0]+myArr[2])/2
    updateDOM( avgDTS)
}

calculateAvg()




calculateSpeed(400,15,5.50)
 calculateSpeed (420,11,6)
 updateDOM(myArr)






