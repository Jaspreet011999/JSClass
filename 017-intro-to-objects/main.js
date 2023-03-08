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

const carArr = [];
const myCar = {
  make: "toyato",
  model: "camry",
  color: ["red", "white"],
  miles: 3000,

  carinfo: function () {
    return `${this.make} company loves to make new ${this.model[0]} and is ${
      this.color
    } car miles ${3000}`;
  },
};

const newcar = myCar.carinfo("racing");
console.log(newcar);
