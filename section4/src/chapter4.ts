/*
 사용자 정의 타입 가드
*/



type Dog = {
    name: string;
    isBark: boolean;
};

type Cat = {
    name: string;
    isScratch: boolean;
};

type Animal = Dog | Cat;


// 객체가 여러가지 유형으로 나뉠 때 서로소 union타입으로 나눌 수 있지만, 다른사람이 만든 타입이라 수정할 수 없을 경우

// 만약 이렇게 코드를 작성할 경우 알아보기도 어렵고 프로퍼티 이름이 바뀌면 수정해야함 => 이럴 땐 타입가드를 사용하면됨
// function warning(animal:Animal){
//     if("isBark" in animal) {
        
//     } else if ("isScratch" in animal) {

//     }
// }


function isDog (animal:Animal) : animal is Dog{
    return (animal as Dog).isBark !== undefined; 
}

function isCat (animal:Animal) : animal is Cat{
    return (animal as Cat).isScratch !== undefined; 
}

//animal as Dog를 해도 TS는 함수 반환값을 가지고는 타입을 잘 좁혀주지 않음 => 함수 자체를 타입 가드역할을 하도록 만들어줘야함  : animal is Dog
function warning(animal:Animal){
    if(isDog(animal)) {
        animal //마우스를 올려보면 Dog가 나옴
    } else if (isCat(animal)) {
        animal
    }
}