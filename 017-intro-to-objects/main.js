const myArr = [] 

   //console.log(typeof myObj)
   //console.log(typeof myArr)
   //console.log(myArr == myObj)
   const myNumber = 6
   const myObj = {
    name: 'Jaspreet',
    age: 23,
    hobbies: ['cooking','shopping'],
    mobile: 
    {
        version: 'buy iphone 14 pro'
    } , 
    mygreeting: function (people){
        return `where is party ${people}`
    }

}
   
const greeeting = myObj.mygreeting('wedding')
console.log(greeeting)