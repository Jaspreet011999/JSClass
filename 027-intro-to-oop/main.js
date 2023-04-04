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

const jaspreet = new Person("Jaspreet", "Kaur", "Private, can't tell you");
jaspreet.showStatus();
const jane = new Person("Jane", "Wood", "127 Street");
jane.showStatus();
