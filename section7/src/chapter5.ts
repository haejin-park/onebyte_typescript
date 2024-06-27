// 프로미스(강의 보기 전 프로미스 링크 보고 오기)

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 3000);
});

promise1.then((res) => {
    // 만약 여기에 연산을 하면 에러가발생한다. 
    // 왜냐하면 프로미스는 resolve, reject에 전달하는 인자의 타입을 자동으로 추론해주지 않기 떄문에
    // res타입이 unknown형식이 되서 연산을 할 수 없기 떄문이다
    // console.log(res * 10); 
});
 
// 프로미스를 클릭해보면 제네릭 인터페이스인걸 볼 수 있다. 
// 프로미스의 생성자 타입을 보고싶으면 promise.d.ts를 클릭 => 타입변수 <T>를 갖고, resolve매개변수에 value의 타입도 T로 동일한 타입을 갖는걸 볼 수 있다
// 프로미스 생성자를 호출 할 떈 제네릭을 사용하면 res의 타입이 추론되서 해결된다
const promise2 = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        // resolve(20); //성공
        reject("~때문에 실패!"); //실패 -> 마우스를 올려보면  (parameter) reject: (reason?: any) => void 라고 나옴 => reason이 선택적 매개변수이며 any로 되어있어서 함수, 객체 등 아무 타입을 다 넣을 수있음. 보통 문자열을 넣음
    }, 3000);

});
promise2.then((res) => {
    //res가 number타입이된다
    console.log(res * 10);
});
promise2.catch((err) => {
    // 자신의 프로젝트 상황에 맞게 에러 형태를 타입을 좁혀서 사용하면 됨
    if(typeof err === "string"){
        console.error(err); 
    }
});

// 프로미스를 반환하는 함수의 타입을 정의
interface Post {
    id: number;
    title: string;
    content: string;
}

// post가 unknown타입이되면 .표기법을 쓸 수 없음 
// .표기법 쓸 수 있게 하는 방법
// 방법1. 타입 변수 할당해주기 Promise<Post>
function fetchPost1() {
    return new Promise<Post>((resolve, reject) => { //Promise가 클래스이기 때문에 이렇게 타입으로도 활용할 수 있다는 것을 알 수 있음
        setTimeout(() => {
            resolve({
                id: 1,
                title: '게시글 제목',
                content: '게시글 컨텐츠',
            })
        },3000);
    });
} 
const postRequest1 = fetchPost1();

postRequest1.then((post) => {
    post.id  
})

// 방법2. 함수 반환값 타입 설정해주기Promise<Post> 
function fetchPost2(): Promise<Post> {
    return new Promise((resolve, reject) => { //Promise가 클래스이기 때문에 이렇게 타입으로도 활용할 수 있다는 것을 알 수 있음
        setTimeout(() => {
            resolve({
                id: 1,
                title: '게시글 제목',
                content: '게시글 컨텐츠',
            })
        },3000);
    });
} 
const postRequest2 = fetchPost2();

postRequest2.then((post) => {
    post.id  
})

// 2번은 함수 반환 값만 봐도 타입을 알 수 있어서 협업하기 좋으니 1번보다 2번을 주로 사용하기!