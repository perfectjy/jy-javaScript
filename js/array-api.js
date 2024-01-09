"use strict";

// 01. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(", ");
  console.log(result);
}

// 02. make an array out of a string
{
  const fruits = "사과, 키위, 바나나, 체리";
  const result = fruits.split();
  console.log(result);
}

// 03. make this array look like this : [5,4,3,2,1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// 04. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const array2 = array.slice(2);
  console.log(array);
  console.log(array2);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 32, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// 05. find a student with the score 90
{
  const result = students.find(function (student, index) {
    //console.log(student, index);
    return student.score === 90;
  });
  console.log(result);
}

// 06. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// 07. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
}
