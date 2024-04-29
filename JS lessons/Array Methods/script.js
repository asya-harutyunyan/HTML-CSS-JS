"use strict";

// const arr=[1,2,3,4,5,6];
// const rrr=[...arr];
// console.log(rrr);
// const result=rrr.filter((a)=>a>3);
// console.log(result);

//!at
// The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers.
// Negative integers count back from the last item in the array.

//Example 1
// const array1=[5, 12, 8, 130, 44];

// let index=2;

// console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);

//Example 2
// const cart=["apple", 'banana', "pear"];

//A function which returns the last item of a given array
// function returnLast(arr){
//   return arr.at(-1);
// }
// console.log(returnLast(cart));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//!concat
// The concat() method is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.

//Example 1
// const array=[1, 2, 3];
// const array2=[4, 5, 6];
// const bothArrays=array.concat(array2);

//The same as
// const bothArrays=[...array, ...array2];
// console.log(bothArrays);

//Example 2
// const letters=["a", "b", "c", "d"];
// const numbers=[1, 2, 3];

// const alphaNumeric=letters.concat(numbers);
// console.log(alphaNumeric);

//Example 3
// const num1=[1,2,3];
// const num2=[4, 5, 6];
// const num3=[7, 8, 9];

// const numbers=num1.concat(num2, num3);
// console.log(numbers);

//Example 4
// const letters=["a", "b", "c"];

// const alphaNumeric=letters.concat(1, [2,3]);
// console.log(alphaNumeric); //(6) ['a', 'b', 'c', 1, 2, 3]

//Example 5
// const num1=[[1]];
// const num2=[2, [3]];

// const numbers=num1.concat(num2);
// console.log(numbers); //(3) [Array(1), 2, Array(1)]

// //modify the first element of num1
// num1[0].push(4);

// console.log(numbers); //(3) [Array(2), 2, Array(1)]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//copyWithin()
// The copyWithin() method shallow copies part of an array to another
// location in the same array and returns it without modifying its length.

//Example 1
// const array1 = ['a', 'b', 'c', 'd', 'e'];

// // Copy to index 0 the element at index 3
// console.log(array1.copyWithin(0, 3, 4));//(5) ['d', 'b', 'c', 'd', 'e']

// // Copy to index 1 all elements from index 3 to the end
// console.log(array1.copyWithin(1, 3));// ["d", "d", "e", "d", "e"]

//Exemple 2
// const numbers=[1, 2, 3, 4, 5, 6];

// numbers.copyWithin(0, 3);//(6) [4, 5, 6, 4, 5, 6]
// numbers.copyWithin(0, 3, 4);//(6) [4, 2, 3, 4, 5, 6]
// numbers.copyWithin(-2, -3, -1);//(6) [1, 2, 3, 4, 4, 5]
// console.log(numbers);

// console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//entries()
//  The entries() method returns a new array iterator object that contains the key/value pairs for each index in the array.

//Example 1
// const array1 = ['a', 'b', 'c'];

// const iterator1 = array1.entries();

// console.log(iterator1.next().value); //[0, "a"]

// console.log(iterator1.next().value);//[1, "b"]
// In the example above, array.entries() returns an iterator object (iterator) that can be used to iterate over the array's key/value pairs.
// Each call to iterator.next().value retrieves the next key/value pair as an array.
// The key is the index of the element, and the value is the corresponding element from the array.
//  The iteration continues until all elements of the array have been iterated, at which point the done property of the iterator becomes true.

//Example 2
//Iterating with index and element
// const array=["a", "b", "c"];

// for(const[index, element] of array.entries()){
//   console.log(index, element);
// }
// 0 'a'
// 1 'b'
// 2 'c'
///////////////////////////
//Using a for...of loop
// const array1=["a", "b", "c"];
// // const arrayEntries=array1.entries();

// for(const element of array1.entries()) {
//   console.log(element);
// }
//(2) [0, 'a']
// (2) [1, 'b']
// (2) [2, 'c']

//////////
//Iterating sparse arrays
// entries() will visit empty slots as if they are undefined.

// for(const element of [,"a"].entries()){
//   console.log(element);
// }
//(2) [0, undefined]
//(2) [1, 'a']

////////////////////////////////////////////

//Calling entries() on non-array objects
// The entries() method reads the length property of this and then accesses each integer index.

