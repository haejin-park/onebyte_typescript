// 타입 변수 응용하기

// 첫번째 사례
function swap1<T>(a: T, b: T) {
    return [b,a];
}

//타입변수가 하나일 떄 전달하는 인수를 첫번쨰는 string, 두번쨰는 number로 하면 string으로 추론이 되므로 에러가난다. 
// const [a,b] = swap("1",2);

//이를 해결하기 위해서는 타입변수를 하나 더 적어줘야한다. 
function swap2<T, U>(a: T, b: U) {
    return [b,a];
}

const [a,b] = swap2("1",2);

//두번째 사례

/* 
이렇게 하면 에러가 발생한다. 왜냐하면 호출 전이라 type을 잘 모르기 떄문이다. 
그래서 데이터 타입이 unknown이 되고, undefined타입에 배열 인덱스를 쓸 수 없기 떄문이다. 그렇기 때문에 num, str 타입도 암묵적으로 any타입이 되어버린다

Element implicitly has an 'any' type because expression of type '0' can't be used to index type 'unknown'.
Property '0' does not exist on type 'unknown'.
*/
// function returnFirstValue<T>(data:T) {
//     return data[0];
// }

// 이럴 떈 T배열 타입으로 바꿔주면 된다
function returnFirstValue<T>(data:T[]) {
    return data[0];
}

let num = returnFirstValue([0,1,2]);

let str = returnFirstValue(["hello", "mynameis"]);

// 첫번쨰는 number, 나머지는 string으로 하게 될 경우 string | number이렇게 유니온 타입이 되어버린다. 왜냐하면 타입스크립트는 첫번쨰 요소가 어떤 타입인지 모르기 떄문이다
let union = returnFirstValue([1, "hello", "mynameis"]);

//number, string 이 순서로 하고 싶으면 함수 매개변수 타입을 튜플 타입으로 만들면 된다 
function returnFirstValue2<T>(data:[T,...unknown[]]) {
    return data[0];
}
// T의 값을 꺼내서 반환하는거기 떄문에 변수의 타입도 number가 된다
let num2 = returnFirstValue2([1, "hello", "mynameis"]);

// 세번쨰 사례

function getLength(data:any) {
    return data.length;
}

let var1 = getLength([1,2,3]); //3
let var2 = getLength("12345"); //5
let var3 = getLength({length:10}); //10
// 숫자값을 넣었을 때 오류가 감지되지 않는다.
let var4 = getLength(10);    


/* 
 이 문제를 해결하기위해 legnth가 존재하는 값만 전달가능하게 만들기 
=> 타입변수 T의 타입을 제한하기
=> number타입의 프로퍼티 length를 가지고 있는 객체를 확장하는 타입으로 T를 제한
*/

function getLength2<T extends {length : number}>(data: T){
    return data.length;
}

let genericVar1 = getLength2([1,2,3]); //3
let genericVar2 = getLength2("12345"); //5
let genericVar3 = getLength2({length:10}); //10
// 해당 인수를 {length : number}형식의 매개변수에 할당할 수 없어 에러 발생
// let genericVar4 = getLength2(10);    
// let genericVar4 = getLength2(undefined);    
// let genericVar4 = getLength2(null);    


// 인터페이스를 생각하면 쉽게 이해할 수 있다 (아래와 같이 확장하면 interfaceB를 포함하는 객체는 length프로퍼티를 무조건 가지고 있어야한다)
// 그렇기 떄문에 getLength2의 타입변수 T도 length가 존재하는 값만 받을 수 있게된다
interface InterfaceA {
    length: number;
}
interface InterfaceB extends InterfaceA {}


