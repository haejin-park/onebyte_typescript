/* 
함수 타입 정의
*/

// 함수를 설명하는 가장 좋은 방법은 어떤 매개변수를 받고 어떤 결과값을 반환하는지 이야기
// TS -> 어떤 타입의 매개변수를 받고 어떤 타입의 결과값을 반환하는지 이야기
// return에 따라 함수 타입이 추론이되므로 number 타입 함수가 됨
function func(a: number, b: number) {
    return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a:number, b: number) => a + b;

// 함수의 매개변수
// name="이정환하면 " 매개변수 타입은 자동으로 string타입이됨
 function introduce(name = "박해진", age: number, tall?:number) { //필수 매개변수들은 앞에 
    console.log(`name: ${name}`);
    // tall은 undefined일 수도 있으므로 불완전한연산을 하지 못하게 막아주므로 조건문으로 typeof를 통해 타입가드를 써서 타입을 좁혀줘야함
    if(typeof tall === "number"){
        console.log(`tall: ${tall + 10}`);
        
    }
 }

//다른 타입을 인수로 전달하면 에러남
// introduce(1);

introduce("박해진", 175);

// tall생략하면 에러나니까 tall뒤에 ?를 넣어서 선택적 매개변수로 만들면 됨
// introduce("박해진");

// (가변적 인수) 몇개의 파라미터가 전달될지 모를땐
function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => sum += it);
    return sum;
}

getSum(1,2,3);
getSum(1,2,3,4,5);


// 튜플 타입으로 3개만 받을 수 있게 바꿀 수도 있음
function getSum2(...rest: [number, number, number]) {
    let sum = 0;
    rest.forEach((it) => sum += it);
    return sum;
}


getSum2(1,2,3);
// getSum2(1,2,3,4,5);