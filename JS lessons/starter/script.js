'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// // Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};
// console.log(account1.movements.sort((a, b) => a - b));

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//////////////////////////////////////////////////////////////////////////////////////
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,

//   movementsDates: [
//     '2019-11-18T21:31:17.178Z',
//     '2019-12-23T07:42:02.383Z',
//     '2020-01-28T09:15:04.904Z',
//     '2020-04-01T10:17:24.185Z',
//     '2020-05-08T14:11:59.604Z',
//     '2020-07-26T17:01:17.194Z',
//     '2020-07-28T23:36:17.929Z',
//     '2020-08-01T10:51:36.790Z',
//   ],
//   currency: 'EUR',
//   locale: 'pt-PT', // de-DE
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,

//   movementsDates: [
//     '2019-11-01T13:15:33.035Z',
//     '2019-11-30T09:48:16.867Z',
//     '2019-12-25T06:04:23.907Z',
//     '2020-01-25T14:18:46.235Z',
//     '2020-02-05T16:33:06.386Z',
//     '2020-04-10T14:43:26.374Z',
//     '2020-06-25T18:49:59.371Z',
//     '2020-07-26T12:01:20.894Z',
//   ],
//   currency: 'USD',
//   locale: 'en-US',
// };

// const accounts = [account1, account2];

// /////////////////////////////////////////////////
// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//Simple Array methods

// let arr=["a", 'b', 'c', 'd', 'e'];

// //SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr);
// console.log(arr.slice());
// console.log([...arr]);

// //SPLICE
// console.log(arr.splice(2));
// console.log(arr);

// arr.splice(-1);
// console.log(arr);
// arr.splice(1,2);
// console.log(arr);

// //REVERSE
// arr=["a", 'b', 'c', 'd', 'e'];
// const arr2=['j', 'i','h', 'g', 'f' ];
// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT
// const letters=arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN

// console.log(letters.join("-"));

// //The new at Method
// const arr=[23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //Getting last array element
// console.log(arr[arr.length-1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

// //////////////////////////////////////

// //Looping arrays:  forEach

// // const movements=[200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const[i, movement] of movement.entries()){
//   if(movement>0){
//     console.log(`Movement ${i+1}: You deposited ${movement}`);
//   } else{
//     console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// movements.forEach(function(mov, i, arr){
//   if(mov>0){
//     console.log(`Movement ${i+1}: You deposited  ${mov}`);
//   }else{
//     console.log(`Movement ${i+1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// //forEach with Maps and Sets
// //Map

// const currencies=new Map([
//   ['USD', 'UNITED STATES DOLLAR'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling']
// ]);

// currencies.forEach(function(value, key, map){
//   console.log(`${key}:${value}`);
// });

// //SET
// const currenciesUnique=new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// currenciesUnique.forEach(function(value, _, map){
//   console.log(`${value}:${value}`);
// });

// //The map Method
// const eurToUsd=1.1;

// // const movementsUSD=movements.map(function(mov){
// //   return mov*eurToUsd;
// // });

// const movementsUSD=movements.map(mov => mov*eurToUsd);
// console.log(movementsUSD);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor=[];
// for(const mov of movements) movementsUSDfor.push(mov*eurToUsd);
// console.log(movementsUSDfor);

// const movementDescriptions=movements.map(
//   (mov, i)=> `Movement ${i+1}: You ${mov>0 ? 'deposited' :'withdrow'} ${Math.abs(mov)}`
// );

// console.log(movementDescriptions);

// //The filter Method

// const movements=[200, 450, -400, 3000, -650, -130, 70, 1300];

// const positiveDeposits=movements.filter(
//   (mov, i, arr)=> mov>0 && mov<450
// );

// const negativeDeposits=movements.filter(function(mov, i, arr){
//   return mov<0;
// });

// const mapFilterDifference=movements.map(mov=>{
//   if(mov>0){
//     return mov;
//   }
// });

// console.log(mapFilterDifference);

// console.log(movements);

// const depositsFor=[];
// for (const mov of movements) if(mov>0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawals=movements.filter(mov=>mov<0);
// console.log(withdrawals);

//The reduce method

//accumulator=>Snowball

// const balance=movements.reduce(function(acc, cur, i, arr){
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc+cur;
// }, 0);
// const balance=movements.reduce((acc, cur, i, arr)=>acc+cur, 10);
// console.log(balance);

// let balance2=0;
// for(const mov of movements) balance2+=mov;
// console.log(balance2);

// //Maximum value
// const max=movements.reduce((acc,mov)=>{
//   if(acc>mov) return acc;
//   else return mov;
// }, movements[0]);

// console.log(max, 'Max');

// //Min value
// const min=movements.reduce((acc,mov)=>{
//   if(acc<mov) return acc;
//   else return mov;
// }, movements[0]);

// console.log(min, 'Min');

////////////////////////////////

// const eurToUSD = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUSD)
//   .reduce((acc, mov) => acc + mov, 0);

// //Better variant
// const totalDepositsUSD2 = movements.reduce((acc, cur, i, arr) => {
//   if (cur > 0) {
//     acc += cur * eurToUSD;
//   }
//   return acc;
// }, 0);

// console.log(totalDepositsUSD2);

// //The find method
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);
// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// console.log(account);

// //Includes
// console.log(movements.includes(-130));

// //Some
// console.log(movements.some(mov => mov === -130));
// console.log(movements.find(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// //EVERY
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// //Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// //flat and flatMap

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arr.flat(2));
// // console.log(arr.flat(Infinity));

// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// //With flatMap
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// //Sorting

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners); //Changes the original

// movements.sort((a, b) => a - b);
// movements.sort((a, b) => b - a);
// console.log(movements);

// const transactionHistory = {
//   withdrawal: 0,
//   deposit: 0,
// };
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, cur) => {acc[cur>0?'deposit' :'withdrawal'] +=cur;
// return acc;
// }, transactionHistory);

// console.log(numDeposits1000);

//////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) =>a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  console.log(acc);
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummery = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => (acc += Math.abs(mov)), 0);
  labelSumOut.textContent = `${out}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummery(acc);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update UI
    updateUI(currentAccount);
  }
});

let sorted = false;
// btnSort.addEventListener('click', function (e) {
//   displayMovements(currentAccount.movements, !sorted);
//   sorted = !sorted;
// });

btnSort.addEventListener('click', function (e) {
  if (sorted) {
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
  } else {
    currentAccount.movements.sort((a, b) => b - a);
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    //Delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
  labelWelcome.textContent ='Log in to get started';
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiveAcc &&
    currentAccount.balance >= amount &&
    receiveAcc?.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
});
////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Converting and Checking numbers

// console.log(23 === 23.0);

// //Base 10-0 to 9. 1/10=0.1. 3/10=3.333333

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// //Conversion
// console.log(Number('23'));
// console.log(+'23');

// //Parsing
// console.log(Number.parseInt('30px', 10));

// console.log(Number.parseInt('e23', 10));

// console.log(Number.parseInt('  2.5rem  '));

// console.log(Number.parseFloat('  2.5rem  '));

// //Check if value is NAN
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20X'));

// console.log(23 / 0, Number.isNaN(23 / 0));

// //Checking if value is number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20X'));
// console.log(Number.isFinite(23 / 0));

// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23 / 0));

// //Math and Rounding
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.max(5, 18, '23', 11, 2));
// console.log(Math.max(5, 18, Number.parseFloat('23px'), 11, 2));

// console.log(Math.min(5, 18, 23, 11, 2));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
