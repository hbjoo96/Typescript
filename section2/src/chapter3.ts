// odject
// 객체 리터럴 타입
let user: { id?: number; name: string } = {
  // 물음표를 붙이면 있어도 되고 없어도 되고
  id: 1,
  name: "주현빈",
};

let dog: { name: string; color: string } = {
  name: "백구",
  color: "white",
};

user.id;
dog.name;

user = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string; // 수정할 수 없게
} = {
  apiKey: "MY API KEy",
};
