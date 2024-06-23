// infer
// inference 추론하다의 약자

// 조건부 타입 내에서 특정 타입 추론하는 문법

// 예제1
type FuncA = () => string;  //매개변수가 없고 반환값이 string인 함수타입
type FuncB = () => number;  //매개변수가 없고 반환값이 number인 함수타입

// 함수의 반환타입만 가져오고 싶을 때
// 함수 반환 타입 string이면 string 아니면 never
type ReturnType<T> = T extends () => string? string: never; //string으로 고정했기 때문에 B가 never가 되는 문제가 생김

type A = ReturnType<FuncA>; //string
type B = ReturnType<FuncB>; //never

//이 문제를 해결하기위해 infer를 사용함 => infer R은 타입 변수로 생각하면 됨 => FuncA, FuncB각 타입에 따라 조건식이 참이 되게 만듬
// () => infer R가 Super타입이 되면 되므로 FuncA일 땐 R은 string이 되고 FuncB일 땐 number가 됨
// 하지만 number를 넣어버리면 추론이 불가해져서 조건식이 거짓으로 평가됨(R이 any로 추론된다하더라도 () => any가 number의 슈퍼가 될 수 없으므로)
type ReturnType2<T> = T extends () => infer R? R: never; 


type A2 = ReturnType2<FuncA>; //string
type B2 = ReturnType2<FuncB>; //number
type C2 = ReturnType2<number>; //never

// 예제2
/* 
PromiseUnpack의 역할 => promise타입의 결과값 타입만 떼오기

요구사항
조건1 promise타입이야한다
조건2 promise타입의 결과값 타입을 반환해야한다
*/

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
type PromiseA = PromiseUnpack<Promise<number>>;
//number로 만들기
type PromiseB = PromiseUnpack<Promise<string>>;
//string로 만들기

