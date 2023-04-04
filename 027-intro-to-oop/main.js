class Person {
  constructor(firstName, lastName, address) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._address = address;
  }
  getFirstName() {
    return `${this._firstName}`;
  }
  setFirstName(newFirstName) {
    this._firstName = newFirstName;
  }
  getLasttName() {
    return `${this._lastName}`;
  }
  setLastName(newLastName) {
    this._lastName = newLastName;
  }
  getAddress() {
    return `${this._address}`;
  }
  setAddress(newAddress) {
    this._address = newAddress;
  }
  showStatus() {
    console.log(`${this.getFirstName()} lives at ${this.getAddress()}`);
  }
}

class Student extends Person {
  constructor(firstName, lastName, address, classList) {
    super(firstName, lastName, address);
    this.classList = classList;
  }
  getClassList() {
    return `${this.classList}`;
  }
  setClassList(newClassList) {
    this.classList = newClassList;
  }
  showStatus() {
    console.log(
      `${this.getFirstName()} lives at ${this.getAddress()} is taking ${this.getClassList()}`
    );
  }
}

const jaspreet = new Student("Jaspreet", "Kaur", "Private, can't tell you", [
  "English",
  "CTA200",
  "CTA300",
]);
jaspreet.showStatus();
const jane = new Person("Jane", "Wood", "127 Street");
jane.showStatus();

console.log(jaspreet.getFirstName());
