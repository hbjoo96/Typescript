// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "world"];

let bollArr1: boolean[] = [true, false, true];
let bollArr2: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let nultiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
/*
tup1 = [1, 2, 3]
tup1 = ["1", "1"]
-> 안됨
*/

let tup2: [number, string, boolean] = [1, "hello", true];

// tup1.push(1);
// tup1.pop();
// tup1.pop();
// tup1.pop();

const users: [string, number][] = [
  ["김아무개", 1],
  ["이아무개", 2],
  ["박아무개", 3],
  ["최아무개", 4],
  //   [5, "정아무개"],
];
// 튜플을 사용하면 값을 잘못넣지 않도록 방지할 수 있음
