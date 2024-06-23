// 맵드 타입

interface User {
    id: number;
    name: string;
    age: number;
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User{
    return {
        id: 1,
        name: "박해진",
        age: 30,
    };
}

// age만 수정하고 싶을 때 변경되는 값만 보내고 싶을 때 User타입으로 되어있을 경우 
// function updateUser(user:User) {}

//=> 선택적 프로퍼티를 사용하는 PartialUser인터페이스를 만들어서 넣어줄 수 있지만 기능 하나 만들기위해 중복되는 코드가 발생한다는 문제가 있음
// interface PartialUser {
//     id?: number;
//     name?: string;
//     age?: number;
// }

function updateUser(user:PartialUser) {
    //수정하는 기능
}

/* 
이 문제를 해결할 땐 맵드타입 사용(맵드 타입은 인터페이스는 안되고 타입 별칭으로만 사용할 수 있다)

문법
index signiture처럼 []를 열어서 프로퍼티 키를 모두 유니온으로 입력해서 사용
앞은 key(key가 될 수 있는 것들): 뒤는 value(각 키가 될 수 있는 값) 

id : User["id"] => number타입이 됨
name: User["name"] => string타입이 됨
age: User["age"] => number타입이 됨

여기서 mapped타입이 제공하는 프로퍼티가 모두 선택적 프로퍼티가 될 수 있도록 []뒤에 ? 붙여주기
*/
type PartialUser = {
    [key in "id" | "name" | "age"]?: User[key]; 
}

updateUser({
    id: 1,
    name: "박해진",
    age: 20
})

// 예시2 모든 프로펕니 boolean으로 만들고 싶을 때
type BooleanUser1 = {
    [key in "id" | "name" | "age"] :boolean
};

// 일일이 프로퍼티 유니온으로 쓰기 귀찮을 땐 keyof쓰기
type BooleanUser2 = {
    [key in keyof User] :boolean
};

// 예시3 다 읽기 전용인 프로퍼티로 만들고 싶을 때
type ReadOnlyUser = {
    readonly [key in keyof User] : User[key]
}

function fetchUser2(): ReadOnlyUser{
    return {
        id: 1,
        name: "박해진",
        age: 30,
    };
}