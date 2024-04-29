'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-1.jpg');
//   })
//   .then(res => console.log('Image slider is finished'))
//   .catch(err => console.error(err));

//Async, Await

// (async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/comments?postId=1`
//   );
//   const data = await res.json();
//   console.log(data, '666666666666');
//   console.log('--------11111---------');
// })();

// (() => {
//   fetch(`https://jsonplaceholder.typicode.com/comments?postId=1`)
//     .then(res => res.json())
//     .then(res => console.log(res, '55555555'));
//   console.log('-----------2222222-----------');
// })();

// let loading;
// (async () => {
//   loading = true;
//   try {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/comments?postId=1`
//     );
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     loading = false;
//   }
// })();

// (() => {
//   loading = true;
//   fetch(`https://jsonplaceholder.typicode.com/comments?postId=1`)
//     .then(res => res.json())
//     .then(res => console.log(res, '55555555'))
//     .catch(err => console.log(err))
//     .finally(() => (loading = false));

//   console.log('-----22----------');
// })();

////////////////////

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// //Running promises in Parallel
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://jsonplaceholder.typicode.com/${c1}`);
//     // const [data2] = await getJSON(`https://jsonplaceholder.typicode.com/${c2}`);
//     // const [data3] = await getJSON(`https://jsonplaceholder.typicode.com/${c3}`);
//     // console.log(data1, data2, data3);

//     const data=await Promise.all([
//       getJSON(`https://jsonplaceholder.typicode.com/${c1}`),
//       getJSON(`https://jsonplaceholder.typicode.com/${c2}`),
//       getJSON(`https://jsonplaceholder.typicode.com/${c3}`),
//     ]);

//     const [data1, data2, data3]=data;
//   } catch (err) {
//     console.log(err);
//   }
// };
// get3Countries('posts', 'comments', 'photos');


//Other Promise Combinators: race, allSettled and any 

// Promise.race

// (async function(){
//   const res=await Promise.race([
//     getJSON(`https://jsonplaceholder.typicode.com/posts`),
//     getJSON(`https://jsonplaceholder.typicode.com/comments`),
//     getJSON(`https://jsonplaceholder.typicode.com/albums`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout=function(sec){
//   return new Promise(function(_, reject){
//     setTimeout(function(){
//       reject(new Error('Request took too long'));
//     }, sec*1000);
//   });
// };

// Promise.race([
//   getJSON(`https://jsonplaceholder.typicode.com/posts`),
//   timeout(5)
// ])
// .then(res=>console.log(res[0]))
// .catch(err=>console.error(err));

/////////////////////////

//Promise.allSettled

// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another success'),
// ]).then(res=>console.log(res));


//Output: (3) [{…}, {…}, {…}]
// 0: {status: 'fulfilled', value: 'Success'}
// 1: {status: 'rejected', reason: 'Error'}
// 2: {status: 'fulfilled', value: 'Another success'}
// length: 3

////////////////////////////
// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another success'),
// ]).then(res=>console.log(res))
// .catch(err=>console.error(err));  

//Output: Error

///////////////////////////////

//Promise.any[ES2021]
// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another success'),
// ]).then(res=>console.log(res))
// .catch(err=>console.error(err));

//Output: Success

////////////////////////////////////

//Promise.race
Promise.race([
    Promise.resolve('Success'),
    Promise.resolve('Another success'),
    Promise.reject('Error'),
]).then(res=>console.log(res))
.catch(err=>console.error(err));


//new Promise,then,catch,async,await

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000000; i++) {}
//   console.log(res);
// });

// console.log('Test end');

///////////////////////////////////////
// Building a Simple Promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Lotter draw is happening 🔮");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("You WIN 💰");
//     } else {
//       reject(new Error("You lost your money 💩"));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

/////////////////////////////////////////

// const data = {
//   sugar: 10,
//   coffee: 12,
// };
// const addSugar = function (n) {
//   return new Promise((resolve, reject) => {
//     let duration = parseInt(Math.random() * 500 * n);
//     setTimeout(() => {
//       if (data.sugar - n >= 0) {
//         resolve(n + "sugar added");
//         data.sugar -= n;
//       } else {
//         reject("no enough sugar");
//       }
//     }, duration);
//   });
// };
// addSugar(data);

//////////////////////////////////////////////////////

const promise = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks";
    if (x === y) {
      resolve();
    } else {
      reject();
    }
  });
  
  promise
    .then(function () {
      console.log("Success, You are a GEEK");
    })
    .catch(function () {
      console.log("Some error has occurred");
    });
  //Success, You are a Geek 
  