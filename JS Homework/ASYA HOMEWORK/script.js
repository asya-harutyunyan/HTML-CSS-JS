const calcTip=function(billValue){
    return billValue>=50 && billValue<=300 ? billValue*0.15 : billValue*0.2;
}

const bills=[125, 555, 44];

const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);

const tips=[tip1, tip2, tip3];

// console.log(tip1, tip2, tip3);

const total=[bills[0]+tip1, bills[1]+tip2, bills[2]+tip3];
console.log(total);