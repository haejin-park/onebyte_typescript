/* 
서로소 유니온 타입)(=taged union type)
교집합이 없는 타입들로만 만든 유니온 타입을 말한다
*/

// 사례1) 웹서비스 회원 분류

type Admin = {
    tag:"ADMIN";
    name: string;
    kickCount: number;
};

type Member = {
    tag:"MEMBER";
    name: string;
    point: number;
};

type Guest = {
    tag: "GUEST";
    name:string;
    visitCount: number;
};

type User = Admin | Member  | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.

// 코드를 이렇게 작성하면 각 타입을 알아보기 힘드므로 좋은 코드가 아니다.
// function login(user: User){
//     if('kickCount' in user) {
//         console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
//     } else if ('point' in user) {
//         console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
//     } else {
//         console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
//     }
// }

// 이럴 땐 tag를 추가하면 됨(tag라는 프로퍼티를 스트링 리터럴 타입으로 만들어주면 교집합이 없어짐 -> 서로소 유니온 타입이 됨)
function login(user: User){
    //방법1 switch
    switch (user.tag) {
        case "ADMIN" :  {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        }
        case "MEMBER" : {
            console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
            break;
        }
        case "GUEST" : {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
            break;
        }
    } 

    // 방법2 if
    if(user.tag === "ADMIN") {
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    } else if (user.tag === "MEMBER") {
        console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
    } else {
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
    }
}

 

//사례2) 비동기 작업의 결과를 처리하는 객체 


type AsyncTask = {
    state: "LOADING" | "FAILED" | "SUCCESS";
    error? : {
        message: string;
    };
    response?: {
        data: string;
    };
};

// // 로딩중 -> 콘솔에 로딩중 출력
// // 실패 -> 살패 : 에러메세지를 출력
// // 성공 -> 성공 : 데이터를 출력

// ? 옵셔널체이닝을 지우면 에러발생(AsyncTask로 나옴). 그 이유는 type을 정의할 때 ?를 붙여줘서 좁혀질 타입이 없기 때문에
// function processResult(task: AsyncTask){
//     switch(task.state) {
//         case "LOADING":{
//             console.log("로딩중");
//             break;
            
//         }
//         case "FAILED":{
//             console.log(`에러발생 ${task.error?.message}`);
//             break;

//         }
//         case "SUCCESS":{
//             console.log(`성공 ${task.response?.data}`);
//             break;

//         }
//     }

// }

// const loading : AsyncTask= {
//     state: "LOADING",
// };

// const failed : AsyncTask= {
//     state: "FAILED",
//     error: {
//         message: "오류 발생원인 ~"
//     }
// };

// const success :AsyncTask = {
//     state: "SUCCESS",
//     response: {
//         data: "데이터 ~"
//     }
// };


// AsyncTask를 3개로 분리해서 만들어야함
type LoadingTask = {
    state: "LOADING";
};

type ErrorTask = {
    state: "FAILED";
    error? : {
        message: string;
    };
}

type SuccessTask = {
    state: "SUCCESS";
    response?: {
        data: string;
    };
};



const loading : LoadingTask= {
    state: "LOADING"
};

const failed : ErrorTask= {
    state: "FAILED",
    error: {
        message: "오류 발생원인 ~"
    }
};

const success :SuccessTask = {
    state: "SUCCESS",
    response: {
        data: "데이터 ~"
    }
};

