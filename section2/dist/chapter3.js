//object
//객체 property의 type까지 정해주는 것 -> 객체 리터럴 타입 (구조적 타입 시스템 : Property Based Type System) 
//이름만을 기준으로 하는 경우는 명목적 타입 시스템이라한다. 타입스크립트는 명목적 타입 시스템이 아닌 구조적 타입 시스템을 사용함
let user = {
    id: 1,
    name: "이정환",
};
user.id;
let config = {
    apiKey: "MY API KEY",
};
export {};
// config.apiKey =  "hacked";
