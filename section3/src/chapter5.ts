/*
    타입 추론
    - 추론할 정보가 있으면 추론하고 아니면 안함
*/

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "주현빈",
  profile: {
    nickname: "hbjoo",
  },
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

let d;
d = 10;
d; // number타입으로 추론됨

d = "hello";
d; // string타입으로 추론됨

// 리터럴 타입으로 나옴
const num = 10;
const str = "hello";

let arr = [1, "string"];