// const arrayLike={
//   length:3,
//   0:"a",
//   1:"b",
//   2:"c"
// };

// for(const entry of Array.prototype.entries.call(arrayLike)){
//   console.log(entry);
// }
//(2) [0, 'a']
//(2) [1, 'b']
//(2) [2, 'c']

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//every()
//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

//Example 1

// const isBelow=(currentValue)=>currentValue<40;

// const array1 = [1, 30, 39, 25, 10, 13];

// console.log(array1.every(isBelow));//true

//Example 2

// const number=function(element){
//   return element>=10;
// }
// const arr1=[12, 5, 8, 130, 44];
// const arr2=[12, 54, 18, 130, 44];

// console.log(arr1.every(number));//false
// console.log(arr2.every(number));//true

//Example 3
// const isSubset=(array1, array2)=>array2.every((element)=>array1.includes(element));

// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]));//true
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//fill();

// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length).
//  It returns the modified array.

//Example 1
// Fill all the elements with a value:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.fill("Kiwi"));//(4) ['Kiwi', 'Kiwi', 'Kiwi', 'Kiwi']

//Example 2
// Fill the last two elements:

// const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits2.fill("Kiwi", 2,4)); //(4) ['Banana', 'Orange', 'Kiwi', 'Kiwi']

//Example 3
// const array1 = [1, 2, 3, 4];
// console.log(array1.fill(0, 2, 4));//[1, 2, 0, 0]
// console.log(array1.fill(5,1)); //[1, 5, 5, 5]
// console.log(array1.fill(6)); //[6, 6, 6, 6]
// console.log(array1.fill(4, 1,3));//(4) [1, 4, 4, 4]
// console.log(array1.fill(4,1)); //(4) [1, 4, 4, 4]
// console.log(array1.fill(4,1,2));//(4) [1, 4, 3, 4]
// console.log(array1.fill(4,1,1)); //(4) [1, 2, 3, 4]
// console.log(array1.fill(4,3,3));//(4) [1, 2, 3, 4]
// console.log(array1.fill(4, -3, -2));//(4) [1, 4, 3, 4]
// console.log(array1.fill(4, NaN, NaN));//(4) [1, 2, 3, 4]
// console.log(array1.fill(4, 3, 5));//(4) [1, 2, 3, 4]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//filter()
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

//Example 1
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result=words.filter(word=>word.length>6);
// console.log(result);//(3) ['exuberant', 'destruction', 'present']

//Example 2

// function isBigEnough(value){
//     return value>=10;
// }
// const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// console.log(filtered);//(3) [12, 130, 44]

//Example 3
// const ages=[31, 33, 16, 40];

// const result=ages.filter(checkAdult);
// function checkAdult(age){
//     return age>=18;
// }
// console.log(result);//(3) [31, 33, 40]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//find()
// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.

//Example 1

// const ages=[3, 21, 18, 20];
// const checkAge=(age)=>(age>18);
// const newAge=ages.find(checkAge);
// console.log(newAge);//21

// //Example 2
// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
//   ];

//   function isCherries(fruit){
//     return fruit.name==="cherries";
//   }
//   console.log(inventory.find(isCherries));//{name: 'cherries', quantity: 5}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//findIndex()
//The findIndex() method executes a function for each array element.
// The findIndex() method returns the index (position) of the first element that passes a test.
// The findIndex() method returns -1 if no match is found.
// The findIndex() method does not execute the function for empty array elements.
// The findIndex() method does not change the original array.

//Example 1
// const ages=[3, 21, 18, 20];
// function checkAge(age){
//     return age>18;
// }
// const findIndex=ages.findIndex(checkAge);
// console.log(findIndex);//1
// console.log(ages);//(4) [3, 21, 18, 20]

//Example 2

// const array=[5, 12, 8,130,44];

// const isLargeNumber=(element)=>element>13;
// console.log(array.findIndex(isLargeNumber));//3

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//findLast();

//The findLast() method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function.
// If no elements satisfy the testing function, undefined is returned.

//Example 1
// const array1 = [5, 12, 58, 120, 41];
// const found=array1.findLast((element)=>element>45);
// console.log(found);//120

// //Example 2
// const inventory=[
//     {name:"apples", quantity:2},
//     { name: "bananas", quantity: 0 },
//     { name: "fish", quantity: 1 },
//     { name: "cherries", quantity: 5 },
// ];

