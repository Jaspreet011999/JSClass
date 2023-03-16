const updateDOM = (input, id) =>{
    const divEl = document.getElementById(id)
    const p = document.createElement ('p')
p.textContent = input
divEl.appendChild(p)
}

const myArrObjs = [
    {  
        name: 'jaspreet',
         eyeColor: 'black',
    
},
{  
    name: 'parry',
     eyeColor: 'blue',

},
{  
    name: 'raman',
     eyeColor: 'green',

},
]
myArrObjs.forEach(obj =>{
const str = `${obj.name} has ${obj.eyeColor} eye Color`
updateDOM(str,'output')
})
    
