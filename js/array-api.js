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
  const result = students.map((student) => student.score);
  console.log(result);
}

// 08. check if there is a student with the score lower than 50
{
  console.clear();
  const result1 = students.some((student) => student.score < 50); // 어떤 것이라도 하나 만족되는 것이 있는지 없는지 확인할 때
  const result2 = students.every((student) => student.score >= 50); // 모든 배열의 조건이 맞는지 확인 할 때
  console.log(result1, result2);
}

console.clear();
// 09. compute students' average score
{
  // reduce() :: 우리가 원하는 시작 점부터 모든 배열을 돌면서 어떤 값을 누적할 때 쓰는 것 , 하나의 결과값 반환
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);

  // reduceRight() :: 배열의 제일 뒤에서 부터 시작한다 (순서가 꺼꾸로 호출된다)
}

// 10. make a string containing all the scores
// result

{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// bonus! do Q10 sorted in ascending order
// result should be: '45,66,80,88,90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
