// any
// 특정 변수의 타입을 우리가 확실히 모를 때
// 초기값에대한 타입이 자동추론되서 원래 에러가 발생하는데 any는 어떤 타입이든지 넣을 수 있음
// any는 사용을 최대한 지양하는게 좋음
let anyVar :any = 10;
anyVar = "hello";
anyVar = true;
anyVar = [];
anyVar = {};
anyVar = () => {};
anyVar.toUpperCase();
anyVar.toFixed();
let num: number = 10;
num = anyVar;

// unknown
// unknown타입의 변수에는 아무 타입의 값이나 저장할 수는 있지만 반대로 할당, 연산 x
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};
// num = unknownVar;
// unknownVar.toUpperCase();


// 조건문으로 정제해서 사용은 가능 
if(typeof unknownVar === 'number') {
    num = unknownVar;
}