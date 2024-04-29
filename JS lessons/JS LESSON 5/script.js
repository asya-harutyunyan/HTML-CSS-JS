"use strict"; //kody stugum e aveli xist, verevum grum enq anpayman

// const private = 534;
// const interface = "Audio";
// console.log(private);
// console.log(interface); // es barery chi toxnum ogtagorcenq, urish bareri het karanq ogtagorcenq , orinak` private...

//Functions

// function logger() {
//   console.log("My name is Jonas");
// }

//calling / running/ invoking function
// logger();
// logger();
// logger(); // logger uxxaki anun e karanq urish ban grenq

// function logger(name) {
//   console.log(`My name is ${name}`);
// }

//calling / running/ invoking function
// logger("John");
// logger("Smith");
// logger("Kane");

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const juiceMessage = fruitProcessor(1, 2);
// console.log(fruitProcessor(1, 2), "fruitProcessor(1, 2)");

// console.log(juiceMessage, "juiceMessage");

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

//Function Declaration vs Expressions

//Function Declaration
// const age1 = calcAge1(1997);

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age2 = calcAge1(1998);
// const age3 = calcAge1(1999);
// const age4 = calcAge1(2000);

// console.log(age1, age2, age3, age4);

 //Function Expressions
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);

// console.log(age2);

//Arrow functions

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearUntilRetirement(1991, "Jonas"));
// console.log(yearUntilRetirement(1980, "Bob"));
