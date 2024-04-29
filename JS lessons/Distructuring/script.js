"use strict"; 
//Array destructuring 
//Example 1
const arr=[
    "Hello", 
    "World"
];
//destructuring assignment 
const [first, second]=arr;
// console.log(first);
// console.log(second);

//Example 2
// const colors=["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange"];

// const [color1, color2, color3]= colors;

// console.log(color1);
// console.log(color2);
// console.log(color3);

//Example 3
// const colors=["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange"];

// const [color1, color2, , color4]=colors;
// console.log(color1, color2, color4);


//Array destructuring and Rest operator 
// const colors=["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange"];

// const[a,b, ...others]=colors;
// console.log(a);
// console.log(b);
// console.log(others);


//Array Destructuring and Default values 
// let x, y;

// [x=50, y=70]=[100];
// console.log(x);//100
// console.log(y);//70

//Swapping Variables 
// let x=100, y=200;
// [x,y]=[y,x];
// console.log(x);//200
// console.log(y);//100

//Parsing returned array from functions
// function array(){
//     return [100, 200, 300]
// }

// let [x, y, z]=array();
// console.log(x);//100
// console.log(y);//200
// console.log(z);//300

////////////////////////////////////////////////////////////////////////

//OBJECT destructuring

// const student={
//     name:"John",
//     position:"First", 
//     age:25
// }

// const {name, age, position}=student;
// console.log(name);//John
// console.log(position);//First
// console.log(age);//25

// Object destructuring and default values

// const {x=100, y=200}={x:500};
// console.log(x);//500
// console.log(y);//200

//Like this y will be undefined 
// const {x, y}={x:500};
// console.log(x);//500
// console.log(y);//undefined 

//Assigning new variable names

// const num={x:100, y:200};
// const{x:new1, y:new2}=num;
// console.log(new1);
// console.log(new2);

//Assignment without declaration

// let name, division;

// ({name, division}={name:'Ani', division:"First"});
// console.log(name);
// console.log(division);
// In the above example, it is to be noted that the use of parentheses () 
// around the assignment statement is mandatory when using variable destructuring assignment 
// without a declaration. Otherwise, the syntax will be invalid.


//Object destructuring and rest operator
// let {a, b, ...args} = {a: 100, b: 200, c: 300, d: 400, e: 500}  
// console.log(a);   
// console.log(b);   
// console.log(args);  

//////////////////////////////////////////////////////////////////////
//EXERCISE 1
// Rewrite the code below to use array destructuring instead of assigning each value to a variable.
// let item = ["Egg", 0.25, 12];

// let name = item[0];
// let price = item[1];
// let quantity = item[2];

// console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);

// //Solution 
// const  item = ["Egg", 0.25, 12];

// const [name, price, quantity]=item;

// console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);

/////////////////////////////////////////////////////////
//EXERCISE 2
// //Rewrite the code below to assign each number to the right variable.
// let numbers = [3, 5, 4, 2, 6, 1];

// let [one, two, three, four, five, six] = numbers;

// console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);
// //Solution 
// let numbers2=[3, 5, 4, 2, 6, 1];

// let [three, five, four, two, six, one ]=numbers2;
// console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);

///////////////////////////////////////////////////////
//EXERCISE 3
// We have an object called 'user'.
// Write the destructuring assignment that reads:
// - 'name' property into the variable 'name'.
// - 'years' property into the variable 'age'.
// - 'isAdmin' property into the variable 'isAdmin' (false, if no such property)

//   let user = { name: "John", years: 30 };
//   let {} = user;
//   console.log(name); // John
//   console.log(age); // 30
//   console.log(isAdmin); // false

  // //Solution 
//   const user = { name: "John", years: 30 };

//   const {name, years:age, isAdmin="false"}=user; 

//   console.log(name);
//   console.log(age);
//   console.log(isAdmin);

/////////////////////////////////////////////////////////
//EXERCISE 4

// Rewrite the code below to use array destructuring instead of assigning each value to a variable.

//   let person = [12, "Chris", "Owen"];
//   let firstName = person[1];
//   let lastName = person[2];
//   let age = person[0];

//   console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);

// //Solution 

// const person=[12, "Chris", "Owen"];

// const[age, firstName, lastName]=person;

// console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);

///////////////////////////////////////////////////////
//EXERCISE 5

//Using Array Destructuring get the last name from the array. 

//   const students = ['Christina', 'Jon', 'Alexandare'];
//   const [, , lastName] = students;
//   console.log(lastName);



////////////////////////////////////////////////////////
//EXERCISE 5
// Using Array Destructuring get all of the names from this Nested Array

//   const moreStudents = [
//     'Chris', 
//     ['Ahmad', 'Antigoni'], 
//     ['Toby', 'Sam']
//   ];
//   const [student1, [student2, student3], [student4, student5]] = moreStudents;
//   console.log(student1, student2, student3, student4, student5);
