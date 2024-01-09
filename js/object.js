"use strict";

// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

// with javascript magic ( dynamically typed language )
// can add properties later

ellie.hasJob = true;
console.log(ellie.hasJob);
//delete ellie.hasJob;

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie["name"]); // O
console.log(ellie[name]); // X

// 코딩할 땐 . 을 사용
// 실시간(런타임)

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, "name");
printValue(ellie, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
//const person4 = makePerson("ellie", 30);
const person4 = new Person("ellie", 30);

console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// function makePerson(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// 5. in operator : property existence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);

// 6. for..in vs for..of
// for( key in obj)
console.clear();

for (let key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
const user = { name: "ellie", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// 1번
// const user4 = {};
// Object.assign(user4, user);

// 2번
// const user4 = Object.assign({}, user);
// console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
