//유틸리티 타입 => 자주 사용되는 타입을 만들어놓은 것 ex)제네릭, 맵드 타입, 조건부 타입 등

/* 
Partial<T>
부분적인, 일부분의
특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
*/

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

// 맵드 타입에 제공되는 연산자
type Partial<T> = {
    [key in keyof T]?: T[key];
};

// 임시 저장된 게시글을 변수로 표현
// tag가 없으면 오류 발생 => Partial타입이 모든 프로퍼티를 선택적 프로퍼티로 만듬 => 오류가 사라짐
const draft: Partial<Post> = {
    title: "제목 나중에 짓자",
    content: "초안..."
}

/* 
Required<T>
-> 필수의, 필수적인
-> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
*/

type Required<T> = {
    [key in keyof T]-?: T[key];
}

const withThumbnailPost : Required<Post> = {
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    thumbnailURL : "https://...", // 선택적 프로퍼티에서 필수 프로퍼티가 되서 안쓰면 에러 발생
}

/* 
Readonly<T>
-> 읽기 전용 수정 불가
-> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
*/
type Readonly<T> = {
    readonly [key in keyof T]: T[key];
}

const readonlyPost: Readonly<Post> = {
    title: "보호된 게시글 입니다.",
    tags: [],
    content: "",
};

// readonlyPost.content = "";읽기전용이 되서 에러 발생