// function isNotEnough(item){
//     return item.quantity<2;
// }
// console.log(inventory.findLast(isNotEnough)); //{name: 'fish', quantity: 1}

// //Example 3
// const inventory2=[
//     {name:"apples", quantity:2},
//     { name: "bananas", quantity: 4 },
//     { name: "fish", quantity: 3 },
//     { name: "cherries", quantity: 5 },
// ];

// function isNotEnough(item){
//     return item.quantity<2;
// }
// console.log(inventory2.findLast(isNotEnough));//undefined

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//findLastIndex()
// The findLastIndex() method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function.
// If no elements satisfy the testing function, -1 is returned.

//Example
// const array=[5, 12, 50, 130, 43];
// const isLargeNumber=(element)=>element>45;
// console.log(array.findLastIndex(isLargeNumber));//3-130nna

//Example 2
// const array=[5, 12, 8, 13, 43];
// const isLargeNumber=(element)=>element>45;
// console.log(array.findLastIndex(isLargeNumber));//-1

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//flat()
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

//Example 1
// const arr1=[0,1,2,[3,4]];
// console.log(arr1.flat());//[0, 1, 2, 3, 4]
// //Example 2
// const arr2=[1, 2, [3, 4, [5, 6]]];
// console.log(arr2.flat());//[1, 2, 3, 4, Array(2)]

// //Example 3
// const arr3=[1, 2, [3, 4, [5, 6]]];
// console.log(arr3.flat(2));// [1, 2, 3, 4, 5, 6]

//Example 4
// const arr4=[1, [2, [3, 4, [5, 6]]]];
// console.log(arr4.flat(3));//(6) [1, 2, 3, 4, 5, 6]

//Example 5
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr); //[1, 2, 3, 4, 5, 6]
// console.log(myArr);//[Array(2), Array(2), Array(2)]

//Example 6
// const myArr=[1, 2, [3, [4, 5, 6], 7], 8];
// const newArr=myArr.flat();
// console.log(newArr);//[1, 2, 3, Array(3), 7, 8]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//flatMap()
//The flatMap() method maps all array elements and creates a new flat array.
// flatMap() creates a new array from calling a function for every array element.
// flatMap() does not execute the function for empty elements.
// flatMap() does not change the original array.

//Example 1
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap((x) => x * 2);
// console.log(newArr); //[2, 4, 6, 8, 10, 12]

//Example 2
// const arr1=[1, 2, 1];
// const result=arr1.flatMap((num)=>(num===3 ?[3,4]:5));
// console.log(result);// [5, 5, 5]

//Example 3
// const arr1=[1, 2, 3];
// const result=arr1.flatMap((num)=>(num===3 ?[3,4]:5));
// console.log(result);// [5, 5, 3,4]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//forEach()
// The forEach() method calls a function for each element in an array.

//Example 1
// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// document.getElementById("demo").innerHTML = sum;

// function myFunction(item) {
//   sum += item;
// }
// console.log(sum);

//Example 2
// const movements=[200, 450, -400, 3000, -650, -130, 70, 1300];
// movements.forEach(function(mov, i, arr){
//   if(mov>0){
//     console.log(`Movement ${i+1}: You deposited  ${mov}`);
//   }else{
//     console.log(`Movement ${i+1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

//Example 3
// const numbers=[1,2,3,4,5];
// const doubledNumbers=[];

// numbers.forEach((number)=>{
//     doubledNumbers.push(number*2);
// });

// console.log(doubledNumbers);//[2, 4, 6, 8, 10]
//////////////////////////////////////////////////////
// const numbers=[1,2,3,4,5];

// // const doubled=numbers.map((number)=>number*2);
// // console.log(doubled);

// numbers.forEach((number, i, arr)=>
//     arr[i]=number*2);
// console.log(numbers);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array.from();
// The Array.from() method returns an array from any object with a length property.
// The Array.from() method returns an array from any iterable object.
// You can only use it as Array.from().
// Using x.from(), where x is an array will return undefined.

//Example 1
// const arr=Array.from("hello");
// console.log(arr); //['h', 'e', 'l', 'l', 'o']

//Example 2
// const elements = document.querySelectorAll("li");
// const array = Array.from(elements);
// console.log(array); // Output: [li, li, li, li] ?

//Example 3

