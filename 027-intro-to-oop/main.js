class Person {
  constructor(firstName, lastName, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }
  showStatus() {
    console.log(`${this.firstName} lives at ${this.address}`);
  }
}

class Student extends Person {
    constructor(firstName,lastName,address,classList){
      super(firstName,lastName,address)
      this.classList = classList
    }
    showStatus(){
        console.log(`${this.firstName} lives at ${this.address} is taking ${this.classList}`);
    }
}

const jaspreet = new Student("Jaspreet", "Kaur", "Private, can't tell you",["English", "CTA200", "CTA300"]);
jaspreet.showStatus();
const jane = new Person("Jane", "Wood", "127 Street");
jane.showStatus();
