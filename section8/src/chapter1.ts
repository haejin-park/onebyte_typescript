// 인덱스드 엑세스 타입
// 인덱스를 이용해 다른 타입내의 특정 프로퍼티의 타입을 추출하는 타입
// 객체, 배열, 튜플에 사용할 수 있음

// 객체와 함께 사용할 때
interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}

// 이렇게 해도되지만 만약 author에 age라는 프로퍼티가 추가될 수 있고 그러면 또 인자와 타입을 일일이 추가해줘야하는 문제가 발생
// function printAuthorInfo(author: {id: number; name: string}) {
//     console.log(`${author.name}-${author.id}`);    
// }

// 이 문제를 해결하는 방법 => 인덱스드 엑세스 타입 => 필요한 프로퍼티만 빼오는 방식 (author내의 프로퍼티가 추가되거나 타입이 추가되더라도 자동 반영됨)
// 만약 author에서 id만 빼오고 싶을 떈 Post["author"]["id"]이렇게 중첩으로 대괄호를 써서 가져오면 된다
 function printAuthorInfo1(author: Post["author"]) { //존재하지 않는 프로퍼티를 써주면 에러가 발생함 ex Post["what"]
    console.log(`${author.name}-${author.id}`);    
}

const post1 : Post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "박해진",
        age: 30
    },
};

// 배열과 함께 사용할 때
// 배열 타입으로 부터 특정 요소의 타입을 뽑아내는 것도 가능
// 인터페이스는 객체로 특화되어있어 배열로 만들기는 불편하므로 type으로 테스트

type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}[];

// PostList[number] 이렇게 요소의 타입을 먼저 뽑고 ["author"] 이렇게 author를 뽑으면 된다
function printAuthorInfo2(author: PostList[number]["author"]) {  
    console.log(`${author.name}-${author.id}`);    
}

// 이렇게 indexed acess type을 이용할 때 대괄호 안에 number type을 넣어주면 하나만 가져온다 
// (number대신 0을 넣어도 배열 요소의 타입을 추출해온다)
// 단 0은 number literal 타입이므로 변수에 저장해서 넣을 경우 오류가 발생한다
// 인덱스에 들어가는건 무조건 타입이어야한다
const post2 : PostList[number] = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "박해진",
        age: 30
    },
};

// 튜플로 사용할 때
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3]; // 존재하지 않는 인덱스 타입 추출하려고 하면 에러발생

// number를 넣어주면 최적의 공통 타입을 뽑아온다(세 타입의 유니온 타입 string | number | boolean)
type TupNum = Tup[number];


