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
export {};
