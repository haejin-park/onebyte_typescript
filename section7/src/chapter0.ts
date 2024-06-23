/* 제네릭 */

//func의 매개변수 타입을 any로 할 경우 => return값을 기준으로 타입이 추론되므로 어떤 인자를 받건 any가된다 => 어떤 타입의 메서드도 사용할 수 있게 된다
function func1 (value: any){  
    return value;
}

let num1 = func1(10);
num1.toFixed();
num1.toUpperCase();
let bool1 = func1(true);
let str1 = func1("string");


//func의 매개변수 타입을 unknown으로 할 경우 => 어떤 연산도 할 수 없는 전체 집합이기 때문에 typeof 조건문으로 타입을 좁혀야 메서드를 사용할 수 있게된다
function func2 (value: unknown){  
    return value;
}

let num2 = func2(10);
if(typeof num2 === "number") {
    num2.toFixed();
}

let bool2 = func2(true);
let str2 = func2("string");

// 이럴 떈 제네릭을 사용하는게 좋다 
// 제네릭을 사용 할 경우 => 함수의 인수에 따라 반환값을 가변적으로 정할 수 있다 => 각 변수에 마우스를 올려보면 타입 추론이 함수 호출 시 인자에 따라 바뀐다
// 타입 변수 <T> => 타입을 저장하는 변수. 인수의 타입에 따라 달라짐, 매개변수 타입 T, 함수 반환 타입 T
function func3<T> (value: T): T { 
    return value;
}

let num3 = func3(10);
num3.toFixed();
let bool3 = func3(true);
let str3 = func3("string");
// number 배열
let nrr = func3([1,2,3]);
//튜플 타입 하고싶을 때
//방법1 - 타입 단원 사용
let arr1 = func3([1,2,3]) as [number, number, number];
//방법2 - 함수 호출 시 함수 이름 뒤 꺽새를 만들어서 넣고싶은 타입 할당
let arr2 = func3<[number, number, number]>([1,2,3]);