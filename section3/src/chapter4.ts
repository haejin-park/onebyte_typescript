/* 
    대수타입
    여러개의 타입을 합성해서 새롭게 만들어낸 타입
    합집합 타입과 교집합 타입이 존재한다.
*/

// 1. 합집합 - Union타입
// 숫자, 문자열, boolean 타입 둘다 가능해짐
let a : string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr : (number | string | boolean)[] =  [1, "hello", true];

type Dog = {
    name: string;
    color: string;
}

type Person = {
    name:string;
    language:string;
};

// 별칭도 union가능
type Union1 = Dog | Person

let union1 : Union1 = {
    name: "",
    color: "",
};

let union2 : Union1 = {
    name : "",
    language: "",
}

let union3 : Union1 = {
    name: "",
    color: "",
    language: ""
}

// 교집합을 갖는 관계 (합집합에 포함이 되지 않으므로 에러가 발생)
// let union4 : Union1 = {
//     name: "",
// }

// 2. 교집합 타입 - intersection타입

// 주로 never타입이 됨 -> &연산자로 여러개의 타입 (주로 객체 타입에 많이 사용됨)
let variable : number & string;

type Intersection = Dog & Person;
//  교집합 타입은 프로퍼티 하나라도 빼먹으면 안된다
let intersection1  : Intersection = {
    name: "",
    color: "",
    language: "",
}