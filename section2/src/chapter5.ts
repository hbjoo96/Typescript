// enum 타입
// 열거형 타입, 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role { // 숫자를 작성하지 않으면 자동으로 0부터 할당, 숫자를 중간에 할당해도 자동으로 할당됨
  ADMIN = 0,
  USER = 1,
  GUEST = 3,
}

enum Language {
  Korean = "ko",
  english = "en",
}

const user1 = {
  name: "주현빈",
  //   role: 0, // 0 <- 관리자
  role: Role.ADMIN,
  Language: Language.Korean,
};
const user2 = {
  name: "홍길동",
  //   role: 1, // 1 <- 일반 유저
  role: Role.USER,
  Language: Language.english,
};
const user3 = {
  name: "아무개",
  //   role: 2, // 2 <- 게스트
  role: Role.GUEST,
  Language: Language.Korean,
};

console.log(user1, user2, user3);
