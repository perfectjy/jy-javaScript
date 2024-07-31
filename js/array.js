"use strict";

// 1.
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["사과", "바나나", "포도"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

console.clear();
// 3. Looping over an array
// print all fruits

// a. for
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.push("딸기", "복숭아");
console.log(fruits);

fruits.pop("복숭아");
console.log(fruits);

fruits.unshift("딸기", "복숭아");
console.log(fruits);

fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position

fruits.push("레몬");
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);

fruits.splice(1, 1, "파인애플", "멜론");
console.log(fruits);
// index로 접근하거나 pop,push 사용하는게 속도면에서 빠르다 (shift,unshift 보다!)

// combine tow arrays
const fruits2 = ["감", "토마토"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("레몬")); // 있으면 해당 인덱스 출력
console.log(fruits.indexOf("수박")); // 없으면 -1

// includesy 
console.log(fruits.includes("레몬")); // 있으면 true
console.log(fruits.includes("수박")); // 없으면 false

// lastIndexOf
console.clear();
fruits.push("사과");
console.log(fruits);
console.log(fruits.indexOf("사과")); // 배열에서 첫번째에 있는 것을 출력
console.log(fruits.lastIndexOf("사과")); // 배열에서 마지막에 있는 것을 출력
