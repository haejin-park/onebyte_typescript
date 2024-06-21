// 기본타입의 호환성
let num1:number = 10;
let num2:10 = 10;
// 업캐스팅이라 가능
num1 = num2;

// 객체 타입간의 호환성
// 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은지
type Animal = {
    name: string;
    color: string;
}
type Dog = {
    name: string;
    color: string;
    breed:string;
}
let animal:Animal ={
    name:"기린",
    color: "yellow",
};


let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"
}

animal = dog;
// dog = animal;  //타입스크립트는 구조적 타입시스템 -> 객체타입에서 추가 property가 더 적은 것(animal)이 상위 -> 다운캐스팅은 불가 

type Book = {
    name:string;
    price: number;
}

type ProgrammingBook = {
    name:string;
    price:number;
    skill: string;
};

let book : Book;
let programmingBook: ProgrammingBook = {
    name: "한입 크기로 잘라먹는 리액트",
    price:33000,
    skill: "reactjs"
}

book = programmingBook;
// programmingBook = book; //다운캐스팅이라 불가


// 초과 프로퍼티 검사 발동 (Object literal may only specify known properties, and 'skill' does not exist in type 'Book')
let book2: Book = {
    name: "한입 크기로 잘라먹는 리액트",
    price:33000,
    // skill: "reactjs"
}

// 객체 리터럴을 사용한건 아니라서 이런 경우는 괜찮음
let book3 :Book = programmingBook;

// 함수의 인자로도 초과 프로퍼티 검사 발동함
function func(book:Book){}
func({
    name: "한입 크기로 잘라먹는 리액트",
    price:33000,
    // skill:"reactjs",
});
// 인수로 보내야함
func(programmingBook)