"use strict";

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5

Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnabry: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },

};
//1
// for (const [i, score] of game.scored.entries()) {
//     console.log(`Goal ${i + 1}: ${score}`);
// };


// //2
// const countingAvg=function(){
// const oddsArray=Object.values(game.odds);
//   let sum=0; 
//   for(const odd of oddsArray){
//      sum+=odd;
//   };
//   const avgNumber=sum/oddsArray.length
//   console.log(avgNumber);
// }
// countingAvg();



//  //3
//  for(const [team, odd] of Object.entries(game.odds)){
//   const teamStr=team==='x'? 'draw':`victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
//  }


//  //BONUS 
// const scorers={};

// for (const player of game.scored)  {
//   scorers[player] ? scorers[player]++ : scorers[player] = 1;
// };

// console.log(scorers);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// game.scored.forEach(function(el,i){
//   console.log(`Goal ${i+1}: ${el}`);
// });

// const avg=function(){
//   const oddsArray=Object.values(game.odds);
//   let sum=0;
//  oddsArray.forEach(function(el){
//   sum+=el;
//  });
//  const avgNumber=sum/oddsArray.length;
//  console.log(avgNumber);
// };
// avg();

// for(const[team, odd] of Object.entries(game.odds)){
//   const teamStr=team==='x'?'draw' :`victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}:${odd}`);
// };

// const scorers={};

// game.scored.forEach(function(player){
//   scorers[player]?scorers[player]++:scorers[player]=1;
// });
// console.log(scorers);