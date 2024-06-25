/* 
Pick<T,K>
-> 뽑다, 고르다 
-> 객체 타입으로 부터 특정 프로퍼티만 딱 골라내는 그런 타입
*/

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?:string;
}

//Type 'K' is not assignable to type 'string | number | symbol'.
//K에 아무 타입이나 들어가지 못하도록 제약을 걸어줘야한다  K extends keyof T 
//=> K에 할당할 수 있는 타입은 무조건 T로 들어오는 객체 타입에 키값들을 추출한 유니온 타입의 서브타입만 들어올 수 있다
type Pick<T, K extends keyof T> = {
    // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
    // 'title | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
    [key in K] : T[key];

};
//그래서  "title" | "content" 대신 Number를 넣으면 에러가 발생한다
const legacyPost: Pick<Post, "title" | "content"> = {
    title: "옛날 글",
    content: "옛날 컨텐츠",
}

/* 
Omit(Pick과 반대 기능)
-> 생략하다, 빼다
-> 객체 타입으로 부터 특정 프로퍼티를 제거하는 타입
*/
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>; //T에서 K만 뺴기
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title | 'content' |  'tags' |  'thumbnailURL', 'title'>>
// Pick<'content' |  'tags' |  'thumbnailURL'>
// 만약 골라내야하는 Property가 많아지면 골라내기 힘드므로 이럴 때 Omit에서 뺄 프로퍼티만 뺴면 됨
const noTitlePost: Omit<Post, "title"> = {
    content: "",
    tags: [],
    thumbnailURL: "",
}

/*
Record<K,V>
*/

// 중복코드가 많아 안좋은 예
type ThumbnailLegacy = {
    large: {
        url: string;
    };
    medium: {
        url: string;
    };
    small: {
        url: string;
    };
    watch: {
        url: string;
    }
}

type Record<K extends keyof any, V> = {
    [key in K]: V;
}

// 레코드 타입 => 키(프로퍼티)와 밸류(모든 프로퍼티에 추가가능)를 받음
type Thumbnail = Record<"large" | "medium" | "small" | "watch", {url: string; size: number}>;