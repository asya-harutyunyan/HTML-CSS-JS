"use strict";
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula:
 if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
*/

const data1=[5, 2, 4, 1, 15, 8, 3];
const data2=[16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge=function(ages){
//     const humanAge=ages.map(function(dogAge){
//     if(dogAge<=2){
//         return 2*dogAge
//     }else{
//         return 16+dogAge*4
//     } 
// });
// const adult=humanAge.filter((age)=>age>18);
// const sum=adult.reduce((acc, cur)=>acc+cur,0);
// const avgNumber=sum/adult.length;
// console.log(avgNumber);
// }
// calcAverageHumanAge(data1);
// calcAverageHumanAge(data2);


//With chaining 
const calcAverageHumanAge=function(ages){
    const avgNumber=ages
    .map(age=>age<=2?age*2:age*4+16)
    .filter(age=>age>18)
    .reduce((acc, cur, i, arr) => acc + cur/arr.length, 0);
    console.log(avgNumber);
}

calcAverageHumanAge(data1);
calcAverageHumanAge(data2);
