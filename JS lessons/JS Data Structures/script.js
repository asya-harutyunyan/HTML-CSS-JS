"use strict";
// const user = {
//   firstName: "Ana de",
//   lastName: "Armas",

//   createFullName() {
//     this.fullName = this.firstName + " " + this.lastName;
//   },
// };
// user.createFullName();
// console.log(user); //{firstName: 'Ana de', lastName: 'Armas', fullName: 'Ana de Armas', createFullName: ƒ}
//In the object this refers to the object

//////////////////////////////////////////////////////////////////////////////////////////////
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[0]]: {
    open: 12,
    close: 22,
  },
  [weekdays[3]]: {
    open: 11,
    close: 23,
  },
  [weekdays[4]]: {
    open: 0, //Open 24 hours
    close: 24,
  },
};

// console.log(openingHours, "Opening hours");
// If we want to take a variable as a key we put it in [] brackets, without it it will create a new key

///////////////////////////////////////////////////////////////////////////////////////////////////

// const dynamicallySetKey = 5 > 8 ? "It is obviously true" : "not true";
// console.log(dynamicallySetKey);//not true

// const exampleObj = {
//   [dynamicallySetKey]: "Hi",
// };
// console.log(exampleObj);//{not true: 'Hi'}

//////////////////////////////////////////////////////////////////////////////////////////////
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,
  //the same as
  //openingHours:openingHours,  // if key and value names are the same

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address = "Nazarbekyan street",
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    //   console.log(
    //     `Here is your delicious pasta with ${this.starterMenu[0]}, ${this.starterMenu[3]} and ${this.starterMenu[2]}`
    //   );
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3} `
    );
    restaurant.orderPasta(this.mainMenu[0], this.mainMenu[2], this.mainMenu[3]);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
restaurant.orderPizza("Tomatoes", "Mushrooms", "Cheese");
const val = restaurant.order(1, 0);
console.log(val, "--------------------");

///////////////////////////////////////////////////////////////////////////
//Working with strings

// Split and join

// const sentence = "I am new in software engineering";
// console.log(sentence.split("")); //split every letter
// console.log(sentence.split(" ")); //split words
// console.log(`a+very+nice+string`.split('+')); //split from every +

////////////////////////////////////////////////////////////////////////

// const fullNameArr='Jonas Schmedtmann'.split(' ');
// console.log(fullNameArr);  //(2) ['Jonas', 'Schmedtmann']
// const firstName=fullNameArr[0];
// const lastName=fullNameArr[1];

// const [, , familyName]='Jonas Schmedtmann Smith'.split(' ');
// const [firstName, lastName] = "Jonas schmedtmann".split("");// distracturing- miangamic zangvaci meja vercnum vor verevi orinaki nman chanenq arandzin

// console.log(familyName, '----------');

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

/////////////////////////////////////////////////////////////////

// const capitalizeName = function (name) {
//   const names = name.split(" ");
//   //console.log(names); //(4) ['jessica', 'ann', 'smith', 'davis']
//   const namesUpper = [];

//   for (const n of names) {
//     // console.log(n[0].toUpperCase());
//     // console.log(n.slice(1));
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   return namesUpper.join(" ");
// };

// const readyFullName = capitalizeName("jessica ann smith davis");
// console.log(readyFullName, "*******");
// console.log(capitalizeName("jonas schmedtmann"));

///////////////////////////////////////////////////////////////////////////

//String Methods Practice

// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)

// const getCode = (str) => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split("+")) {
//   const [type, from, to, time] = flight.split(";");
//   const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
//     "_",
//     " "
//   )} from ${getCode(from)} to ${getCode(to)} (${time.replace(":", "h")})`.padStart(45);
//   console.log(output);
// }
//////////////////////////////////////////////////////////////////////////

//Padding

// const message = "Go to gate 23!";
// const x = message.padStart(17, "+");
// const y = x.padEnd(20, "*");
// console.log(x.length, x);
// console.log(y.length, y);
// console.log("Jonas".padStart(20, "+").padEnd(30, "+"));

