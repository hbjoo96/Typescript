/*
    타입좁히기
    - 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
      타입을 상황에 따라 좁히는 방법을 이야기
*/
// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // 왼쪽의 값이 오른쪽의 객체인지 물어보는 것
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // value && : value가 있을 때만, "age" in value : value에 age 값이 있냐
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
let person1: Person = {
  name: "주현빈",
  age: 28,
};

console.log(func(11.1234545));
console.log(func("hello"));
console.log(func(null));
console.log(func(person1));
