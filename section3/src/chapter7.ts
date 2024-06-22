/* 
타입 좁히기
조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법을 이야기
*/

type Person = {
    name: string;
    age: number;
}


// 조건문에 따라 타입추론이 달라짐
// value => number: toFixed
// value => string : toUpperCase
// value => Date: getTime
// value => Person: name age살 입니다
function func(value: number | string | Date | null | Person) {

    // typeof 조건문 중괄호 밖에서는 사용불가
    // value.toFixed();
    // value.toUpperCase()
    

    // 타입 가드(typeof 조건문 중괄호 내에서만)
    if(typeof value === "number") {
        console.log(value.toFixed());
    } 
    else if(typeof value === "string") {
        console.log(value.toUpperCase());   
    } 
    // else if(typeof value === "object") { 
    //     console.log(value.getTime()); //매개변수 타입에 null을 추가하면 타입이 Date나 null값이 될 수 있기 때문에 에러가남
    // }
    // Date는 내장된 객체이며 클래스 개념과 유사하게 동작한다. 그러므로 instanceof를 쓸 수 있다
    else if(value instanceof Date) { //왼쪽의 값이 오른쪽의 instance(객체)일 경우 true 아니면 false
        console.log(value?.getTime());
    } 

    // Person은 런타입에 존재하는 클래스나 객체의 인스턴스가 아니라 단순히 객체 구조를 기술하는 것이기 때문에 instanceof는 쓸 수 없다
    // else if(value instanceof Person){ //Person' only refers to a type, but is being used as a value here.

    // }
    // 객체타입일 떈 in을 쓸 수있다
    // value가 null이 아님을 밝혀줘야하기 떄문에 value && 을 적어줘야함
    else if ( value && "age" in value) {
        console.log(`${value.name}은  ${value.age}살 입니다.`);
        
    }
}

