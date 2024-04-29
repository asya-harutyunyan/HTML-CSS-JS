"use strict";

// // function zuyg(x){
// //     if(x%2===0){
// //         return true
// //     } else{
// //         return false
// //     }
// // }

// console.log(zuyg(4));// true
// console.log(zuyg(5));//false

// //(Division Remainder) %
// //In the above code, 7 % 3 returns 1 because when 7 is divided by 3, 
// //the remainder is 1. Similarly, 10 % 2 returns 0 because 10 divided by 2 has no remainder. 
// //And 17 % 5 returns 2 because when 17 is divided by 5, the remainder is 2.

// //The same with ternary operator

// function zuyg(x){
//     return x%2===0 ?true:false
// }

/////////////////////////////////////////////////////////////////////////////////

// const toSplit=function(text, symbol){
//     let arr=[];
//     if(!text.includes(symbol)){
//         return[text]
//     }
//     let currentIndex=0;
//     for(let i=0; i<text.length; i++){
//         if(text[i]==symbol){
//             arr.push(text.substring(currentIndex, i))
//             currentIndex= i+1
//         }
//     }
//     arr.push(text.substring(currentIndex))
//     return arr
// }

// console.log(toSplit("i-love-js", "-"));//(3) ['i', 'love', 'js']
// console.log(toSplit("JS is cool", " ")); //(3) ['JS', 'is', 'cool']


///////////////////////////////////////////////////////////////////
//Default parameters

// const multiply=function(a, b=2){
//     return a*b;
// }

// console.log(multiply(5,3));//15
// console.log(multiply(5));

//In the following example, if no value is provided for b when multiply is called, b's value would be undefined when evaluating a * b and multiply would return NaN.

// const multiply2=function(a,b){
//     return a*b;
// }
// console.log(multiply2(5,2));//10
// console.log(multiply2(5)); //NaN

///////////////////////////////
//1. Write a function called greet that takes two parameters: name and greeting. 
// If name is not provided, it should default to "Stranger". If greeting is not provided, it should default to "Hello". 
// The function should return the greeting message.

// const greet=function(name="Stranger", greeting="Hello"){
//     return `${greeting} ${name}`
// }

// console.log(greet("Bob", "Hi"));

////////////////////////////////////////////

// 2. Create a function called calculateArea that calculates the area of a rectangle. 
// It should take two parameters: width and height. If either width or height is not provided, it should default to 0. 
// The function should return the calculated area.
// const calculateArea=function(width=0, height=0){
//     return width * height
// }

// console.log(calculateArea(5,10));//50
// console.log(calculateArea(8));//0
// console.log(calculateArea());//0

///////////////////////////////////////////////////////////

// 3.Write a function called createPerson that creates a person object. 
// It should take two parameters: name and age. If name is not provided, it should default to "Unknown". 
// If age is not provided, it should default to 0. The function should return an object with properties name and age.

// const createPerson=function(name="Unknown", age=0){
//     return {
//         name:name, 
//         age:age
//     }
// }
// console.log(createPerson("Alice", 25)); // Output: { name: 'Alice', age: 25 }
// console.log(createPerson("Bob")); // Output: { name: 'Bob', age: 0 }
// console.log(createPerson()); // Output: { name: 'Unknown', age: 0 }

////////////////////////////////////////////////////////////////////////////////

// 4. Write a function called calculateDiscount that calculates the discounted price of an item. 
// It should take two parameters: price and discountPercentage. 
// If discountPercentage is not provided, it should default to 0. The function should return the discounted price.

// const calculateDiscount=function(price, discountPercentage=0){
// return price-discountPercentage
// }

// console.log(calculateDiscount(100, 20)); // Output: 80 (discounted price with 20% off)
// console.log(calculateDiscount(50)); //Output: 50 (no discount applied, default discountPercentage of 0)

/////////////////////////////////////////////////////////////////////////////////////////

//5. Implement a function called generateUsername that generates a username based on a given name and an optional random number. 
// It should take two parameters: name and randomNumber. If randomNumber is not provided, it should default to a random number between 1000 and 9999. 
// The function should return the generated username.

// const generateUsername=function(name, randomNumber=Math.floor(Math.random()*(9999-1000+1))+1000){
// return name+randomNumber
// }
// console.log(generateUsername("John", 1234)); // Output: "John1234"
// console.log(generateUsername("Alice")); // Output: "Alice" with a random number between 1000 and 9999

