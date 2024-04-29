// const xArrow = (a, b, c) => (a + b + c) / 3;

//declaration
// function xArrow(a, b, c){
//   return (a + b + c) / 3;
// };

//expression
// const xArrow=function(a, b, c){
//   return (a + b + c) / 3;
// }
// console.log(xArrow(1, 2, 3));

// arrow-i ev function expression-i  jamanak grac kodic araj ete kanchenq error e linelu , cant get before initialization
//function declaration-i jamanak iranic araj kancheluc ashxatuma
//function

// console.log((x));
// let x = 8;

// xDeclaration();
// function xDeclaration() {
//   console.log("DECLARATION");
// }
//declaration-i karanq araj kanchenq , expressiony che

// XPathExpression();
// const xExpression = function () {};

// //!Introduction to Arrays
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";
// const friend4 = "John";
// const friend5 = "Michael";

// const friends=[12, "Michael", null, undefined, ()=>{}, friend5];

// const otherWayToDeclareArray = new Array(1994, 1995, 1996);
// console.log(otherWayToDeclareArray[0]);
// console.log(friends, otherWayToDeclareArray);

// const friends = ["Michael", "Steven", "Peter", "William"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);

// console.log(friends.length - 1);
// console.log(friends[friends.length - 1]);
// friends[2] = "Jay";
// console.log(friends);
// friends = ["Bob", "Alice"];

// const firstName = "Jonas";
// const jonas = [firstName, "Nick", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// console.log(jonas.length);

// //!Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages, years);

//! Basic Array Operations(Methods)

const friends = ["Michael", "Steven", "Peter"];

// //Add elements

const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength, friends.length);

const x = friends.unshift("John");
console.log(friends);
console.log(x);

// //Remove elements
// friends.pop(); //Last
// console.log(friends, "friends");
const popped = friends.pop();
console.log(popped);
// console.log(friends);

// friends.shift(); //First
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }
