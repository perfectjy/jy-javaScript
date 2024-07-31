"use strict";

// 1. Class declarations

class Person {
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name, ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // 값을 리턴
  get age() {
    return this._age;
  }
  // 값을 설정
  set age(value) {
    // if(value < 0) {
    // throw Error('age can not be negative');
    //}

    this._age = value < 0 ? 0 : value;
    //this.age = value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);
