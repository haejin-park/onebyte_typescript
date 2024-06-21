//타입 추론(초기값 기준)

// 매개변수 타입도 적어주지 않으면 오류 발생하니 적어줘야함
// function func(param) {}

//마우스를 올리면 값을 추론해줌
let a = 10;
let b = "hello";
let c =  {
    id: 1,
     name: "이정환",
     profile: {
        nickname: "winterlood",
     },
      urls : ["https://winterlood.com"]
};

let {id, name, profile} = c;
let [one, two, three] = [1, "hello", true];

//함수 반환값이나 매개변수도 추론해줌
function func(message = "hello") {
    return "hello";
}


// 초기값을 생략할경우 any로 추론됨
let d;

// any타입의 진화(암묵적 any타입을 만들면 타입을 진화시킬 수 있음)
// 숫자를 넣어주면 number로 추론됨
d = 10;
d.toFixed();
// 문자열을 넣어주면 string으로 추론됨
d = "hello"
d.toUpperCase();
// 숫자타입에서 쓰던 메서드는 못쓰게됨
// d.toFixed();

const num = 10;
const str = "hello";
//string, number둘다 가능한 유니온 타입으로 추론됨 (string | number)[]
let arr = [1, "string"];
