const myArr = [];

//console.log(typeof myObj)
//console.log(typeof myArr)
//console.log(myArr == myObj)
const myNumber = 6;
const myObj = {
  name: "Jaspreet",
  age: 23,
  hobbies: ["cooking", "shopping"],
  mobile: {
    version: "buy iphone 14 pro",
  },
  mygreeting: function (people) {
    return `${this.name} who likes to ${this.hobbies[0]} and is ${this.age}`;
  },
};

const greeting = myObj.mygreeting("wedding");
console.log(greeting);
