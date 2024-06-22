// 함수 타입 표현식  function type expression

// const add = (a: number, b: number) : number => a + b

// 이렇게 타입별칭으로 타입을 정해주면 일일이 매개변수와 함수의 타입을 적어주지 않아도된다
// type Add = (a: number, b: number) => number;
// const add:Add = (a,b) => a + b

// 다양한 연산함수에서 매개변수와 함수 타입이 같을 때 함수 타입 표현식을 사용해서 중복을 줄여줄 수 있다
type Operation = (a: number, b: number) => number;
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation  = (a,b) => a * b;
const divide: Operation  = (a, b) => a / b;

// Operation대신에 표현식만 붙여도된다 
// const add: (a: number, b: number) => number = (a, b) => a - b;


// 함수 호출 시그니처(콜 시그니처)
// 함수 타입을 분리해서 정의하는 방식(객체 타입처럼 {}안에 매개변수와 반환값타입 작성)
type Operation2 = {
    (a:number, b:number): number;
    // 호출시그니처 사용할 땐 프로퍼티를 추가로 정의할 수 있다
    name:string;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2  = (a,b) => a * b;
const divide2: Operation2  = (a, b) => a / b;

// 함수 호출하듯이 쓸 수 도 있고, .표기법으로 객체 사용하듯이 사용할 수 있다
add2(1,2);
add2.name