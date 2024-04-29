"use strict";
// Test Data 
// const avgScoreDolphins=(96+108+89)/3;
// const avgScoreKoalas=(88+91+110)/3; 

//Bonus 1
// const avgScoreDolphins=(97+112+101)/3;
// const avgScoreKoalas=(109+95+123)/3; 

//Bonus 2
const avgScoreDolphins=(97+112+101)/3;
const avgScoreKoalas=(109+95+106)/3; 

console.log(avgScoreDolphins, avgScoreKoalas);

if(avgScoreDolphins>avgScoreKoalas && avgScoreDolphins>=100){
    console.log("Dolphins are the winners!");
} 
else if(avgScoreKoalas>avgScoreDolphins && avgScoreKoalas>=100){
    console.log("Koalas are the winners!");
} 
else if(avgScoreDolphins===avgScoreKoalas && avgScoreDolphins>=100 ){
    console.log("Teams have the same average score.");
}
 else{
    console.log("No one wins");
 }