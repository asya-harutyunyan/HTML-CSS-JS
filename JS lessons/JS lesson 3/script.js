// Type conversion and Coercion

let inputYear = "1991";
// inputYear=+inputYear; //Type conversion
console.log(inputYear + 11);
//gumarman jamanak number chi darcnum , mnacacy numbera sarqum u matematikakan gorcoxutyun anum
// console.log(inputYear - 11);
//console.log(inputYear * 11);
//console.log(inputYear / 11);

const inputYearConvertedNumber = Number(inputYear) + 9;
//or we can just put +
// const inputYearConvertedNumber = +inputYear + 9;
console.log(inputYearConvertedNumber, "inputYearConvertedNumber");

inputYear = Number(inputYear) + 9;
// console.log(Number(inputYear) + 9, "Number");

const incomingData = "NO DATA";
console.log(Number(incomingData));
console.log(typeof Number(incomingData));

//4nel nuynn en anum
console.log(String(23), 23);
console.log("23", 23);
console.log(23 + "", 23);
console.log(`${23}`, 23);

//type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

//Truthy and Falsy Values
//5 falsy values: 0, '', undefined, null, NAN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("")); // ete stringi mej ban lini grac true e, ete datark toxenq false e
console.log(Boolean({})); // sa true e
console.log(Boolean(null));
console.log(Boolean(NaN));

const insertedInputValue = "123";
const isNumber = Number(insertedInputValue);

if (!isNumber) {
  console.log("Inserted Value is not a number");
}
// ete 123i het text lini if-i console.logy kardum e , ete menak tiv e chi kardum

const money = 100;
if (money) {
  console.log("Don't spend it all.");
} else {
  console.log("You should get a job."); // miayn ete money darna 0 else-na kardalu
}

//Equality operators

const age = "18";
if (age === 18) console.log("You just become an adult. (strict)");
if (age == 18) console.log("You just become an adult. (loose)");
// ete === e` tesaky ev arjeqy stugum e , qani vor 18 string e ifi grvacy cuyc chi talis . ==` stugum e miayn arjeqy, 2nel 18 e if-y kardum e

// const favorite = Number(prompt("What's your favorite number?"));
console.log("Blocking the code");
console.log(favorite); // chi ogtagorcvum

if (favorite === 23) {
  console.log("Cool! 23 is a good number");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 7) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favorite <= 0) console.log("Your balance is not enough");
