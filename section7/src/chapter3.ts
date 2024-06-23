// 제네릭 인터페이스
interface KeyPair<K,V> { //K와 V를 타입 변수라 한다 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터
    key:K,
    value:V;
};
// 바로 중괄호를 열면 2가지 인수가 필요하다고 에러가 발생함 
// Generic type 'KeyPair<K, V>' requires 2 type argument(s).
// let keyPair: KeyPair = {}

//제네릭 인터페이스는 제네릭 함수와 달리 type으로 정의할 때 <>안에 타입변수에 타입을 직접 할당해줘야한다
let keyPair: KeyPair<string,number> = {
    key: "key",
    value: 0
};

// 제네릭을 통해 하나의 인터페이스로 다양한 타입의 객체를 표현
let kryPair2 : KeyPair<boolean, string[]> = {
    key:true,
    value:["1"]
};

// 인덱스 시그니처
interface NumberMap {
    [key:string] : number;
}

//키가 string, value가 number이기만 하면 됨
let numberMap1 : NumberMap = {
    key: -1231,
    key2: 1231231,
};

//제네릭 인터페이스에 인덱스 시그니처 사용할 경우
 interface Map<V> {
    [key:string]: V;
 };

 let stringMap: Map<string> = {
    key: "value",
 };

 let booleanMap : Map<boolean> = {
    key: true
 };

//  제네릭 타입 별칭
type Map2<V> = {
    [key: string]: V;
};

// 타입 변수에 할당할 타입을 직접 지정해줘야한다
let stringMap2: Map2<string> = {
    key: "hello"
};

/*
제네릭 인터페이스 활용 예시
-> 유저 관리 프로그램
-> 유저 구분 : 학생 유저 / 개발자 유저
*/

interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}


//둘다 type프로퍼티가 스트링 리터럴 => 만약 Student와 Developer union으로 묶으면 서로소 유니온 가능 -> 타입 좁힐 때 좋음
// interface User {
//     name: string;
//     profile: Student | Developer;
// }

//만약 이렇게 함수를 만들 었는데 유저가 많아질 경우 조건문을 매번 써줘야하는 불편함이 발생 
//이를 제네릭 인터페이스로 해결할 수 있음 => <T>라는 타입 별칭 사용후 profile을 유니온 타입 대신 T로 변경

interface User<T> {
    name: string;
    profile: T
}

// function goToSchool(user:User) {
//     if(user.profile.type !== "student"){
//         console.log("잘못 오셨습니다.");
//         return;       
//     }

//     const school = user.profile.school
//     console.log(`${school}로 등교 완료`);
    
// }

// const developerUser : User = {
//     name: "박해진",
//     profile: {
//         type: "developer",
//         skill: "TypeScript"
//     },
// }

// const studentUser : User = {
//     name: "홍길동",
//     profile: {
//         type: "student",
//         school: "가톨릭대학교"
//     },
// }


//제네릭 인터페이스로 변경 후 타입변수에 할당할 타입을 넣어줘야함
function goToSchool(user:User<Student>) {
    // 타입 변수에 Student를 할당해주면 함수 호출 시 인자에 Student외엔 못넣게되니까 타입 좁히기 코드는 필요없어짐
    // if(user.profile.type !== "student"){
    //     console.log("잘못 오셨습니다.");
    //     return;       
    // }

    const school = user.profile.school
    console.log(`${school}로 등교 완료`);
    
}

const developerUser : User<Developer> = {
    name: "박해진",
    profile: {
        type: "developer",
        skill: "TypeScript"
    },
}

const studentUser : User<Student> = {
    name: "홍길동",
    profile: {
        type: "student",
        school: "가톨릭대학교"
    },
}

// developer는 넣을 수 없게됨
// goToSchool(developerUser) 
