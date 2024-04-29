"use strict";

//Object Methods

const jonas = {
  firstName: "Jonas",
  lastName: "Smith",
  birthYear: 1995,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDrivingLicense: true,
  income: 5000,
  outcome: 3000,
  policeman: null,
  family: {
    sister: false,
    brother: {
      name: "Bob",
    },
    mother: true,
  },

calcAge: function(birthYear){
    return 2037-birthYear;
},

// calcAge: function(){
//     return 2037-this.birthYear;
// }
  calculateSavings: function () {
    return this.savings = this.income - this.outcome;
  },

//   calcAge: function () {
// console.log(jonas);
//     console.log(this, "this");

//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}- year old ${
      jonas.job
    }, and he has ${this.hasDrivingLicense ? "a" : "no"} driver's license`;
  },
};
jonas.calculateSavings();
console.log(jonas);

// object-i nersum grvac function kochvum e method

// Iteration: The for Loop

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

//for loop keeps running while condition is True

// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

//Looping Arrays, Breaking and continuing

// const jonas = [
//   "Jonas",
//   "Smith",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// const strings = [];
// const numbers = [];
// let array;

// // console.log(jonas[0]);

// for (let i = 0; i < jonas.length; i++) {
//   //reading from jonas array

//   if (typeof jonas[i] === "string") {
//     strings.push(jonas[i]);
//   } else if (typeof jonas[i] === "number") {
//     numbers.push(jonas[i]);
//   } else if (typeof jonas[i] === "object" && Array.isArray(jonas[i])) {
//     array = jonas[i];
//   }
// }
// console.log(strings, numbers, array);

















