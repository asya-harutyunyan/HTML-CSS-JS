
const calcTeamScore=(score1, score2)=>(score1+score2);

//TEST DATA1
const scoreRealMadrid=calcTeamScore(3,1); 
const scoreBarcelona=calcTeamScore(2,1); 

//TEST DATA 2
// const scoreRealMadrid=calcTeamScore(1,2); 
// const scoreBarcelona=calcTeamScore(2,1); 

const checkWinner= function(barcelonaScore, madridScore){
    if(barcelonaScore>madridScore){
        console.log(`Barcelona wins (${barcelonaScore} vs ${madridScore}).`);
    }
    else if(madridScore>barcelonaScore){
        console.log(`Madrid wins (${madridScore} vs ${barcelonaScore}).`);
    }
    else{
        console.log("It's extra time.");
    }
}
checkWinner(scoreRealMadrid,scoreBarcelona);




// const checkWinner= function(barcelonaScore, madridScore){
//     if(barcelonaScore>madridScore){
//         return `Barcelona wins (${barcelonaScore} vs ${madridScore}).`;
//     }
//     else if(madridScore>barcelonaScore){
//        return `Madrid wins (${madridScore} vs ${barcelonaScore}).`;
//     }
//     else{
//         return "It's extra time.";
//     }
// }
// console.log (checkWinner(scoreRealMadrid,scoreBarcelona));