////////////////////////////////////////////////////////////////////////////////////////

// 6.Create a function called calculateTotal that calculates the total cost of items in a shopping cart.
//  It should take an array of items as a parameter, where each item has a price and quantity. 
//  If the array is not provided or empty, it should default to an empty array. 
// The function should return the total cost.

// function calculateTotal(items = []) {
//     let total = 0;
  
//     for (let i = 0; i < items.length; i++) {
//       const item = items[i];
//       total += item.price * item.quantity;
//     }
  
//     return total;
//   }
// console.log(calculateTotal([{ price: 10, quantity: 2 }, { price: 5, quantity: 3 }])); // Output: 35 (10*2 + 5*3)
// console.log(calculateTotal()); // Output: 0 (default empty array, no items in the cart)


////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//*Call method examples 
// Here are a few examples of using the call method in JavaScript:

//1Changing the this value of a function 

// function greet(){
//   console.log(`Hello ${this.name}`);
// }
// const person={
//   name:"Alice"
// };

// greet.call(person);

//In this example, the call method is used to invoke the greet function with the person object as the this value. 
// As a result, the function correctly accesses the name property of the person object.

///////////////////////////////////////////

// Example 2: Borrowing a method from one object and using it in another object:

// const car1={
//   brand:'Ford',
//   startEngine(){
//     console.log(`Starting the ${this.brand} engine...`);
//   }
// }
// const car2={
//   brand:"Tesla"
// }

// car1.startEngine.call(car2);// Output: Starting the Tesla engine...

//In this example, the startEngine method from car1 is borrowed using the call method 
//and invoked with car2 as the this value.
// This allows us to execute the method in the context of car2.

//////////////////////////////////////////////////////////

//Example 3: Passing arguments to a function using call:

// function introduce(name, age){
//   console.log(`My name is ${name} and I am ${age} years old`);
// }

// introduce.call(null, 'Bob', 25);


//In this example, the call method is used to invoke the introduce function with null as the this value. 
//The subsequent arguments passed to the call method ('Bob' and 25) are treated as individual arguments for the introduce function.

//These examples demonstrate some of the common use cases of the call method in JavaScript. 
//Remember that call can be used in conjunction with any function, allowing you to explicitly set the this value and pass arguments individually.

////////////////////////////////////////
// Exemple 4: Create a product object with name and price properties. 
// Implement a function displayProductInfo that logs the name and price of a product. 
// Use the call method to invoke the function with the product object as the this value.

// const product={
//   name:"Phone", 
//   price: 499,
// };

// function displayProductInfo(){
//   console.log(`Product: ${this.name}, Price:${this.price}`);
// }

// //With call
// displayProductInfo.call(product);

//With bind
// const boundDisplayProductInfo =displayProductInfo.bind(product);
// boundDisplayProductInfo();

//////////////////////////////////////////////////////////

//Example 5 This example calls the fullName method of person, using it on person1:

// const person={
//   fullName: function(){
//     return this.firstName +' '+ this.lastName;
//   }
// };

// const person1={
//   firstName:"John", 
//   lastName:'Doe'
// }
// const person2={
//   firstName:'Mary', 
//   lastName:'Doe'
// }
// console.log(person.fullName.call(person1));
// console.log(person.fullName.call(person2));

////////////////////////////////////////////////////////////////////////////

//Example 6 
//The call() method with arguments 

// const person={
//   fullName:function(city, country){
//     return this.firstName+ " " + this.lastName+ "," + city+"," + country;
//   }
// }

// const person1={
//   firstName:"John", 
//   lastName:'Doe'
// }
// console.log(person.fullName.call(person1, "Oslo", "Norway"));


///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

//APPLY Method 

//Example 1
// const greet=function(name){
//   console.log(`Hello, ${name}`);
// }

// const person={
// firstName:"John", 
// lastName:'Doe'
// }
// greet.apply(person, ['Alice']);

//////////////////////////////////////////////
//Example 2
//The apply() method accepts arguments in an array:

// const person={
//   fullName:function(city, country){
//       return this.firstName+ " " + this.lastName+ "," + city+"," + country;
//      }
// }

