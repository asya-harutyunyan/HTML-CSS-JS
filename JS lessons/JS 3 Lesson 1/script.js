"use strict";
//!First Class and Higher-order- functions
// First class functions
//* JS treats functions as first-class citizens
//*This means that functions are simply treated s values
//*Functions are just another "type" of object
//*Store functions in variables or properties
//*Pass functions as arguments to other functions

//Higher-order functions
//*A function that receives another function as an argument, that returns a new function, or both
//*This is only possible because of first-class functions
//*Functions that returns new function

//////////////////////////////////////////////////////
//!Default parameters

// const bookings = [];
// // let numPassengers = 3;
// // let price = 199 * numPassengers;

// const createBooking = function (flightNum, numPassengers = 3, price = 199 * numPassengers, discountAmount = (price * 10) / 100) {
//   //ES5
//   numPassengers ||= 1;
//   price ||= 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//     discountAmount,
//   };
//   bookings.push(booking);
// };

// // createBooking("LH123");
// createBooking("LH123", 2, 890);

// console.log(bookings, "**********");

// createBooking("LH123", undefined, 1000);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//!How Passing Arguments Works: Values vs Reference

// const flight = "LH234";
// const jonas = {
//   name: "Jonas Smith",
//   passport: 25645799,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
// passenger.name='Mr' + passenger.name;
//!Good variant
//   const changedPassenger = { ...passenger, name: "Mr " + passenger.name };

//   if (passenger.passport === 25645799) {
//     console.log("Checked in ");
//   } else {
//     console.log("Wrong passport");
//   }
//   console.log(changedPassenger);
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//!Functions Accepting callback functions

// const oneWord = function (str) {
//   return str.replaceAll(" ", "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };
// // console.log(oneWord("HELLO"));

//!Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer(`Javascript is the best`, upperFirstWord);
// transformer(`Javascript is a programming language`, oneWord);

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

//! JS uses callback all the time

// const high5 = function (el, i, arr) {
//   console.log(el, "Hey");
// };

// document.body.addEventListener("click", high5);

// [1, 2, 3].forEach((el, i, arr) => console.log(i, el, arr));

// ["Jonas", "Marta", "Adam"].forEach(high5);

////////////////////////////////////
//!Callback function
// function greet(name, callback) {
//   console.log("Hello, " + name + "!");
//   callback();
// }

// function callbackFunction() {
//   console.log("Nice to meet you!");
// }

// greet("John", callbackFunction);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//!Functions Returning Functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetHey = greet(`Hey`);
// greetHey("Jonas");
// greetHey("Steven");

// greet("Hello")("Jonas");

//!Challenge
// const greetArr = (greeting) => (name) => console.log(`${greeting}${name}`);
// greetArr("Hi")("Jonas");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//!The call and Apply methods

// const luftansa = {
//   airline: "Luftansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// luftansa.book(23, "Sarah Williams");

// // const eurowings = {
// //   airline: "Eurowings",
// //   iataCode: "EW",
// //   bookings: [],
// // };

// // const book = luftansa.book;
// // // // //Does not work
// // book(23, "Sarah Williams");

// const hereIsSomeExample = function(flightNum, name){
//   console.log(
//     `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//   );
//   this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
// };
// hereIsSomeExample.call(luftansa, 23, "Sarah Williams");

////////////////////////////////////////////////////////////////////////////////////////
//!Call Method
//*here we are telling JS that this keyword in the book function should point to the eurowings object and takes its values from their

// hereIsSomeExample.call(eurowings, 44, "Ana");
// book.call(eurowings, 23, "Sarah Wiliams");
// console.log(eurowings);

// book.call(luftansa, 239, "Mary Coper");
// console.log(luftansa, "*************");

// const swiss = {
//   airline: "Swiss Air Lines",
//   iataCode: "LX",
//   bookings: [],
// };

// book.call(swiss, 583, "Mary Cooper");
// console.log(swiss, "*********");

////////////////////////////////////////////////////////////////////////////////////////
//!Apply Method
//* apply method does exactly the same as the call method. the only difference is that apply does't receive a list of argument after the this keyword, instead it is gonna take array of the argument

// const flightData = [583, "George Cooper"];
// book.apply(swiss, [111, "Abram David"]);
// console.log(swiss);

// book.call(swiss, ...flightData);

////////////////////////////////////////////////////////////////////////////////////////

//!The bind method
//*bind method also allows us to manually set the this keyword for any function call, the difference is that bind does not immediately call the function, instead it returns a new function where the this keyword is bound

//*so writing book.bind it doesn't call the function it just returns a new function where the this this keyword will always be set to eurowings

// const bookEW = book.bind(eurowings);
// const bookLH=book.bind(luftansa);
// const bookLX=book.bind(swiss);

// bookEW(23, "Steven Williams");
// console.log(eurowings, "************");

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23("Jonas Smith");
// bookEW23("Martha Cooper");

// console.log(eurowings, "eurowings");

////////////////////////////////////////////////////////////////////////////////////////
//!With event listener

// luftansa.planes = 300;
// luftansa.buyPlane = function () {
//   console.log(this, "this this");

//   this.planes++;
//   console.log(this.planes);
// };

// luftansa.buyPlane();

// document
//   .querySelector(".buy")
//   .addEventListener("click", luftansa.buyPlane.bind(luftansa));

////////////////////////////////////////////////////////////////////////////////////////
//!Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

//*this means that function where we are binding a value, doesn't have this keyword so we need to set it as a null

// const addVAT = addTax.bind(null, 0.23);
// addVAT = (value) => value + value * 0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

//!Immediately Invoked Function Expressions(IIFE)

// const runOnce = function () {
//   console.log("This will never run again");
// };
// runOnce();

// (function (number) {
//   console.log("This will never run again IIFE");
// })(11);

// (() => console.log("This will never run again"))();

// (function () {
//   console.log("This will never run again");
//   const isPrivate = 23;
// });

//!Private variables
//Is not available outside
// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }

// console.log(isPrivate, "isPrivate");
// console.log(notPrivate, "NotPrivate");

////////////////////////////////////////////////////////////////////////////////////////
//!Closure

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();
/////////////////////////////////////////////////////
//!More closure examples

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 23);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// console.log(f, "***********");

// g();
// console.log(f(), "**************");

// f();
// console.dir(f);

// h();
// f();
// console.log(f);

//!Example 2

// const boardPassenger = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passenger`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassenger(180, 5);
