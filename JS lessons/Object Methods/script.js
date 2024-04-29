"use strict";
//Object.assign()
//Example 1 Merging multiple objects into one:
// const target={};
// const source1={a:1};
// const source2={b:2};
// const source3={c:3};
// Object.assign(target, source1, source2, source3);
// console.log(target);//{a: 1, b: 2, c: 3}

//Example 2 Cloning an object:
// const source = { a: 1, b: 2 };
// const clone=Object.assign({}, source);
// console.log(clone);
// clone.foo=3;
// console.log(source);//{a: 1, b: 2}
// console.log(clone);//{a: 3, b: 2}


//Example 3: Modifying an existing object:
// const target={a:1, b:2};
// const source={b:3, c:4};
// Object.assign(target, source);
// console.log(target); //{a: 1, b: 3, c: 4}


// Example 4: Adding properties with computed keys:
// const target={};
// const key='dynamicKey';
// const value='dynamicValue';
// Object.assign(target, {[key]:value});
// console.log(target);//{dynamicKey: 'dynamicValue'}

// Example 5: Combining objects and overriding properties:
// const target = { a: 1, b: 2 };
// const source1 = { b: 3, c: 4 };
// const source2 = { c: 5, d: 6 };
// Object.assign(target, source1, source2);
// console.log(target); // { a: 1, b: 3, c: 5, d: 6 }

/////////////////////////////////////////////////////////
// Object.create()
// const person = {
//     greet() {
//       console.log('Hello!');
//     },
//     age:12
//   };
  
//   const john = Object.create(person);
//   john.name = 'John';
//   john.greet(); // Hello!
//   console.log(person);
//   console.log(john);

/////////////////////////////////////////////////////////
// Object.entries()
// //Example 1
// const object1={
//     a:'string',
//     b:42
// };

// for(const [key, value] of Object.entries(object1)){
//     console.log(`${key}: ${value}`);
// }
//a: string
//b: 42

// console.log(Object.entries(object1));//(2) [Array(2), Array(2)]

//Example 2
// const person={
//     name:'Roger',
//     age:30
// }
// const entries=Object.entries(person);
// console.log(entries); //(2) [Array(2), Array(2)]

/////////////////////////////////////////////////////////////////////
//Object.freeze()

// const obj={
//     prop:42
// };
// Object.freeze(obj);

// obj.prop=33; //error (with strict mode)
// console.log(obj.prop);

//Example 2
// const person = {
//     name:'Roger',
//     age:30
// };
// const frozenObj=Object.freeze(person);
// frozenObj.name='Nadal';
// console.log(frozenObj);
// //With strict mode -error 
// //Without - {name: 'Roger', age: 30}

//////////////////////////////////////////////////////////////////////////////////////

// Object.fromEntries()
// const entries = new Map([
//     ['foo', 'bar'],
//     ['baz', 42]
//   ]);
  
//   const obj = Object.fromEntries(entries);
//   console.log(obj);//{ foo: "bar", baz: 42 }

  ///////////////////////////////////////////////////////////////////////////
  //Object.keys()

//   const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
//   };
//   console.log(Object.keys(object1)); // ["a", "b", "c"]

  ////////////////////////////////////////////////////////////////
  //Object.values()
//   const object2 = {
//     a: 'somestring',
//     b: 42,
//     c: false
//   };
//   console.log(Object.values(object2));//["somestring", 42, false]