//Functions calling other functions

// function cutFruitPieces(fruit) {
//   return fruit * 9;
// }
// nuyny karanq grenq arrow functions-ov
// const cutFruitPieces=(fruit) => fruit*9;

// function fruitProcessor(apples, oranges) {
//   // console.log(apples, oranges);

//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));
///////////////////////////////////////////////////
//Reviewing Functions
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// //Xndir 2 Dolphins and Koalas
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const dolphinAvg = calcAverage(44, 23, 71);
// const koalaAvg = calcAverage(65, 54, 49);

// // const dolphinAvg = calcAverage(85, 54, 41);
// // const koalaAvg = calcAverage(23, 34, 27);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log("No team wins.");
//   }
// };
// checkWinner(dolphinAvg, koalaAvg);
////////////////////////////////////////////
