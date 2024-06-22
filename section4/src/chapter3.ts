/*  
함수 오버로딩 -> js 불가, ts 가능
하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
-> 하나의 함수 func
-> 모든 매개변수의 타입 number
-> ver1. 매개변수 1개 => 이 매개변수에 20곱한 값 출력
-> ver2. 매개변수 3개 => 이 매개변수들을 다 더한 값을 출력
*/

// 오버로드 시그니처
function func(a:number): void;
function func(a: number, b:number, c: number): void;

// 실제 구현부( = 구현 시그니처) (실제 구현부가 생기면 오버로드 시그니처에 발생했던 오류가 없어짐) 
//  function func(){}

// 만약에 실제 구현부를 이렇게 구현할 경우 오버로드 시그니처 개수에 차이가 있다면 선택적 프로퍼티로 모든 오버로드 시그니처가 의미있게 만들어줘야함
function func(a: number, b?: number, c?:number) {
    if(typeof b === 'number' && typeof c ==='number'){ //b,c를 바꾸면 없을 수도 있는 값이니까 조건부에 typeof로 해야 에러가 안남
        console.log(a + b + c);
    } else {
        console.log(a * 20);
    }
}

//  오버로드 시그니처를 만들어놓으면 함수 호출 시 오버로드 시그니처의 인수 개수와 타입에 따른다
//  func(); //에러
 func(1);
//  func(1,2); //에러
 func(1,2,3)
