// keyof 연산자

interface Person1 {
    name: string;
    age: number;
}

//프로퍼티가 두개 있으므로 union타입으로 만들어줘야하는데 이렇게되면 프로퍼티가 많아질 수록 코드가 비효율적이되는 문제가 발생한다
function getPropertyKey1(person: Person1, key: "name"| "age"){
    return person[key];
}

const person1: Person1 = {
    name: "박해진",
    age: 30
}

getPropertyKey1(person1, "name") //박해진


// 이런 문제를 해결하기위해 keyof연산자를 사용한다 => keyof Person => 이렇게하면 모든 프로퍼티를 유니온 타입으로 추출해낼 수 있다
function getPropertyKey2(person: Person1, key: keyof Person1){ //무조건 타입에만 사용할 수 있으므로 소문자로 person1을 넣으면 에러가 발생한다
    return person[key];
}


// 또한 keyof연산자는 typeof연산자와 함께 사용할 수 있다(typeof연산자는 특정 타입을 스트링값으로 반환하는 연산자)
typeof person1 === "object"; 

// typeof연산자는 타입스크립트에서  타입을 정의할 때 사용하면 동작이 바뀐다

//타입을 지운 후  
const person2 = {
    name: "홍길동",
    age: 30
}

// Person2 typef로 person2를 적어주면 타입을 추론해서 Person2 타입 별칭을 정의해준다.
type Person2 = typeof person2;

// 그래서 Keyof typeof person 이렇게 써줄 수 있게 된다
function getPropertyKey3(person: Person2, key: keyof typeof person2){ 
    return person[key];
}


