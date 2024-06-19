// 배열 
let numArr:number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "winterlood"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr:(number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의 하는 방법
let doubleArr: number[][] = [
    [1,2,3],
    [4,5]
]

// 튜플
// 길이와 타입이 고정된 배열
let tup1:[number, number] = [1, 2];
// tup1 = [1,2,3] //길이 할당 불가 
// tup1=["1","2"] //속성 할당 불가

let tup2:[number,string,boolean] = [1, "2", true];
// tup2=["2",2,true] //속성의 순서가 다르면 할당 불가

//push, pop둘다 가능
//하지만 길이 제한이 발생하지 않으므로 주의하여 사용해야함
tup1.push(1) 
tup1.pop();
tup1.pop();
tup1.pop();

//튜플이 유용한 예

//이차원배열의 유저 정보
//인덱스별 순서와 위치가 헷갈릴 때 잘못쓰는 걸 방지
const users: [string, number][] = [
    ["박해진1", 1],
    ["박해진2", 2],
    ["박해진3", 3],
    ["박해진4", 4],
    // [5, "박해진4"]
]
