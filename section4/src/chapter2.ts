/* 
함수 타입의 호환성
특정 함수 타입을 다른 함수 타입으로 취급해도 객찮은지 판단

체크리스트
1. 반환값의 타입이 호환되는가
2. 매개변수의 타입이 호환되는가
*/

// 기준1. 반환값이 호환되는가(업캐스팅은 가능, 다운캐스팅은 불가)
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;
a = b;

//number리터럴에 number는 다운캐스팅이라 할당불가
// b = a; 

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
// 매개변수는 반대로 업캐스팅은 안되고 다운캐스팅은 가능
type C = (value: number) => void;
type D = (value: 10) => void;
let c: C = (value) => {}
let d: D = (value) => {}

// c = d; 
d = c;

// 매개변수가 객체 타입인 예시를 보면 이해하기가 쉽다
type Animal = {
    name: string;
}
type Dog = {
    name: string;
    color: string;
}
let animalFunc = (animal: Animal) => {
    console.log(animal.name);
}
let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
}

// animalFunc = dogFunc //animal이 super타입이니까 매개변수가 업캐스팅 되는 게 안된다

// 위의 내용을 코드로 풀 경우

let testFunc1 = (animal: Animal) => {
    console.log(animal.name);
    // console.log(animal.color);// Animal형식에 color가 없음
}

dogFunc = animalFunc
// 위의 내용을 코드로 풀 경우
let testFunc2 = (dog: Dog) => {
    console.log(dog.name);//Animal도 가지고 있는 property이므로 가능
}

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a,b) => {}
let func2: Func2 = (a) => {}
func1 = func2
// func2 = func1 //타입이 같은 매개변수일 때, 매개변수가 더 많은 함수는 할당할 수 없다