// const person1={
//   firstName:"John",
//   lastName:"Doe"
// }

// console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));

////////////////////////////////////////////////////////////////////////////////////

//Example 3
// Example using apply with arguments array:

// function greet(name, age) {
//   console.log(`Hello, ${name}! You are ${age} years old.`);
// }

// const person = {
//   name: "John",
//   age: 30
// };

// greet.apply(null, [person.name, person.age]); // Output: Hello, John! You are 30 years old.
// greet.apply(person, ["Alice", 25]); // Output: Hello, Alice! You are 25 years old.

//////////////////////////////////////////////////////////////////////////////////

//Example 4
// Example using apply with array-like object:
// function sum(a, b){
//   console.log(a+b);
// }
// const numbers=[5,10];

// sum.apply(null, numbers);//15

////////////////////////////////////////////////////////////////////

//Example 5
//Example using apply to find the maximum number in an array:

// const numbers=[10, 5, 20, 15];

// const maxNumbr=Math.max.apply(null, numbers);
// console.log(maxNumbr);//20

///////////////////////////////////////////////////////
//Example 6
//Example using apply to concatenate arrays:

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const concatenatedArray = Array.prototype.concat.apply(array1, array2);

// console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

// function incrementItems(arr) {
// 	for (let i = 0; i < arr.length; i++)
// 		arr[i] = arr[i] + 1
// 	return arr
// };
// console.log(incrementItems([0, 1, 2, 3]));
// console.log(incrementItems([2, 4, 6, 8]));
// console.log(incrementItems([-1, -2, -3, -4]));

//A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.

// function carsNeeded(numPeople) {
// const carCapacity=5;
// const carsNeeded=Math.ceil(numPeople/carCapacity);
// return carsNeeded
// }

// console.log(carsNeeded(5));
// console.log(carsNeeded(11));
// console.log(carsNeeded(0));

/////////////////////////////////////////////////////////////
// const shouldServeDrinks=function(age, onBreak) {
// 	if(age>=18 && onBreak===true){
// 		console.log("He can drink")
// 	} else{
// 		console.log("He can't drink")
// 	}
// }; 
// shouldServeDrinks(17, true);
// shouldServeDrinks(19, false);
// shouldServeDrinks(30, true);

//////////////////////////////////////////////////////////
// Write a function that returns the string "something" joined with a space " " and the given argument a.
// function giveMeSomething(a) {
// 	return `something ${a}`
// };

// console.log(giveMeSomething("is better than nothing"));
// console.log(giveMeSomething("Bob Jane"));
// console.log(giveMeSomething("something"));

/////////////////////////////////////////////////////////////////////////
// const  circuitPower=function(voltage, current) {
// 	return voltage*current
// };
// console.log(circuitPower(230, 10));
// console.log(circuitPower(110, 3));
// console.log(circuitPower(480, 20));

// function lessThan100(a, b) {
// 	return a+b<100?true:false;
// };

// console.log(lessThan100(22, 15));
// console.log(lessThan100(83, 34));
// console.log(lessThan100(3, 77));

// function tuckIn(arr1, arr2) {
// 	return [arr1[0], ...arr2, arr1[1]]
// };

// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(tuckIn([15,150], [45, 75, 35]));
// console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));

/////////////////////////////////////////////////////////////
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
// const filterArray=function(arr) {
//     return arr.filter((element) => typeof element === 'number');
// };
// console.log(filterArray([1, 2, "a", "b"]));
// console.log(filterArray([1, "a", "b", 0, 15]));
// console.log(filterArray([1, 2, "aasf", "1", "123", 123]));

////////////////////////////////////////////////////////////////////////////
//Returning a function from another function:
// const multiplyBy=function(num){
//     return function(x){
//         return x*num;
//     };
// }

// const multiplyByTwo=multiplyBy(2);
// console.log(multiplyByTwo(5)); //10

// const multiplyByTen = multiplyBy(10);
// console.log(multiplyByTen(5)); //50

////////////////////////////////////////////////////////////////////////////
//Passing a function as an argument to another function

const calculate=function(num1, num2, operation){
    return operation(num1, num2);
}

const add=function(a,b){
    return a+b;
}

const substract=function(a,b){
    return a-b;
}

console.log(calculate(5,3, add));
console.log(calculate(5,3, substract));