//Array from a map
// const map=new Map([
//     [1,2],
//     [2,4],
//     [4,8]
// ])
// const arrayFromMap=Array.from(map);
// console.log(arrayFromMap);//(3) [Array(2), Array(2), Array(2)]
// console.log(map);//Map(3) {1 => 2, 2 => 4, 4 => 8}

// const mapper = new Map([
//     ["1", "a"],
//     ["2", "b"],
//   ]);
//  console.log( Array.from(mapper.values())); // ['a', 'b'];

//   console.log( Array.from(mapper.keys()));// ['1', '2'];

//Example 4

//   //Array from a Set
//   const set = new Set(["foo", "bar", "baz", "foo"]);
// console.log(  Array.from(set));// [ "foo", "bar", "baz" ]

//Example 5
// const arrayLike = {
//     0: 'apple',
//     1: 'banana',
//     2: 'orange',
//     length: 3
//   };
// const array=Array.from(arrayLike, function(element) {
//     return element.toUpperCase();
//   })
// console.log(array);// ['APPLE', 'BANANA', 'ORANGE']
// //Without function output will be ['apple', 'banana', 'orange']

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//includes();

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

//Example 1
// const array1 = [1, 2, 3];
// console.log(array1.includes(2));
// // Expected output: true

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // Expected output: true

// console.log(pets.includes('at'));
// // Expected output: false

//Example 2
// [1, 2, 3].includes(2); // true
// [1, 2, 3].includes(4); // false
// [1, 2, 3].includes(3, 3); // false
// [1, 2, 3].includes(3, -1); // true
// [1, 2, NaN].includes(NaN); // true
// ["1", "2", "3"].includes(3); // false

// //Example 3
// //Calling includes() on non-array objects
// const arrayLike = {
//     length: 3,
//     0: 2,
//     1: 3,
//     2: 4,
//   };
//   console.log(Array.prototype.includes.call(arrayLike, 2));
//   // true
//   console.log(Array.prototype.includes.call(arrayLike, 1));
//   // false

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// indexOf()
//The indexOf() method returns the first index (position) of a specified value.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method starts at a specified index and searches from left to right.
// By default the search starts at the first element and ends at the last.
// Negative start values counts from the last element (but still searches from left to right).

//Example 1
// const fruits=["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.indexOf("Apple"));//2

//Example 2
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// console.log(fruits.indexOf("Apple", 3)); //4

//Example 3
// const fruits = [ "Orange", "Apple", "Mango", "Apple"];
// console.log(fruits.indexOf("Banana")); // -1

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array.isArray();
//The isArray() method returns true if an object is an array, otherwise false.

//Example 1
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(Array.isArray(fruits));  //true

// //Example 2
// const text="Hello";
// console.log(Array.isArray(text));//false

//Example 3
// all following calls return true
// console.log(Array.isArray([]));
// console.log(Array.isArray([1]));
// console.log(Array.isArray(new Array()));
// console.log(Array.isArray(new Array("a", "b", "c", "d")));
// console.log(Array.isArray(new Array(3)));
// // Little known fact: Array.prototype itself is an array:
// console.log(Array.isArray(Array.prototype));

// // all following calls return false
// console.log(Array.isArray());
// console.log(Array.isArray({}));
// console.log(Array.isArray(null));
// console.log(Array.isArray(undefined));
// console.log(Array.isArray(17));
// console.log(Array.isArray("Array"));
// console.log(Array.isArray(true));
// console.log(Array.isArray(false));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//join()

// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).

//Example 1
// const fruits=["Banana", "Orange", "Apple", "Mango"];
// const text=fruits.join();
// console.log(text);  //Banana,Orange,Apple,Mango

//Example 2
// const fruits=["Banana", "Orange", "Apple", "Mango"];
// const text=fruits.join(" and ");
// console.log(text);  //Banana and Orange and Apple and Mango

//Example 3
// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join(''));//FireAirWater
// console.log(elements.join(' ')); //Fire Air Water
// console.log(elements.join('-')); //Fire-Air-Water

//Example 4
// const arr = [];
// arr.push(1, [3, 4], 2);
// console.log(arr.join(";")); // 1;3,4;2

//Example 5
// const arrayLike = {
//     length: 3,
//     0: 2,
//     1: 3,
//     2: 4,
//   };
//   console.log(Array.prototype.join.call(arrayLike));// 2,3,4
//   console.log(Array.prototype.join.call(arrayLike, "."));// 2.3.4

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//keys()
// The keys() method returns an Array Iterator object with the keys of an array.
// The keys() method does not change the original array.

