/*
    기본 타입간의 호환성
*/

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/*
    객체 타입간의 호환성
    -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
*/

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "백구",
  color: "white",
  breed: "광주",
};

animal = dog; // 업캐스팅

// dog = animal; // 다운캐스팅

// animal은 슈퍼타입 dog은 서브타입

/*
    초과 프로퍼티 검사
    - 객체 타입의 프로퍼티만 사용해야함
*/
let animal2: Animal = {
  name: "얼룩말",
  color: "white&black",
  //   breed: "사바나",
};

// 아니면 이런식으로 사용
let animal3: Animal = dog;
