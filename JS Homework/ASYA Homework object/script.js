const markMiller={
    fullName:"Mark Miller",
    mass:78,
    height:1.69,

calcBmi:function(){
    this.bmi= this.mass/(this.height **2);
    return this.bmi;
}
};

const johnSmith={
    fullName:"John Smith",
    mass:92,
    height:1.95,

calcBmi:function(){
    this.bmi= this.mass/(this.height **2);
    return this.bmi;
    }
};


console.log(markMiller,johnSmith );
console.log(markMiller.calcBmi(), johnSmith.calcBmi());

if (markMiller.bmi>johnSmith.bmi){
    console.log(`Mark Miller's BMI (${markMiller.bmi}) is higher than John Smith's (${johnSmith.bmi}). `);
}else{
    console.log(`John Smith's BMI (${johnSmith.bmi}) is higher than Mark Miller's  (${markMiller.bmi}). `);
}