// //Example 1
// const arr=['a', 'b', 'c'];
// const iterator=arr.keys();

// for(const key of iterator){
//     console.log(key);
// }
// //0
// //1
// //2

//Example 2
// const fruits=["Banana", "Orange", "Apple", "Mango"];
// const keys=fruits.keys();

// let text="";
// for(let x of keys){
//     text+=x
// }
// console.log(text);// 0123

//Use the built in Object.keys() Method:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = Object.keys(fruits);

// let text = "";
// for (let x of keys) {
//   text += x;
// }
// console.log(text);//0123

//Unlike Object.keys(), which only includes keys that actually exist in the array, the keys() iterator doesn't ignore holes representing missing properties.

//Example
// const arr=["a", , "c"];
// const sparseKeys=Object.keys(arr);
// const denseKeys=[...arr.keys()];
// console.log(sparseKeys); // ['0', '2']
// console.log(denseKeys); // [0, 1, 2]

//Calling keys() on non-array objects
//The keys() method reads the length property of this and then yields all integer indices between 0 and length - 1. No index access actually happens.

// const arrayLike={
//     length:3,
// };
// for(const entry of Array.prototype.keys.call(arrayLike)){
//     console.log(entry);
// }
// //0
// //1
// //2

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//lastIndexOf()
//The lastIndexOf() method returns the last index at which a given element can be found in the array,
// or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// //Example 1
// const fruits1 = ["Apple", "Orange", "Apple", "Mango"];
// const index1 = fruits1.lastIndexOf("Apple");
// console.log(index1); //2

// //Example 2
// const fruits2 = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
// const index2 = fruits2.lastIndexOf("Apple");
// console.log(index2);//5

// //Example 3
// const fruits3 = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
// const index3 = fruits3.lastIndexOf("Apple", 4);
// console.log(index3);//3

// //Example 4
// const fruits4 = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
// const index4 = fruits4.lastIndexOf("Apple", -2);
// console.log(index4);//3

//Example 5
// const numbers = [2, 5, 9, 2];
// console.log(numbers.lastIndexOf(2));//3
// console.log(numbers.lastIndexOf(7));//-1
// console.log(numbers.lastIndexOf(2, 3));//3
// console.log(numbers.lastIndexOf(2, 2));//0
// console.log(numbers.lastIndexOf(2, -1));//3

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//map()
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// map() does not change the original array.

//Example 1

// const numbers=[1,2,3,4,5];
// const doubledNumbers=numbers.map((num) =>num*2);
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//Example 2
// const words=['apple', 'banana', 'cherry'];

// const toUpperCase=words.map((word) =>word.toUpperCase());
// console.log(toUpperCase);// ['APPLE', 'BANANA', 'CHERRY']

//Example 3
//Calling map() on non-array objects
//The map() method reads the length property of this and then accesses each integer index.

// const arrayLike = {
//     length: 3,
//     0: 2,
//     1: 3,
//     2: 4,
//   };
//   console.log(Array.prototype.map.call(arrayLike, (x)=>x**2)); //[4, 9, 16]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array.of();
// The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

//Examples

// console.log(Array.of('foo', 2, 'bar', true));//["foo", 2, "bar", true]

// const newArray = Array.of(1, 2, 3, 'four', [5, 6]);
// console.log(newArray); // Output: [1, 2, 3, 'four', [5, 6]]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
//The push() method adds the specified elements to the end of an array and returns the new length of the array.
//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
//The unshift() method adds the specified elements to the beginning of an array and returns the new length of the array.

//Example for pop()
// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// console.log(plants.pop());// "tomato"
// console.log(plants);//["broccoli", "cauliflower", "cabbage", "kale"]
// plants.pop();
// console.log(plants);//["broccoli", "cauliflower", "cabbage"]

//Example for push()
// const animals = ['pigs', 'goats', 'sheep'];
// const count = animals.push('cows');
// console.log(count);//4
// console.log(animals);//["pigs", "goats", "sheep", "cows"]
// animals.push('chickens', 'cats', 'dogs');
// console.log(animals);//["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

//Example for shift()
// const array1 = [1, 2, 3];
// const firstElement = array1.shift();
// console.log(firstElement);//1
// console.log(array1);//[2, 3]

