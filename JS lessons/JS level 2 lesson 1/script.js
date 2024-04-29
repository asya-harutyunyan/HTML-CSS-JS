//continue and break

// const jonas = ["Smith", "John", true, 1991, "Sam", () => {}];
////ete !== string-ic baci mnacacy hanum e
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") {
//     continue;
//   }
//   console.log(jonas[i], typeof jonas[i]);
// }
// //=== string-n e hanum, mnacacy console anum
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "string") {
//     continue;
//   }
//   console.log(jonas[i], typeof jonas[i]);
// }
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// const numArr = [1, 3, 5, 7, 10];
// const secondaryArr = [];

// for (let i = 0; i < numArr.length; i++) {
//   if (numArr[i] % 2 === 0) break;

//   secondaryArr.push(numArr[i]);
// }
// console.log(secondaryArr);

// for (let i = numArr.length - 1; i >= 0; i--) {
//   console.log(i, numArr[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`.......Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//   }
// }

//Lesson 2

//The while loop

let rep = 1;
while (rep <= 10) {
  console.log(`While:Lifting weight repetition ${rep}`);
  rep++;
}
console.log(rep, "Rep");

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`);
}
