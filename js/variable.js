"use strict";

let globalName = "global name";
{
  let name = "ellie";
  console.log(name);

  name = "jiyeon";
  console.log(name);
}
console.log(name);
console.log(globalName);

// object, real-life object,
const ellie = {
  name: "ellie",
  age: 30,
};
console.log(`이름 : ${ellie.name}, 나이 : ${ellie.age}`);

// 5. Dynamic typing : dynamically typed language
let text = "hello";
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = "7" + 5;
console.log(`value : ${text}, type : ${typeof text}`);
text = "8" / "2";
console.log(`value : ${text}, type : ${typeof text}`);

// 7. Equality
// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(null === undefined);

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i}`);
//   }
//   continue;
// }

// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic....
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

const simplePrint = () => console.log("aaaa");
const add = (a, b) => a + b;

// const add = (a, b) => {
//   return a + b;
// };

// fun quiz time!!
// function calculate (command, a, b)
// command : (add , substract, divide, multiply, remainder)

const calculate = (command, a, b) => {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
  }
};

console.log(calculate("substract", 10, 2));
