//func안에서는 User라는 타입을 다르게 정의 할 수 있다
function func() {
}
//타입 별칭으로 중복 제거
let user1 = {
    id: 1,
    name: "이정환1",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시"
};
let user2 = {
    id: 1,
    name: "이정환2",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시"
};
let contryCodes = {
    Korea: 'ko',
    UnitedState: "us",
    UniterdKingdom: "uk"
};
//인덱스 시그니처 타입은 규칙을 위반하지만 않으면 모두 허용
//그래서 빈객체 넣었을 때 오류가 안나므로 korea객체 속성을 반드시 가지도록 하게 하려면 이 속성의 타입을 추가해야함. 그러면 해당 속성을 반드시 가지도록 만들 수 있음
let countryNumberCodes = {
    Korea: 410
};
export {};
