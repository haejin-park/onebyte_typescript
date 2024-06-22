/* 인터페이스 확장 */

// 중복된 프로퍼티 -> 비효율, super의 프로퍼티 바뀔 때 sub의 프로퍼티 일일이 바꿔줘야함
interface Animal {
    name: string;
    color: string;
}

// interface Dog {
//     name: string;
//     color:string;
//     isBark:boolean;
// }

// interface Cat {
//     name: string;
//     color: string;
//     isScratch: boolean;
// }

// interface Chicken {
//     name: string;
//     color: string;
//     isFly: boolean;
// }

// 상속(name, color에 추가 프로퍼티 확장)
// 인터페이스는 객체형식이면 다 확장할 수 있다
interface Dog extends Animal { 
    //name: "dog" //상속받는 곳에서 재정의 가능함. 단 상속받은 타입의 sub타입이어야함 (원본 Property가 string 이니까 string의 literal은 가능하지만 number는 안된다)
    isBark:boolean;
}

interface Cat extends Animal{
    isScratch: boolean;
}

interface Chicken extends Animal{
    isFly: boolean;
}

// 다중 확장
interface DogCat extends Dog, Cat {}

const dog : Dog = {
    name: "",
    color:"",
    isBark:true,
}

const cat : Cat = {
    name: "",
    color: "",
    isScratch: true,
}

const chicken : Chicken = {
    name: "",
    color: "",
    isFly: true
}

const dogCat : DogCat = {
    name: "",
    color: "",
    isBark: true,
    isScratch:true
}