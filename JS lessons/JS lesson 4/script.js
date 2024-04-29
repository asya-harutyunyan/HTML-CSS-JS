//Logical operators // and,  or
// and- pntrum e -false, or pntrum e -true

const a=0;
const b=1;

const c=a || b;
console.log(c);


/*const isLoggedIn = true;
const isAdmin = true;

//const redirectToAdminPage = isLoggedIn && isAdmin;
// ete (isLoggedIn,  isAdmin ) irancic meky false lini andy false arjeqn e vercnum, ete 2nel true e arajiny stugum e , 2rdi true-n e vercnum

const redirectToNotFound = isLoggedIn || isAdmin;

//console.log(redirectToAdminPage);
//or pntrum e true-n ete chi gtnum veradarcnum e verjiny, ete tekuz false lini

console.log(redirectToNotFound);*/

const hasDriversLicense = true;
const hasGoodVision = true;

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive");
}

// const isTired = false;
//console.log(hasDriversLicense && hasGoodVision && isTired);// senc kardum e verjin false-y

// console.log(hasDriversLicense && hasGoodVision && !isTired); //senc verjin isTired darcnum e true ev kardum e

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive");
// }


//The switch statement

//const day = "friday";

/*switch (day) {
  case "monday": // day==='monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day ");
}*/
// ete verevum (const day) nenc ban grenq vor vochmeki chhamapatasxani defaultna kardalu // break ete chlini friday-ic heto bolory kardalu e

/*if (day === "monday") {
  console.log("Plan course structure");
} else if (day === "tuesday") {
 console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day ");
}
*/

// Statements and expressions

// const num1 = 3 + 4;
// 1991; // es 2 depqum statement en, uxxaki haytararum en

// true && false && !false;

// if (23 > 10) {
//   const str = "23 is bigger";
// }
// expressions - eli haytararum e bayc inchvor logikayi gorcoxutyun el ka

// const name1 = "John";
// const name2 = "Jack";

// if (name1 === name2) {
//   console.log("THE NAME IS ALREADY TAKEN");
// } else {
//   console.log("YOUR NAME IS SUCCESSFULLY SET");
// }

/*const messageToUser =
name1 === name2
    ? "THE NAME IS ALREADY TAKEN"
    : "YOUR NAME IS SUCCESSFULLY SET";

console.log(messageToUser);*/
const age = 23;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
