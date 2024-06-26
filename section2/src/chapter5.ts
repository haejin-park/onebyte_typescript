//enum타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
//숫자 자동 할당 됨, 10부터 시작하면 아래 속성은 자동으로 +1, 중간 할당도 가능
//숫자형 enum
enum Role {
    ADMIN,
    USER=10,
    GUEST
}

enum Language {
    korean  = "ko",
    english = "en"
}

const user1 = {
    name: "이정환",
    role: Role.ADMIN, // 0 관리자
    language: Language.korean,

}
const user2 = {
    name: '홍길동',
    role: Role.USER // 10 일반유저
}
const user3 = {
    name: "아무개",
    role: Role.GUEST // 11 게스트
}
console.log(user1,user2,user3);

//enum은 컴파일결과 사라지지않고 자바스크립트에서 객체로 사용됨
