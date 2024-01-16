"use strict";

// false : 0, -0, '', null, undefined
// true  : -1, 'hello', []

// let num = 9; // undefined
// if (num) {
//   console.log("true!");
// }

// // && 연산자는 앞에 true여야 뒤에 조건이 실행된다.
// num && console.log(num);

// let obj = {
//   name: "ellie",
// };
// if (obj) {
//   console.log(obj.name);
// }

// obj && console.log(obj.name);

class Counter {
  constructor(runEveryTimes) {
    this.counter = 0;
    this.callback = runEveryTimes;
  }
  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
    }
  }
}

function printSomething(num) {
  console.log(`Wow! ${num}`);
}

function alertNum(num) {
  alert(`Wow! ${num}`);
}

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

printCounter.increase();
alertCounter.increase();

////////////////////////////////////////////////////////////////////////

const countDown = {
  body: ".counter",
  time: 5,
  timer() {
    const counter = document.querySelector(countDown.body);

    let currentTime = countDown.time;
    counter.innerHTML = String(currentTime);

    if (currentTime > 0) {
      setTimeout(() => {
        countDown.time--;
        countDown.timer();
      }, 1000);
    }
  },
};
countDown.timer();
