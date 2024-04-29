// const billValue=275;

// const billValue=40;

const billValue=430;

console.log(billValue, "Bill");

const tip=billValue>=50 && billValue<=300 ? billValue*0.15 : billValue*0.2;
console.log(tip, "Tip");

const billAndTip=billValue+tip;
console.log(billAndTip, "Total amount");

console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billAndTip}`)