// any
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;
// anyVar = "hello";

// anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase(); // 검사를 다 통과시켜 버려 오류도 통과됨
// anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if (typeof unknownVar === "number") {
  num = unknownVar;
}
