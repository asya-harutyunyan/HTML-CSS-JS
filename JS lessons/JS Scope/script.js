"use strict";

//Scoping in Practice

// Scope is a space or environment in which certain variable is declared (variable environment in case of function ).
//Scope of a variable: is an entire region of a code where a certain variable can be accessed
//let, const, var

//Global scope
//Outside of any function or block
//Variables declared in global scope are accessible everywhere

// console.log(globalScopeNumber);
// const globalScopeNumber=1;

//Block scope
//if statement, for loop, switch
//Block scope variables are let and const
// if (6 > 5) {
//   const blockScopeNumber = 2;
//   console.log(blockScopeNumber);
// }

//Function scope
//Variables are accessible only inside function, NOT outside. Also called local scope
//Function scope variable is var
// const funcExample = function () {
//   const functionScopeNumber = 3;
  
//   if (89 > 9) {
//     var shouldNotBeAvailable = "Yeah";
//     console.log(shouldNotBeAvailable, "Inside the function");
//   }
// };

// funcExample();
// // console.log(shouldNotBeAvailable,"In global Scope");
////////////////////////////////////////////////
// const calcAge = function (birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     if (birthYear >= 1991 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = "Steven";
//       const str=`Oh and you are a millenial, ${firstName}`;
//       console.log(str);
//     }


//     function add(a, b) {
//       return a + b;
//     }
//     add();
//   }
//   printAge();
// };
// calcAge(1991);

//Hoisting and TDZ in Practice

//Hoisting: Makes some type of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope"

//Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object

//TDZ or Temporal Dead Zone is suppose to tell the Developer that we can't access the variable before initialization helps avoid bugs logical errors and so on.

// y = 9;
// var y = 7;

// console.log(shouldBeHoisted, "----");
// var shouldBeHoisted = 5;

// if (5) {
//   let shouldBeHoisted = 5;
// }

////////////////////////////////////////////////////////////////////////////////

//How the this keyword works
//this keyword/variable:Special variable that is created for every execution context(every function). Takes the value of (points to) the "owner" of the function in which the this keyword is used

// console.log(this, "----------------");
// console.log(window, "**********");

// const thisKeywordChecker=function(){
//   console.log(this);
// };

// thisKeywordChecker();

// const x = {
//   name:"Asya",
//   method() {
//     console.log(this);
//   },
// };
// x.method();

// const exampleFunc = function () {
//   const arrThis = () => console.log(this);
//   arrThis();
// };
// exampleFunc();

// document.querySelector("h1").addEventListener("click", function () {
//   console.log(this, "this after clicking");
// });

//This is not static. it depends on how the function is called, and its value is only assigned when the function is actually called

//Inside method this=that method

//In strict mode simple function call this=undefined, so that's why it is a good practice to use strict mode

//Arrow functions this=the parent function of the arrow function, or the global function, arrow function doesn't have its this keyword, instead if we use this keyword in arrow function it will be the this keyword of surrounding function, parent function, (it is call lexical this keyword)

//Event listener this=< Dom element that the handler is attached to> if we click to button this =<button></button>

//this doesn't point to the function itself, and also not the its variable environment

////////////////////////////////////////////////////////////////////////

// const jonas = {
//   firstName: "Jonas",
//   year: 1991,
//   arrExample: () => console.log(this),
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1

//     // const self = this; //self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1991 && self.year <= 1996);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1991 && self.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();

// jonas.arrExample();
// jonas.calcAge();

/////////////////////////////////////////////////////////

//Objects vs primitives

let age=30;
let oldAge=age;
age=31;

console.log(age);//31
console.log(oldAge);//30

const me = {
  name: "Jonas",
  age: 30,
};

const friend = me;
friend.age = 27;

console.log("Friend", friend); //27
console.log("Me", me); //27

console.log(friend === me);//true

/////////////////////////////////////////////////////////////////////////
//Coping objects

// const jessica2 = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
//   family: ["Alice", "Bob"],
// };

// const jessicaCopy = Object.assign({}, jessica2);

// console.log(jessicaCopy === jessica2); //false

// jessicaCopy.lastName = "Davis";
// jessicaCopy.family.push("Mary");
// jessicaCopy.family.push("John");

// console.log(jessica2.family === jessicaCopy.family, "---------"); //true

// console.log("Before marriage", jessica2);
// console.log("After marriage", jessicaCopy);

// //Shallow copy of objects and arrays // nayel
