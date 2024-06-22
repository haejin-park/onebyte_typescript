// 선언 합침 declaration merging

// type은 동읠한 이름일 경우 문제 발생
// type Person = {
//     name: string;
// };

// type Person = {
//     age:number;
// }

//interface는 동일한 이름도 가능. 왜냐하면 동일한 이름의 인터페이스는 결국 다 합쳐지기 때문
interface Person {
    name: string;
};

interface Person {
    name: string ; //만약 똑같은 프로퍼티를 중복정의할 경우엔 속성의 타입도 똑같이 해야 에러가 안남
    age: number;
}

// 헷갈리지말것 -> 확장한 인터페이스 속성은 같은 속성 타입과 같지 않고 sub타입이기만 하면 되었음
interface Developer extends Person {
    name : "hello";
}

// 각각 인터페이스의 속성이 합쳐진 객체 타입으로 정의할 수 있음
const person : Person = {
    name: "",
    age: 27,
}

// 모듈 보강
interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c:string;
}

/*
보통 인터페이스는 이미 만들어져있는걸 가져다 쓰기 때문에 속성을 마음대로 추가할 수 없다. 
그럴 떈 동일한 이름의 인터페이스를 만든 뒤 추가할 속성을 넣으면 된다. 이를 모듈을 보강이라 한다 
*/
const lib : Lib = {
    a: 1,
    b: 2,
    c: "hello"
}