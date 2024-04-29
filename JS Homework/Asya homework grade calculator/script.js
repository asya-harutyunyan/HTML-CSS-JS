const data=[90, 85, 72, 60];
// const data=[55, 68, 72, 61];

const avgScore=(data[0]+data[1]+data[2]+data[3])/data.length; 

const gradeCalculator=function(scoresAvg){
if(scoresAvg>=90){
    return "A";
} 
else if(scoresAvg>=80){
    return "B";
}
else if(scoresAvg>=70){
    return "C";
}
else if(scoresAvg>=60){
    return "D";
} 
else{
    return "F";
}
}

console.log(gradeCalculator(avgScore));