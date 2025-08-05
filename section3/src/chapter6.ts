/*
    타입 단언
*/

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "주현빈";
person.age = 28;

console.log(person);

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "백구",
  color: "white",
  breed: "진도",
} as Dog;

/* 
  타입 단언의 규칙
  값 as 단언 <- 단언식
  A as B
  A가 B의 슈퍼타입이거나
  A가 B의 서브타입이어야 함
*/

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as unknown as string;

/*
  const 단언
  - readonly로 단언됨
*/
let num4 = 10 as const;

let cat = {
  name: "나비",
  color: "yellow",
} as const;

/* 
  Non Null 단언
*/

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "주현빈",
};

const len: number = post.author!.length; // null이거나 undefined이 아닐거라고 단언한 것