// const maskCreditCard = function (number) {
//   const str = number.toString();

//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };

// console.log(maskCreditCard(64646534));
// console.log(maskCreditCard(646465644545454));
// console.log(maskCreditCard("467878956585575555534"));

/////////////////////////////////////////////////////////////////////////

//Repeat

// const message2 = "Bad weather... All Departures Delayed...";
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${"🛩".repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// //////////////////////////////////////////////////////////////////////

// //Working with strings part 2

// const airline = "TAP Air Portugal";

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //Fix capitalization in name

// const passenger = "jOnAS";
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect); //Jonas

// //Compairing emails

// const email = "hello@jonas.io";
// const loginEmail = "  Hello@jonas.io  \n";

// // const lowerEmail=loginEmail.toLowerCase();

// const normalizeEmail = loginEmail.toLowerCase().trim();
// console.log(normalizeEmail, "-----------");
// console.log(email === normalizeEmail);

// //replaicing

// const priceGB = "288,97*";
// const priceUS = priceGB.replace("*", "$").replace(",", ".");
// console.log(priceUS);
// /////////////////////////////////////////////

// const announcement =
//   "All passengers come to boarding door 23. Boarding door 23";

// console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));

// console.log(announcement.replace(/door/g, "gate"));// The same as replaceAll

/////////////////////////////////////////////////////////////
//Bolleans

// const plane = "Airbus A320neo";
// console.log(plane.includes("A320"));
// console.log(plane.includes("Boeing"));
// console.log(plane.startsWith("Air"));
// console.log(plane.endsWith("neo"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
//   console.log("Part of the New Airbus family");
// }

///////////////////////////////////////////////////////////////////
//Practice exercise

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are not allowed on abroad");
//   } else {
//     console.log("Welcome abroad");
//   }
// };

// checkBaggage("I have a laptop, some food and a pocket Knife");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snacks and a gun for protection");

/////////////////////////////////////////////////////////////////////

// const question = new Map([
//   ["question", "What is the best programming language in the world"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct 🎉"],
//   [false, "Try again!"],
// ]);
// // console.log(question);

// const x = {
//   name: "12358489",
//   firstName: "aaaa",
//   lastName: "jjjj",
// };
// // console.log(x);

// [
//   ["name", "12358489"],
//   ["firstName", "aaaa"],
//   ["lastName", "jjjj"],
// ];

// console.log(Object.entries(x), '---------');

// console.log(Object.keys(x));

// console.log(Object.values(x));

// //Convert object to map

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap, hoursMap.get("thu"));

//////////////////////////////////////////////////////////////////

// let data = new Map();
// let obj = {
//   name: "test",
// };

// data.set("name", "Hayk");
// data.set("skills", ["HTML", "CSS", "JS"]);
// data.set(undefined, {});
// data.set(obj, [1, 2, 3]);
// console.log(data.get("name")); // Hayk

// data.delete(undefined);
// console.log(data.size); //3

// for(let [key, val]of data){
//   console.log(key, val);
// }
// It will print
// name Hayk
// skills (3) ['HTML', 'CSS', 'JS']
//  {name: 'test'} (3) [1, 2, 3]

///////////////////////////////////////////////////////////////////////

// let m = new Map(); //Creates a new, empty map
// let n = new Map([
//   ["one", 1],
//   ["two", 2],
// ]); //A new map initialized with string keys mapped to numbers

// let copy = new Map(n); // A new map with the same keys and values as map n

// let o = {
//   x: 1,
//   y: 2,
// }; // An object with 2 properties

// let p = new Map(Object.entries(o)); // Same as new Map (["x", 1], ["y", 2])

////////////////////////////////////////////////////

// let m=new Map();
// console.log(m.size); // 0

// m.set("one", 1);
// m.set("two", 2);
// console.log(m.size); //2: The map now has two keys

