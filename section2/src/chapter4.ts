// 객체 타입 정의 (타입에 속성을 추가하면 User타입을 적용한 모든 객체에 영향이 간다)
// 같은 스코프 내에서 type별칭은 중복되면 안된다
type User = {
    id:number;
    name:string;
    nickname:string;
    birth:string;
    bio:string;
    location:string;
}

//func안에서는 User라는 타입을 다르게 정의 할 수 있다
function func() {
    type User = {};
}

//타입 별칭으로 중복 제거
let user1: User = {
    id: 1,
    name: "이정환1",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio:"안녕하세요",
    location: "부천시"
}

let user2: User = {
    id: 1,
    name: "이정환2",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio:"안녕하세요",
    location: "부천시"
}

//규칙을 보면 키, 밸류는 스트링 타입 
//키와 밸류가 모두 스트링타입이면 어떤 국가도 모두 추가할 수있음 
// type CountryCodes = {
//     korea: string;
//     UnitedState: string;
//     UnitedKingdom: string;
// }

//인덱스 시그니처
type CountryCode = {
    [key:string]: string;
}

let contryCodes :CountryCode = {
    Korea: 'ko',
    UnitedState: "us",
    UniterdKingdom: "uk"
}

type CountryNumberCodes = {
    [key:string]: number;
    Korea: number //string으로 바꾸면 문제가 생김. 왜냐하면 인덱스 시그니처 타입에 추가 속성의 타입을 지정할 땐 그 타입을 일치사켜주거나 호환이 가능해야함
}

//인덱스 시그니처 타입은 규칙을 위반하지만 않으면 모두 허용
//그래서 빈객체 넣었을 때 오류가 안나므로 korea객체 속성을 반드시 가지도록 하게 하려면 이 속성의 타입을 추가해야함. 그러면 해당 속성을 반드시 가지도록 만들 수 있음
let countryNumberCodes : CountryNumberCodes= {
    Korea: 410
}





