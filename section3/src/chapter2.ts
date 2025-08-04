/* 
    Unknown 타입
    - 모든 타입의 슈퍼 타입 / 모든 값을 집어넣을 수 있음 (업캐스팅 가능)
*/

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
}

/* 
    Never 타입
    - 모든 타입의 서브 타입 / 모든 곳에 넣을 수 있음
*/

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }
  let num: number = neverFunc();
  let string: string = neverFunc();
  let bool: boolean = neverFunc();

  // 이건 안됨
  //   let never1: never = 10;
  //   let never2: never = "string";
  //   let never3: never = true;
}

/*
    void 타입

*/

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }
  let voidVar: void = undefined;
}

/*
    any 타입
    - 모든 타입의 슈퍼타입, 서브타입
    - 타입 계층도를 무시하는 치트 타입 / 관계도를 무시하기 때문에 사용을 지양해야
    - 단, never까지 다운캐스팅은 안됨
*/
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  anyVar = unknownVar;
  undefinedVar = anyVar;
}