//Example for unshift()
// const array2 = [1, 2, 3];
// console.log(array2.unshift(4, 5));//5
// console.log(array2);//[4, 5, 1, 2, 3]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//reduce()
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.
// /The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order,
//passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// const array1 = [1, 2, 3, 4];
// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );
// console.log(sumWithInitial);//10

//reduceRight()- The same as reduce() but from right to left

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//reverse()
//The reverse() method reverses the order of the elements in an array.
//The reverse() method overwrites the original array.

//Example 1
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.reverse();
// console.log(fruits); // ['Mango', 'Apple', 'Orange', 'Banana']

// //Example 2
// const array1 = ['one', 'two', 'three'];
// const reversed = array1.reverse();
// console.log('reversed:', reversed);//["three", "two", "one"]

// //it changes the original array.
// console.log('array1:', array1);//["three", "two", "one"]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//toReversed()
//The toReversed() method of Array instances is the copying counterpart of the reverse() method.
//It returns a new array with the elements in reversed order.

// const array1 = ['one', 'two', 'three'];
// const reversed = array1.toReversed();
// console.log('reversed:', reversed);//["three", "two", "one"]

// //it changes the original array.
// console.log('array1:', array1);//['one', 'two', 'three']

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//!Slice
// slice(start)
// slice(start, end)
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
// where start and end represent the index of items in that array. The original array will not be modified.

//Example 1
// const fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];
// const removedFruits = fruits.slice(2,4);
// console.log(removedFruits); //(2) ['orange', 'mango']
// console.log(fruits); //(5) ['apple', 'banana', 'orange', 'mango', 'grape']

//Example 2
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2)); //(3) ['camel', 'duck', 'elephant']
// console.log(animals.slice(2,4)); //(2) ['camel', 'duck']
// console.log(animals.slice(1,5)); //(4) ['bison', 'camel', 'duck', 'elephant']
// console.log(animals.slice(-2));//(2) ['duck', 'elephant']
// console.log(animals.slice(2, -1)); //(2) ['camel', 'duck']

//Example 3
// Using slice, create newCar from myCar.
// const myHonda = {
//     color: "red",
//     wheels: 4,
//     engine: { cylinders: 4, size: 2.2 },
//   };
//   const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
//   const newCar = myCar.slice(0, 2);//  [{…}, 2]

//   console.log("myCar =", myCar);
//   console.log("newCar =", newCar);
//   console.log("myCar[0].color =", myCar[0].color);
//   console.log("newCar[0].color =", newCar[0].color);

//   // Change the color of myHonda.
//   myHonda.color = "purple";
//   console.log("The new color of my Honda is", myHonda.color);

//   console.log("myCar[0].color =", myCar[0].color);
//   console.log("newCar[0].color =", newCar[0].color);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//!Splice
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// splice(start, deleteCount, item0, item1, /* … ,*/ itemN)

//Example1
// let arr=["a", 'b', 'c', 'd', 'e'];
// console.log(arr.splice(2)); //(3) ['c', 'd', 'e']
// console.log(arr);//(2) ['a', 'b']

// arr.splice(-1);
// console.log(arr);//['a']
// arr.splice(1,2);
// console.log(arr);//['a']

// //Example 2
// const fruits1 = ['apple', 'banana', 'orange', 'mango', 'grape'];
// const removedFruits1 = fruits1.splice(2,3);

// console.log(removedFruits1); //(3) ['orange', 'mango', 'grape']
// console.log(fruits1);//(2) ['apple', 'banana']

// /////////////////////////////////////////////////

// const fruits = ['apple', 'banana', 'orange', 'mango'];
// const newFruits = fruits.splice(2, 0);

// console.log(newFruits); // Output: []
// console.log(fruits);

//Example 3
// At position 2, add 2 elements:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);//['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']

//At position 2, remove 2 items:
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.splice(2, 2);
// console.log(fruits);// ['Banana', 'Orange', 'Kiwi']

//Example 4
// This code uses the splice() method to insert the value 'Feb' at index 1 of the months array. The splice() method modifies the original array. The parameters passed to splice() are
// (index, howMany, item1, item2, ...). In this case, index is 1, howMany is 0 (meaning no elements will be removed), and 'Feb' is the item to be inserted at index 1.

