/* 
타입 단언
*/

type Person = {
    name: string;
    age: number;
};

// 속성이 없으면 오류 발생
// let person : Person = {};

// 타입 단언 type assertion
let person = {} as Person; //Person으로 자동 추론됨
person.name = "이정환";
person.age = 27;

type Dog = {
    name: string;
    color: string;
};

let dog : Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도" // 타입 단언하면 프로퍼티에 오류가 사라지고 Dog로 자동 추론됨
} as Dog;


/* 
타입 단언의 규칙
단언식 -> 값 as 단언 
A as B
A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야함
*/
let num1 = 10 as never;// A(super) <- B (never는 모든 서브)
let num2 = 10 as unknown; //A -> B (unknown은 모든 타입의 super인 전체 집합 타입)
// let num3 = 10 as string; //겹치는게 없기 때문에 타입 단언 불가

// 다중 단언(한번 한 단언하고 또 한 경우 단언이 안되는 것도 단언을 할수는 있으나 이러면 타입스크립트를 쓸 이유가 없으므로 좋은 방법은 아니다)
let  num3 = 10 as unknown as string //number -> unknown -> string

// const 단언
let num4 = 10 as const;
// 객체 타입
let cat = {
    name: "야옹이",
    color: "yellow",
} as const;

//const를 붙이면 모든 property가 읽기전용이 되서 할당할 수 없게됨
// cat.name = ''

// non null단언
type Post = {
    title: string;
    author? : string;
}

let post : Post = {
    title: "게시글1",
     author: "이정환"
}

// 옵셔널 체이닝 -> ?를 붙이면 undefined가 될 수도 있기 때문에 number유형에 할당을 할 수 없어서 오류가 발생
// Type 'number | undefined' is not assignable to type 'number'.  Type 'undefined' is not assignable to type 'number'.
// const len: number = post.author?.length;
const len: number = post.author!.length;
// !로 바꾸면 null이거나 undefined가 아니라 string일거라고 믿기 때문에 오류가 사라짐


