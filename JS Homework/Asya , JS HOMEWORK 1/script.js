// TEST DATA 1
const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95; 

const bmiMark = weightMark/ heightMark **2;
const bmiJohn = weightJohn/ heightJohn **2;

const markHigherBmi= bmiMark > bmiJohn;
console.log(markHigherBmi);


if (markHigherBmi){
    console.log(`Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn}).`);
}
else{
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's BMI (${bmiMark}).`)
}

// TEST DATA 2
const weightMarks = 95;
const heightMarks = 1.88;
const weightJohns = 85; 
const heightJohns = 1.76; 

const bmiMarks = weightMarks/ heightMarks **2;
const bmiJohns = weightJohns/ heightJohns **2;

const marksHigherBmi= bmiMarks > bmiJohns;
console.log(marksHigherBmi);

if (marksHigherBmi){
    console.log(`Mark's BMI (${bmiMarks}) is higher than John's BMI (${bmiJohns}).`);
}
else{
    console.log(`John's BMI (${bmiJohns}) is higher than Mark's BMI (${bmiMarks}).`)
}