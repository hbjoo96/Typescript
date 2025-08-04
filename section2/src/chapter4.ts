// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "주현빈",
  nickname: "hbjoo",
  birth: "1996.06.10",
  bio: "안녕하세요",
  location: "광주광역시",
};
let user2: User = {
  id: 1,
  name: "김개똥",
  nickname: "Ddong",
  birth: "1999.9.9",
  bio: "반가워요",
  location: "서울특별시",
};

// 인덱스 시그니처
type CountryCodes = {
  //   Korea: string;
  //   UnitedState: string;
  //   UnitedKingdom: string;

  [key: string]: string; // 키와 벨류 값이 규칙성이 있을 때 사용
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
