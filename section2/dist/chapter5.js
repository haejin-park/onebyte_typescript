//enum타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
//숫자 자동 할당 됨, 10부터 시작하면 아래 속성은 자동으로 +1, 중간 할당도 가능
//숫자형 enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 10] = "USER";
    Role[Role["GUEST"] = 11] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "이정환",
    role: Role.ADMIN, // 0 관리자
    language: Language.korean,
};
const user2 = {
    name: '홍길동',
    role: Role.USER // 0 일반유저
};
const user3 = {
    name: "아무개",
    role: Role.GUEST // 0 게스트
};
console.log(user1, user2, user3);
export {};
//enum은 컴파일결과 사라지지않고 자바스크립트에서 객체로 사용됨
