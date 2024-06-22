/* 인터페이스 */
interface Person {
    readonly name: string;
    age?: number;
    //메서드 타입을 정의할 때 
    // sayHi: () => void; //함수타입 표현식으로 할 수도 있고
    sayHi(): void; //호출 시그니처를 이용할 수 도 있다
    sayHi(a:number, b:number): void
    //만약 sayHi():void가 아니라 ():void이렇게 호출 시그니처만 정의 하게되면 
    //Person타입 자체가 함수 타입이 되어버리기 때문에 이름을 꼭 붙여줘야한다
}

// //type별칭과 함수 예시
// type Func = {
//     (): void;
// };

// const func: Func = () => {};

const person : Person = {  
    name: "박해진",
    // age: 27, //선택적 프로퍼티
    sayHi: function() {
        console.log("Hi");   
    }
}

// person.name = "홍길동" //읽기전용

/* 
ayHi으로 인자 안받는거, 2개받는거 이렇게 오버로딩 하고싶을 때
=> 함수 타입 표현식은 안되고 호출 시그니처만 가능하며 메서드 타입 두번 정의해야한다
만약 함수 타입 표현식으로 하게되면 식별자가 중복되었다는 오류가 발생한다
*/

person.sayHi();
person.sayHi(1,2);

// 타입에서는 union과 intersection을 만들 수 있지만 interface는 이게 안되므로 타입 별칭에 해주거나 주석해 해줘야한다
// 타입 별칭에 union
type Type1 = number | string | Person; 
// 타입 별칭에 intersection
type Type2 = number & string & Person;


const person2 : Person | number = { //타입 주석에 union한 경우 
    name: "박해진",
    sayHi: function() {
        console.log("Hi");   
    }
}


//참고) 인터페이스에 이름을 정할 땐 I를 붙이는 관습도 있다(헝가리안 표기법).하지만 Js는 스네이크, 카멜, 파스칼표기법을 쓰기 때문에 안붙일 수도 있으며 조직내 컨벤션에 따라 다르다