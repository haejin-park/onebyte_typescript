// void
// 공허 (아무것도 없음을 의미하는 타입)
function func1(): string {
    return "hello";
}

function func2(): void {
    console.log("hello");
}

// 5.1버전부터는 undefined 타입에 return없어도 됨 (그 아래버전은 return undefined필요)
function func3(): undefined {
    console.log("hello");
}

// null을 타입에 쓰면 return에 또 써줘야하기 때문에 return을 안쓰고 싶을 때만 void써준다
function func4(): null {
    console.log("hello");
    return null;
}

let a: void;
// a = 1;
// a = "hello";
// a = {};
// a = null; //strictNullChecks를 false로 하면 잠시동안 void타입에 null을 넣을 수 가 있다

a = undefined;


// never
// never -> 존재하지 않는
// 불가능한 타입
 function func5(): never {
    while(true) {}
 }

 function func6(): never {
    throw new Error();
 }

// naver는 undefined, null, any타입도 못담는다. strictNullChecks를 false로 해도 못담는다.
//  let b: never;
//  b = 1;
//  b = {};
//  b = "";
//  b = undefined;
//  b = anyVar; 