// console.log(m.get("two")); // 2: Return the value associated with the key "two"

// console.log(m.get("three"));//undefined : this key is not in the set

// m.set("one", true); //Change the value associated with an existing key

// console.log(m.has("one"));// true
// console.log(m.has(true));// false: m doesn't have a key true

// m.delete ("one");

// m.clear(); // Remove all keys and values from the map
// console.log(m);//Map(0) {size: 0}

///////////////////////////////////////////////////////////////

// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// rest.set(2, "Lisbon, Portugal");

// rest
//   .set("categories", ["Italian", "Pizzeria", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open")
//   .set(false, "We are closed");

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));
// console.log(rest, '************');

// const time = 12;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// rest.delete(2);
// rest.clear();
// console.log(rest);

// const arr=[1,2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest.size);

////////////////////////////////////////////////////////////////

//Sets

// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);
// // console.log(ordersSet);// Set(3) {'Pasta', 'Pizza', 'Risotto'}

// // console.log(new Set('Jonasssss'));

// const arr1 = [1, 2, 1, 2, 1, 2, 3];
// const uniqueNumbers = [];

// for (const num of arr1) {
//   if (!uniqueNumbers.includes(num)) {
//     uniqueNumbers.push(num);
//   }
// }

// //Better approach

// const unNum = [...new Set(arr1)];

// console.log(ordersSet.size);
// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.has("Bread"));
// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");
// ordersSet.delete("Risotto");
// // ordersSet.clear();
// console.log(ordersSet, "********");

// //Example

// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
// );
// console.log(new Set("jonasschmedtman"));

/////////////////////////////////////////////////////

// const user = {
//   id: 1,
//   userInfo: {
//     name: "Chris",
//     country: "Australia",
//   },
// };

// console.log(Object.entries(user), "**********");

// const user2 = ["a", "b", "c", "d"];

// for (const [index, value] of user2.entries()) {
//   console.log(index, value);
// }

/////////////////////////////////////////////

// const tomasAnderson = {
//   name: "Neo",
//   openingHours: {
//     mon: {
//       open: 10,
//       close: 12,
//     },
//     thu: {
//       open: 6,
//       close: 12,
//     },
//   },
// };

// if (
//   tomasAnderson.closeHours &&
//   tomasAnderson.closeHours.thu &&
//   tomasAnderson.closeHours.thu.open
// ) {
//   console.log(tomasAnderson.closeHours.thu);
// }

// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// console.log(restaurant.openingHours?.mon?.open);

// //WITH OPTIONAL CHAINING
// // console.log(tomasAnderson.closeHours?.thu?.open);
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

////////////////////////////////////////////////////////////////////////
for (const day of weekdays) {
  const open = openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}
console.log(0 || "");

// False values of ?? - undefinad and null

//Logical Assignment Operators

const rest1 = {
  name: "Capri",
  // numGuests:20,
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

//OR assignment operator

rest1.numGuests = rest1.numGuests || 10;

if (!rest1.numGuests) {
  rest1.numGuests = 10;
}

rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1, rest2);

rest1.owner &&= "<ANONYMOUS>";

rest1.owner = rest1.owner && "<ANONYMOUS>";
console.log(rest1);

rest2.owner &&= "<ANONYMOUS>";

console.log(rest2);

//////////////////////

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/////////////////////
//Spread, because on Right side of =

const arr = [1, 2];
const needToMerge = [5, 6, 7];

const arr1 = [...arr, ...needToMerge];

//REST, because on left side of=

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

/////////////////////
const user = {
  firstName: "Dan",
  lastName: "Abramov",
};

// const firstName=user.firstName;
// const lastName=user.lastName;

//Better variant
const { firstName, lastName } = user;
const newAge = user.age; //undefined

console.log(firstName);
console.log(lastName);
console.log(newAge);

//Objects

const { sat, ...rest } = restaurant.openingHours;
console.log(rest, "Saturday");

const add = function (...number) {
  console.log(numbers, "NUMBERS");
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);
