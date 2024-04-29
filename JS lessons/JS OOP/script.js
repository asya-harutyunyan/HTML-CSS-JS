"use strict";
//Constructor Functions and the new Operator

// const Person = function (firstName, birthYear) {
//   //Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //Never do this
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const jonas = new Person("jonas", 1991);
// const matilda = new Person("Matilda", 2017);
// console.log(jonas, matilda);

// console.log(jonas instanceof Person);

// Person.hey = function () {
//   console.log("Hey there");
//   // console.log(this);
// };
// Person.hey();

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas, "********");
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species='Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas);
// console.log(jonas.__proto__, Person.prototype);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);

// const arr=[3,6,6,5,6,9,9];
// console.log(arr.__proto__);

///////////////////////////////////////////////////////////////

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();
////////////////////////////////////////////////////////////////////

//Class Declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Instance methods
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(this);
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //Set a property that already exists
  // set fullName(name) {
  //   if (name.includes(" ")) this.fullName = name;
  //   else alert(`${name} is not a full name`);
  // }
  // get fullName() {
  //   return this.fullName;
  // }

  //Static method
  static hey() {
    console.log(`Hey there`);
    return 5;
  }
}

// const jessica = new PersonCl("Jessica Davis", 1996);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.fullName}`);
// };
// jessica.greet();
// jessica.calcAge();

//Setters and Getters
const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest({ mov, x, y }) {
    console.log(mov, x, y);
  },
};

account.latest = { mov: 10, x: 20, y: 30 };
console.log(account.movements);

/////////////////

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I am ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl("Martha Jonas", 2012, "Computer Science");
martha.introduce();
martha.calcAge();
martha.greet();

/*

//Class examples 
class Uxxankyun{
  constructor(a,b){
    this.a=a;
    this.b=b;
  }
  makeres(){
    return this.a*this.b
  }
}
//Creating 2 objects and calling makeres method 
const u1=new Uxxankyun(10, 20);
const u2= new Uxxankyun(5,8);
console.log(u1);//Uxxankyun {a: 10, b: 20}
console.log(u1.makeres());//200
console.log(u2.makeres());//40

//////////////
//Example 2
class Student{
  constructor(name, surname, ...ranks){
    this.name=name;
    this.surname=surname;
    this.ranks=ranks;
  }

  avg(){
    if(!this.ranks.length)
    return 0

    return this.ranks.reduce((a,b)=>a+b)/this.ranks.length
  }

  print(){
    console.log(this.name, this.surname, this.avg());
  }
}

const s1=new Student("Narek", 'Harutyunyan');
const s2=new Student("Lusine", "Melqonyan", 9,9,9,5);
s1.print();// Narek Harutyunyan 0
s2.print();//Lusine Melqonyan 8


//Example 3
class Unique{
  items=[]
  add(elm){
    if(!this.items.includes(elm)){
      this.items.push(elm)
    }
    return this;
  }
// return this;
  print(){
    console.log(this.items);
  }
}
const list=new Unique();
list.add("Narek");
list.add("Lusine");
list.add("Narek");
list.add("Hayk");
list.add("Hayk");
list.add("Hayk");
list.add("Eduard");
list.print();//(4) ['Narek', 'Lusine', 'Hayk', 'Eduard']
console.log(list);//Unique {items: Array(4)}

//The same using chaining 
// const list=new Unique();
// list.add("Narek")
// .add("Lusine")
// .add("Narek")
// .add("Hayk")
// .add("Hayk")
// .print();
*/

////////////////////////////////////////////////////////////////////////////////////

class Account {
  //1)Public Fields(instances)
  locale = navigator.language;

  //2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    //Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //3)Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
  static helper() {
    console.log(`Helper`);
  }

  //4) Private methods
  _approveLoan(val) {
    return this;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
console.log(acc1);
// acc1.#movements.push(250); //This is private thats why there will be error
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

Account.helper();

//Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
