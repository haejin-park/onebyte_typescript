//object
//객체 property의 type까지 정해주는 것 -> 객체 리터럴 타입 (구조적 타입 시스템 : Property Based Type System) 
//이름만을 기준으로 하는 경우는 명목적 타입 시스템이라한다. 타입스크립트는 명목적 타입 시스템이 아닌 구조적 타입 시스템을 사용함

let user: {
    id?: number, //새로운 회원 만들고 싶은데 이름만 알고 아이디 모르는 경우 -> id를 있어도 되고 없어도되는 선택적 타입으로 바꾸면 오류가 안남(optional property)
    name: string
} = {
    id:1,
    name: "이정환",
};

user.id;


let config : {
 readonly apiKey: string; //readonly를 붙여 읽기전용으로 만들면 property를 변경할 수 없다
} = {
    apiKey: "MY API KEY",
};

// config.apiKey =  "hacked";