// After this operation, the months array becomes ["Jan", "Feb", "March", "April", "June"]. The console.log(months) statement outputs ["Jan", "Feb", "March", "April", "June"], as expected.
// In this code, splice() is used again to replace the element at index 4 of the months array with the value 'May'. The parameters passed to splice() are (index, howMany, item1, item2, ...).
// Here, index is 4, howMany is 1 (one element will be removed), and 'May' is the item to be inserted at index 4.

// After this operation, the months array becomes ["Jan", "Feb", "March", "April", "May"]. The console.log(months) statement outputs ["Jan", "Feb", "March", "April", "May"], as expected.

// So, both operations are correctly performed, resulting in the expected outputs.

/////////////////////////////
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//some()
// The some() method tests whether at least one element in the array passes the test
// implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.
// It doesn't modify the array.

//Example 1
// const array = [1, 2, 3, 4, 5];
// const even = (element) => element % 2 === 0;
// console.log(array.some(even)); //true

// //Example 2
// const array2 = [1, 7, 3, 5];
// const even2 = (element) => element % 2 === 0;
// console.log(array2.some(even2)); //false

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//sort()
//the sort() method is used to sort the elements of an array in place.
//It rearranges the elements of the array based on their Unicode values or a custom sorting function.
//The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted.

const array1 = [1, 30, 4, 21, 100000];
array1.sort((a, b) => a - b);

console.log(array1); //[1, 4, 21, 30, 100000]

//The compare function compares all the values in the array, two values at a time (a, b).
//When comparing 40 and 100, the sort() method calls the compare function(40, 100).
//The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

const arr2 = ["a", "c", "b"];
arr2.sort();
console.log(arr2);

console.log(null > 0, "************"); //false

//To sort the elements in an array without mutating the original array, use toSorted().

//toString()
//The toString() method returns a string with array values separated by commas.
//The toString() method does not change the original array.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.toString();
// console.log(text);//Banana,Orange,Apple,Mango

//Example 2
// const array1 = [1, 2, 'a', '1a'];
// console.log(array1.toString()); //"1,2,a,1a"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//values();
// The values() method returns a new array iterator object that iterates the value of each item in the array.

// const array2 = ['a', 'b', 'c'];
// const iterator = array2.values();

// for (const value of iterator) {
//   console.log(value);
// };
// //a
// //b
// //c

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//with()

// The with() method of Array instances is the copying version of using the bracket notation to change the value of a given index.
// It returns a new array with the element at the given index replaced with the given value.
//Doesn't change the original array
// array.with(index, value)
// const arr = [1, 2, 3, 4, 5];
// const newArr=arr.with(2, 6);
// console.log(newArr);// [1, 2, 6, 4, 5]
// console.log(arr); // [1, 2, 3, 4, 5]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a function that takes an array as input and returns a new array with all falsy values removed. You can use the filter() method and the Boolean function as the filter callback.
// const arr=[1,0,5,null, 6];
// const fn=(a)=>Boolean(a)===true;
// const newArr=arr.filter(fn);
// console.log(newArr);

////////////////////////////////
// Write a function that takes an array of numbers as input and returns a new array with only the even numbers. You can use the filter() method and the modulus operator (%) to achieve this.
// const numbers=[1,22,5,6,8,3,16];
// const isEven=(number)=>number%2===0;

// const filtered=numbers.filter(isEven);
// // filtered.sort();
// console.log(filtered);

// const arr=[50, 85, 44, 16];

// const fn=function(num){
//   return num%2===0
// }
// const filtered=arr.filter(fn);

// console.log(filtered);

// const arr2 = [2, -4, -80, -10, 24];

// const filtered=arr2.filter(arr=>arr>0);
// const avgnumber=filtered.reduce(function(acc,num, i, arr){
//   return acc+num/arr.length
// },0)
// console.log(avgnumber);

// const avgnumber=filtered.reduce(function(acc, cur, i, arr){
//   return acc+cur
// })
// console.log(avgnumber);

// const filtered = arr2
//   .filter(arr => arr > 0)
//   .reduce((acc, num, i, arr) => acc + num / arr.length, 0);
// console.log(filtered);

// const avgPositive = arr2.reduce((acc, cur) => {
//   if (cur > 0) {
//     return acc + cur;
//   }
//   return acc;
// }, 0);

// console.log(avgPositive);

// const numbers=[1,2,3,4];
// const sum=numbers.reduce((acc, num, i, arr)=> acc+num);
// console.log(sum);
