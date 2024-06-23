// 조건부타입

// 삼항연산자를 이용해서 조건부 타입을만드는 것
type A = number extends string ? string : number; //false이므로 number type이 된다

type ObjA = {
    a: number
} 

type ObjB = {
    a: number;
    b: number;
}

type B = ObjB extends ObjA? number : string; //number타입

//조건부타입은 제네릭과 함께 쓸 때 활용하기 좋다


// 제네릭과 조건부 타입

/* 
예시2
T = number => string
T = string => number

이렇게 만들어보기 
*/

type StringNumberSwitch<T> = T extends number? string : number;

let varA : StringNumberSwitch<number> //string
let varB : StringNumberSwitch<string> //number


//예시3
//공백문자를 모두 빈문자열로 바꿔라
function removeSpaces1(text: string | undefined | null) {
    if(typeof text === "string"){
        return text.replaceAll(" ", ""); // undefined | null를 추가하고 나서는 typeof로 타입을 좁혀줘야함
    } else {
        return undefined;
    }
    
}

let result1 = removeSpaces1('hi im winterlood');
// result1.toUpperCase();// return값이 string | undefined가 되면 문자열 메서드를 사용할 수 없게됨
let result2 = removeSpaces1(undefined);

// 이럴 떈 제네릭과 함께 조건 부 타입을 사용해서 문제를 해결할 수 있음
//
// function removeSpaces2<T>(text: T) : T extends string? string: undefined{
//     if(typeof text === "string") {
//         // 함수내부에서는 조건부타입의 결과가 어떻게 될지 알 수 없기 떄문에 any타입으로 단언해줘서 해결해야하는데
//         // 그렇게되면 어떤 값을 넣어도 any타입이되니까 이런 경우엔 함수 오버로딩을 사용해야한다
//         return text.replaceAll(" ", "") as any; 
//     } else {
//         return undefined as any;
//     }
// }

// 오버로딩 사용시
// 오버로드 시그니처
function removeSpaces2<T>(text: T): T extends string? string: undefined;
// 이렇게하면 구현 시그니처 내부에서 조건부 타입의 결과를 추론할 수 있게 된다.
function removeSpaces2<T>(text: any) {
    if(typeof text === "string") {
        return text.replaceAll(" ", "")  //string을 반환해야한다는 것을 알기 떄문에 이 자리에 null을 넣을 경우 오버로드 시그니처가 문제를 감지해줌
    } else {
        return undefined;
    }
}

let result3 = removeSpaces2('hi im winterlood');

result3.toUpperCase();// 문자열 메서드를 사용할 수 있게됨
let result4 = removeSpaces2(undefined);
